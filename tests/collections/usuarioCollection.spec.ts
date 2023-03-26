import { usuario } from '../../src/types/usuarios';
import { rutaCollection } from '../../src/collections/rutaCollection';
import { retoCollection } from '../../src/collections/retoCollection';
import { usuarioCollection } from '../../src/collections/usuarioCollection';
import 'mocha';
import { expect } from 'chai'


const usuario3: usuario = new usuario("USU17", "Juan", "Correr", ["USU1"],[ { fecha: new Date("2022-05-20T18:25:43.511Z"), ruta: "R3" } ]);
const usuarioCollection1: usuarioCollection = new usuarioCollection([]);
const rutaCollection1: rutaCollection = new rutaCollection([]);
const retoCollection1: retoCollection = new retoCollection([]);

describe('Comprobar clase usuarioCollection', () => {
    it('Metodo: getColeccionUsuarios(): usuario[]', () => {
        expect(usuarioCollection1.getColeccionUsuarios().length).to.be.eql(19);
    });
    it('Metodo: getHistoricoRutas(id: string): { fecha: Date, ruta: string }[] | undefined', () => {
        expect(usuarioCollection1.getHistoricoRutas("USU3")).to.be.eql([ { fecha: "2022-05-12", ruta: "R3" } ]);
    });
    it('Metodo: addUsuario(usuario: usuario)', () => {
        usuarioCollection1.addUsuario(usuario3);
        expect(usuarioCollection1.getColeccionUsuarios().length).to.be.equal(20);
    });
    it('Metodo: removeUsuario(id: string)', () => {
        usuarioCollection1.removeUsuario("USU17");
        expect(usuarioCollection1.getColeccionUsuarios().length).to.be.equal(19);
    });
    it('Metodo: getEstadisticasEntrenamiento(id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number }', () => {
        expect(usuarioCollection1.getEstadisticasEntrenamiento(rutaCollection1, "USU1", "mes")).to.be.eql({km: 35, desnivel: 250});
    });
    it('Metodo: getRutaFavorita(id_usuario: string): string | string [] | undefined', () => {
        expect(usuarioCollection1.getRutaFavorita(rutaCollection1, "USU1")).to.be.eql(["R2", "R3", "R1"]);
    });
    it('Metodo: getRetosActivos(id_usuario: string): string[]', () => {
        expect(usuarioCollection1.getRetosActivos(retoCollection1, "USU1")).to.be.eql(["C1", "C2"]);
    });

});