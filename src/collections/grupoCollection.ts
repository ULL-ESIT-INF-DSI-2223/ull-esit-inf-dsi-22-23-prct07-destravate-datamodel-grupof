import { grupo } from '../types/grupos'
import { grupoSchema } from '../schemas/grupoSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


export class grupoCollection {

private coleccionGrupos: grupo[];
private database: lowdb.LowdbSync<grupoSchema>;


constructor(public coleccion: grupo []) {
    this.database = lowdb(new FileSync('src/databases/db_grupos.json'));
    if (this.database.has("grupo").value()) {
        let dbItems = this.database.get("grupo").value();
        dbItems.forEach(item => this.coleccion.push(new grupo(item.id, item.nombre, item.participantes, item.historicoRutas)));
    }
    this.coleccionGrupos = coleccion;
}

public getColeccionGrupos(): grupo [] {
    return this.coleccionGrupos;

}

public addUsuario(grupo: grupo) {
    this.coleccionGrupos.push(grupo);
    const dbGrupo = {
        id: grupo.getId(),
        nombre: grupo.getNombre(),
        participantes: grupo.getParticipantes(),
        historicoRutas: grupo.getHistoricoRutas()
    }
    this.database.get("grupo").push(dbGrupo).write();
}

public removeUsuario(id: string) {
    const grupoAEliminar = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupoAEliminar) {
        this.coleccionGrupos = this.coleccionGrupos.filter(grupo => grupo.getId() !== id);
        this.database.get("grupo").remove({ id: id }).write();
    }
}
}