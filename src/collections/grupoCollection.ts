import { grupo } from '../types/grupos'
import { grupoSchema } from '../schemas/grupoSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

import { rutaCollection } from '../collections/rutaCollection'

export class grupoCollection {

private coleccionGrupos: grupo[];
private database: lowdb.LowdbSync<grupoSchema>;


constructor(public coleccion: grupo []) {
    this.database = lowdb(new FileSync('src/databases/db_grupos.json'));
    if (this.database.has("grupo").value()) {
        const dbItems = this.database.get("grupo").value();
        dbItems.forEach(item => this.coleccion.push(new grupo(item.id, item.nombre, item.participantes, item.historicoRutas)));
    }
    this.coleccionGrupos = coleccion;
}

public getColeccionGrupos(): grupo [] {
    return this.coleccionGrupos;

}

public addGrupo(grupo: grupo) {
    this.coleccionGrupos.push(grupo);
    const dbGrupo = {
        id: grupo.getId(),
        nombre: grupo.getNombre(),
        participantes: grupo.getParticipantes(),
        historicoRutas: grupo.getHistoricoRutas()
    }
    this.database.get("grupo").push(dbGrupo).write();
}

public removeGrupo(id: string) {
    const grupoAEliminar = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupoAEliminar) {
        this.coleccionGrupos = this.coleccionGrupos.filter(grupo => grupo.getId() !== id);
        this.database.get("grupo").remove({ id: id }).write();
    }
}

public getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number } {
    const grupo = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupo) {
        const historicoRutas = grupo.getHistoricoRutas();
        let km = 0;
        let desnivel = 0;
        const fechaActual = new Date();
        const fechaInicio = new Date();
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
            const historicoFecha = new Date(historico.fecha);
            if (historicoFecha >= fechaInicio && historicoFecha <= fechaActual) {
                const ruta = coleccionRutas.getColeccionRutas().find(ruta => ruta.getId() === historico.ruta);
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

/*
Clasificación de los usuarios: Ranking de los usuarios que más entrenamientos han realizado históricamente dentro del grupo
, es decir, ordenar los usuarios por la cantidad de km totales o desnivel total que han acumulado.
*/

public getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[] {
    const grupo = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupo) {
        const historicoRutas = grupo.getHistoricoRutas();
        const usuarios = grupo.getParticipantes()
        const clasificacion: {usuario: string, valor: number}[] = [];
        usuarios?.forEach(usuario => {
            let km = 0;
            let desnivel = 0;
            historicoRutas?.forEach(historico => {
                if (historico.usuarios.includes(usuario)) {
                    const ruta = coleccionRutas.getColeccionRutas().find(ruta => ruta.getId() === historico.ruta);
                    if (ruta) {
                        km += ruta.getLongitudRuta()
                        desnivel += ruta.getDesnivelMedio()
                    }
                }
            });
            clasificacion.push({usuario: usuario, valor: tipo === "km" ? km : desnivel});
        });
        clasificacion.sort((a, b) => b.valor - a.valor);
        return clasificacion;
    }
    return [];
}

// Rutas favoritas del grupo: Rutas que los usuarios del grupo han realizado con mayor frecuencia en sus salidas conjuntas.
public getRutasFavoritas(coleccionRutas: rutaCollection ,id: string): {ruta: string, frecuencia: number}[] {
    const grupo = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupo) {
        const historicoRutas = grupo.getHistoricoRutas();
        const rutas: {ruta: string, frecuencia: number}[] = [];
        historicoRutas?.forEach(historico => {
            const ruta = rutas.find(ruta => ruta.ruta === historico.ruta);
            if (ruta) {
                ruta.frecuencia++;
            } else {
                rutas.push({ruta: historico.ruta, frecuencia: 1});
            }
        });
        rutas.sort((a, b) => b.frecuencia - a.frecuencia);
        // Solo devolvemos las 3 primeras
        return rutas.slice(0, 3);
    }
    return [];
}
}