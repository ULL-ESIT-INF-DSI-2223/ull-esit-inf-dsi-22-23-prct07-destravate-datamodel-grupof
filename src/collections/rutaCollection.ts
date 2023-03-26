import { ruta } from "../types/rutas";
import { rutaSchema } from "../schemas/rutaSchema";
import { usuarioCollection } from "./usuarioCollection";
import { usuarioSchema } from "../schemas/usuarioSchema";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

/**Rutas:
Alfabéticamente por nombre de la ruta, ascendente y descendente.
Cantidad de usuarios que realizan las rutas, ascendente y descendente.
Por longitud de la ruta, ascendente y descendente.
Por la calificación media de la ruta, ascendente y descendente.
Ordenar por actividad: correr o ciclismo.
 */

export class rutaCollection {
  private coleccionRutas: ruta[];
  private database: lowdb.LowdbSync<rutaSchema>;
  private databaseUsuarios: lowdb.LowdbSync<usuarioSchema>;

  constructor(public coleccion: ruta[]) {
    this.database = lowdb(new FileSync("src/databases/db_rutas.json"));
    this.databaseUsuarios = lowdb(new FileSync("src/databases/db_usuarios.json"));
    if (this.database.has("ruta").value()) {
      const dbItems = this.database.get("ruta").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new ruta(
            item.id,
            item.nombre,
            item.coordenadasInicio,
            item.coordenadasFinal,
            item.longitudRuta,
            item.desnivelMedio,
            item.tipoActividad,
            item.calificacionMedia
          )
        )
      );
    }
    this.coleccionRutas = coleccion;
  }

  public getColeccionRutas(): ruta[] {
    return this.coleccionRutas;
  }

  public addRuta(ruta: ruta) {
    this.coleccionRutas.push(ruta);
    const dbRuta = {
      id: ruta.getId(),
      nombre: ruta.getNombre(),
      coordenadasInicio: ruta.getCoordenadasInicio(),
      coordenadasFinal: ruta.getCoordenadasFinal(),
      longitudRuta: ruta.getLongitudRuta(),
      desnivelMedio: ruta.getDesnivelMedio(),
      tipoActividad: ruta.getTipoActividad(),
      calificacionMedia: ruta.getCalificacionMedia(),
    };
    this.database.get("ruta").push(dbRuta).write();
  }

  public removeRuta(id: string) {
    const rutaAEliminar = this.coleccionRutas.find(
      (ruta) => ruta.getId() === id
    );
    if (rutaAEliminar) {
      this.coleccionRutas = this.coleccionRutas.filter(
        (ruta) => ruta.getId() !== id
      );
      this.database.get("ruta").remove({ id: id }).write();
    }
  }

  //Alfabéticamente por nombre de la ruta, ascendente y descendente.
  public getRutasAlfabetico(orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) =>
        a.getNombre().localeCompare(b.getNombre())
      );
    } else {
      return this.coleccionRutas.sort((a, b) =>
        b.getNombre().localeCompare(a.getNombre())
      );
    }
  }

  //Cantidad de usuarios que realizan las rutas, ascendente y descendente.
  public getRutasPorCantidadUsuarios(coleccionUsuarios: usuarioCollection, orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort(
        (a, b) =>
          this.getUsuariosFinalizados(coleccionUsuarios, a.getId()).length -
          this.getUsuariosFinalizados(coleccionUsuarios, b.getId()).length
      );
    } else {
      return this.coleccionRutas.sort(
        (a, b) =>
          this.getUsuariosFinalizados(coleccionUsuarios, b.getId()).length
          - this.getUsuariosFinalizados(coleccionUsuarios, a.getId()).length
      );
    }
  }

  // Por la calificación media de la ruta, ascendente y descendente.

  public getRutasPorLongitud(orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort(
        (a, b) => a.getLongitudRuta() - b.getLongitudRuta()
      );
    } else {
      return this.coleccionRutas.sort(
        (a, b) => b.getLongitudRuta() - a.getLongitudRuta()
      );
    }

  }
  public getRutasCalificacionMedia(orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort(
        (a, b) => a.getCalificacionMedia() - b.getCalificacionMedia()
      );
    } else {
      return this.coleccionRutas.sort(
        (a, b) => b.getCalificacionMedia() - a.getCalificacionMedia()
      );
    }
  }

  public getRutasActividad(actividad: string): ruta[] {
    // comprobamos que la actividad es ciclismo o correr
    if (actividad === "Bicicleta" || actividad === "Correr") {
      return this.coleccionRutas.filter(
        (ruta) => ruta.getTipoActividad() === actividad
      );
    } else {
      return [];
    }
  }

  public getInfoRuta(id: string, coleccionUsuarios: usuarioCollection): void {
    const ruta = this.coleccionRutas.find((ruta) => ruta.getId() === id);
    if (ruta) {
      console.log("Nombre: " + ruta.getNombre());
      console.log("Coordenadas inicio: " + ruta.getCoordenadasInicio());
      console.log("Coordenadas final: " + ruta.getCoordenadasFinal());
      console.log("Longitud de la ruta: " + ruta.getLongitudRuta());
      console.log("Desnivel medio: " + ruta.getDesnivelMedio());
      console.log(
        "Usuarios finalizados: " +
          this.getUsuariosFinalizados(coleccionUsuarios, id)
      );
      console.log("Tipo de actividad: " + ruta.getTipoActividad());
      console.log("Calificación media: " + ruta.getCalificacionMedia());
    } else {
      console.log("No existe la ruta");
    }
  }

  getRutaById(id: string): ruta | undefined {
    return this.coleccionRutas.find((ruta) => ruta.getId() === id);
  }


  public addRutaRealizada(coleccionUsuarios: usuarioCollection,id: string, user_id: string) {
    // buscar el usuario con ese ID.
    const usuario = coleccionUsuarios.getColeccionUsuarios().find(usuario => usuario.getId() === user_id);
    if (usuario) {
      // comprobar que la ruta existe
      const ruta = this.coleccionRutas.find(ruta => ruta.getId() === id);
      if (ruta) {
        usuario.addHistoricoRutas(new Date(Date.now()), id);
        // añadir a la base da datos
        this.databaseUsuarios.get("usuario").find({ id: user_id }).get("historicoRutas").push({ fecha: new Date(Date.now()), ruta: id }).write();
      } else {
        console.log("No existe la ruta");
      } } else {
      console.log("No existe el usuario");

    }

  }

  public getUsuariosFinalizados(
    coleccionUsuarios: usuarioCollection,
    id: string
  ): string[] {
    const usuariosFinalizados = new Set<string>();
    const usuarios = coleccionUsuarios.getColeccionUsuarios();

    if (!ruta) {
      console.log("No existe la ruta");
    }

    usuarios.forEach((usuario) => {
      if (usuario.getHistoricoRutas().find((ruta) => ruta.ruta === id)) {
        usuariosFinalizados.add(usuario.getId());
      }
    });

    return Array.from(usuariosFinalizados);
  }
}
