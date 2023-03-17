import { ruta } from "../types/rutas";
import { rutaSchema } from "../schemas/rutaSchema";
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

  constructor(public coleccion: ruta[]) {
    this.database = lowdb(new FileSync("src/databases/db_rutas.json"));
    if (this.database.has("ruta").value()) {
      let dbItems = this.database.get("ruta").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new ruta(
            item.id,
            item.nombre,
            item.coordenadasInicio,
            item.coordenadasFinal,
            item.longitudRuta,
            item.desnivelMedio,
            item.usuariosFinalizados,
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
      usuariosFinalizados: ruta.getUsuariosFinalizados(),
      tipoActividad: ruta.getTipoActividad(),
      calificacionMedia: ruta.getCalificacionMedia(),
    };
    this.database.get("ruta").push(dbRuta).write();
  }

  public removeUsuario(id: string) {
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

  public addUserToRuta(user_id: string, ruta_id: string) {
    const rutaAEditar = this.coleccionRutas.find(
      (ruta) => ruta.getId() === ruta_id
    );
    if (rutaAEditar) {
      // comprobar que en la ruta no esté ya el usuario
      if (rutaAEditar.getUsuariosFinalizados().includes(user_id)) {
        console.log("El usuario ya está en la ruta");
      } else {
        rutaAEditar.addUsuarioFinalizado(user_id);
        this.database
          .get("ruta")
          .find({ id: ruta_id })
          .assign({ usuariosFinalizados: rutaAEditar.getUsuariosFinalizados() })
          .write();
      }
    }
  }

  //Alfabéticamente por nombre de la ruta, ascendente y descendente.
  public getRutasAlfabetico(orden: boolean) : ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    } else {
      return this.coleccionRutas.sort((a, b) => b.getNombre().localeCompare(a.getNombre()));
    }
  }

  //Cantidad de usuarios que realizan las rutas, ascendente y descendente.
  public getRutasCantidadUsuarios(orden: boolean) : ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) => a.getUsuariosFinalizados().length - b.getUsuariosFinalizados().length);
    } else {
      return this.coleccionRutas.sort((a, b) => b.getUsuariosFinalizados().length - a.getUsuariosFinalizados().length);
    }
  }
  // Por la calificación media de la ruta, ascendente y descendente.

  public getRutasCalificacionMedia(orden: boolean) : ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) => a.getCalificacionMedia() - b.getCalificacionMedia());
    } else {
      return this.coleccionRutas.sort((a, b) => b.getCalificacionMedia() - a.getCalificacionMedia());
    }
  }

  //Ordenar por actividad: correr o ciclismo.

  public getRutasActividad(actividad: string) : ruta[] | undefined {
    // comprobamos que la actividad es ciclismo o correr
    if (actividad !== "Bicicleta" && actividad !== "Correr") {
    return this.coleccionRutas.filter((ruta) => ruta.getTipoActividad() === actividad);
    } else {
      return undefined
    }
  }

}
