import { reto } from '../types/retos'
import { retoSchema } from '../schemas/retoSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


export class retoCollection {

private coleccionRetos: reto [];
private database: lowdb.LowdbSync<retoSchema>;


constructor(public coleccion: reto []) {
    this.database = lowdb(new FileSync('src/databases/db_retos.json'));
    if (this.database.has("reto").value()) {
        let dbItems = this.database.get("reto").value();
        dbItems.forEach(item => this.coleccion.push(new reto(item.id, item.nombre, item.rutasReto, item.tipoActividad, item.usuariosRealizandoReto)));
    }
    this.coleccionRetos = coleccion;
}

public getColeccionRetos(): reto [] {
    return this.coleccionRetos;

}


public addReto(reto: reto) {
    this.coleccionRetos.push(reto);
    const dbRuta = {
        id: reto.getId(),
        nombre: reto.getNombre(),
        rutasReto: reto.getRutasReto(),
        tipoActividad: reto.getTipoActividad(),
        usuariosRealizandoReto: reto.getUsuariosRealizandoReto()
    }
    this.database.get("reto").push(dbRuta).write();
}

public removeReto(id: string) {
    const retoAEliminar = this.coleccionRetos.find(reto => reto.getId() === id);
    if (retoAEliminar) {
        this.coleccionRetos = this.coleccionRetos.filter(reto => reto.getId() !== id);
        this.database.get("reto").remove({ id: id }).write();
    }
}

}