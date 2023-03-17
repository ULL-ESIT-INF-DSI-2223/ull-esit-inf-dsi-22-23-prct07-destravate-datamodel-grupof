import { usuario } from '../types/usuarios'
import { usuarioSchema } from '../schemas/usuarioSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { rutaCollection } from './rutaCollection';
import { retoCollection } from './retoCollection';
/**
 * Usuarios:
Alfabéticamente por nombre del usuario, ascendente y descendente.
Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
 */

export class usuarioCollection {

private coleccionUsuarios: usuario[];
private database: lowdb.LowdbSync<usuarioSchema>;


constructor(public coleccion: usuario []) {
    this.database = lowdb(new FileSync('src/databases/db_usuarios.json'));
    if (this.database.has("usuario").value()) {
        let dbItems = this.database.get("usuario").value();
        dbItems.forEach(item => this.coleccion.push(new usuario(item.id, item.nombre, item.actividades, item.amigos, item.grupoAmigos, item.historicoRutas)));
    }
    this.coleccionUsuarios = coleccion;
}

public getColeccionUsuarios(): usuario[] {
    return this.coleccionUsuarios;

}

public getHistoricoRutas(id: string): { fecha: Date, ruta: string }[] | undefined {
    let usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id)
    return usuario ? usuario.getHistoricoRutas() : undefined;

}

public addUsuario(usuario: usuario) {
    this.coleccionUsuarios.push(usuario);
    const dbUsuario = {
        id: usuario.getId(),
        nombre: usuario.getNombre(),
        actividades: usuario.getActividades(),
        amigos: usuario.getAmigos(),
        grupoAmigos: usuario.getGrupoAmigos(),
        historicoRutas: usuario.getHistoricoRutas()
    }
    this.database.get("usuario").push(dbUsuario).write();
}

public removeUsuario(id: string) {
    const usuarioAEliminar = this.coleccionUsuarios.find(usuario => usuario.getId() === id);
    if (usuarioAEliminar) {
        this.coleccionUsuarios = this.coleccionUsuarios.filter(usuario => usuario.getId() !== id);
        this.database.get("usuario").remove({ id: id }).write();
    }
}

// Estadísticas de entrenamiento: Cantidad de km y desnivel total acumulados en la semana, mes y año.

public getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number } {
    let usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id);
    if (usuario) {
        let historicoRutas = usuario.getHistoricoRutas();
        let km = 0;
        let desnivel = 0;
        let fechaActual = new Date();
        let fechaInicio = new Date();
        switch (tiempo) {
            case "semana":
                fechaInicio.setDate(fechaInicio.getDate() - 7);
                break;
            case "mes":
                fechaInicio.setMonth(fechaInicio.getMonth() - 1);
                break;
            case "año":
                fechaInicio.setFullYear(fechaInicio.getFullYear() - 1);
                break;
        }
        historicoRutas?.forEach(historico => {
            let historicoFecha = new Date(historico.fecha);
            if (historicoFecha >= fechaInicio && historicoFecha <= fechaActual) {
                let ruta = coleccionRutas.getColeccionRutas().find(ruta => ruta.getId() === historico.ruta);
                if (ruta) {
                    km += ruta.getLongitudRuta()
                    desnivel += ruta.getDesnivelMedio()

                }
            }
        });
        return { km: km, desnivel: desnivel };
    }
    return { km: 0, desnivel: 0 };
}

public getRutaFavorita(coleccionRutas: rutaCollection ,id_usuario: string): string | string [] | undefined {
    // Retornar solo las 3 primeras
    let usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id_usuario);
    if (usuario) {
        let historicoRutas = usuario.getHistoricoRutas();
        let rutasFavoritas: { ruta: string, veces: number }[] = [];
        historicoRutas?.forEach(historico => {
            let ruta = rutasFavoritas.find(ruta => ruta.ruta === historico.ruta);
            if (ruta) {
                ruta.veces++;
            } else {
                rutasFavoritas.push({ ruta: historico.ruta, veces: 1 });
            }
        }
        );
        rutasFavoritas.sort((a, b) => b.veces - a.veces);
        // Retornar las 3 rutas favoritas
        let rutasFavoritasRetorno: string [] = [];
        let nFavoritas = rutasFavoritas.length > 3 ? 3 : rutasFavoritas.length;
        for (let i = 0; i < nFavoritas; i++) {
            rutasFavoritasRetorno.push(rutasFavoritas[i].ruta);
        }
        return rutasFavoritasRetorno;
    }
    return undefined;
}

public getRetosActivos(coleccionRetos: retoCollection ,id_usuario: string): string[] {
    let retosActivos: string[] = [];
    let retos = coleccionRetos.getColeccionRetos();
    retos ? retos.forEach(reto => {
        if (reto.getUsuariosRealizandoReto().includes(id_usuario)) {
            retosActivos.push(reto.getId());
        }
    }
    ) : undefined;
    return retosActivos;
}

}
