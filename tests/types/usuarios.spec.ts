import { usuario } from '../../src/types/usuarios';
import 'mocha';
import { expect } from 'chai'


const usuario1: usuario = new usuario("USU1", "Paco", "Correr", ["USU2"], [ { fecha: new Date("2023-02-19T18:25:43.511Z"), ruta: "R1" }, { fecha: new Date("2023-03-13T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-02-14T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-06-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-08T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R4" }, { fecha: new Date("2023-02-12T18:25:43.511Z"), ruta: "R4" } ]);


describe('Comprobar clase Usuario', () => {
    it('Metodos: getId(): string', () => {
        expect(usuario1.getId()).to.be.equal('USU1');
    });
    it('Metodos: getNombre(): string', () => {
        expect(usuario1.getNombre()).to.be.equal('Paco');
    });
    it('Metodos: getActividades(): "Bicicleta" | "Correr"', () => {
        expect(usuario1.getActividades()).to.be.equal('Correr');
    });
    it('Metodos: getAmigos(): string []', () => {
        expect(usuario1.getAmigos()).to.be.eql(['USU2']);
    });
    it('Metodos: getHistoricoRutas(): { fecha: Date; ruta: string }[]', () => {
        expect(usuario1.getHistoricoRutas()).to.be.eql([ { fecha: new Date("2023-02-19T18:25:43.511Z"), ruta: "R1" }, { fecha: new Date("2023-03-13T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-02-14T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-06-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-08T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R4" }, { fecha: new Date("2023-02-12T18:25:43.511Z"), ruta: "R4" } ]);
    });
});