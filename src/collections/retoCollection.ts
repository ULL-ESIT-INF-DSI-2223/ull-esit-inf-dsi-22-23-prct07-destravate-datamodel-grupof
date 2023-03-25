import { reto } from "../types/retos";
import { retoSchema } from "../schemas/retoSchema";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { usuarioCollection } from "./usuarioCollection";

export class retoCollection {
  private coleccionRetos: reto[];
  private database: lowdb.LowdbSync<retoSchema>;

  constructor(public coleccion: reto[]) {
    this.database = lowdb(new FileSync("src/databases/db_retos.json"));
    if (this.database.has("reto").value()) {
      const dbItems = this.database.get("reto").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new reto(
            item.id,
            item.nombre,
            item.rutasReto,
            item.tipoActividad,
            item.usuariosRealizandoReto
          )
        )
      );
    }
    this.coleccionRetos = coleccion;
  }

  public getColeccionRetos(): reto[] {
    return this.coleccionRetos;
  }

  public getRetosUsuario(coleccionUsuario: usuarioCollection, idUsuario: string): reto[] {
    const retosUsuario: reto[] = [];
    this.coleccionRetos.forEach((reto) => {
      if (reto.getUsuariosRealizandoReto().includes(idUsuario)) {
        retosUsuario.push(reto);
      }
    });
    return retosUsuario;
  
  }

  public addReto(reto: reto) {
    this.coleccionRetos.push(reto);
    const dbRuta = {
      id: reto.getId(),
      nombre: reto.getNombre(),
      rutasReto: reto.getRutasReto(),
      tipoActividad: reto.getTipoActividad(),
      usuariosRealizandoReto: reto.getUsuariosRealizandoReto(),
    };
    this.database.get("reto").push(dbRuta).write();
  }

  public removeReto(id: string) {
    const retoAEliminar = this.coleccionRetos.find(
      (reto) => reto.getId() === id
    );
    if (retoAEliminar) {
      this.coleccionRetos = this.coleccionRetos.filter(
        (reto) => reto.getId() !== id
      );
      this.database.get("reto").remove({ id: id }).write();
    }
  }

  public getInfoReto(id: string, coleccionUsuarios: usuarioCollection): void {
    const reto = this.coleccionRetos.find((ruta) => ruta.getId() === id);
    
    if (reto) {
      console.log("Nombre: " + reto.getNombre());
      console.log("Tipo de actividad: " + reto.getTipoActividad());
      console.log("Rutas del reto: ");
      reto.getRutasReto().forEach((ruta) => {
        console.log("Ruta: " + ruta);
      });
      console.log("Usuarios realizando el reto: ");
      reto.getUsuariosRealizandoReto().forEach((idUsuario) => {
        const usuario = coleccionUsuarios.getColeccionUsuarios().find((usuario) => usuario.getId() === idUsuario);
        if (usuario) {
          console.log("Nombre: " + usuario.getNombre());
        }
      });
    }
  
  }
}
