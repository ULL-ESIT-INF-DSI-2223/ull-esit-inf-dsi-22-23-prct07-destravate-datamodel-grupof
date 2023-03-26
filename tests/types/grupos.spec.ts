import { grupo } from '../../src/types/grupos';
import 'mocha';
import { expect } from 'chai'


const grupo1: grupo = new grupo("G1", "Grupo de aventureros", ["USU1", "USU2"], [ { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1", "USU2"] }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1"] } ], "USU1");

describe('Comprobar clase Grupo', () => {
    it('Metodos: getId(): string', () => {
        expect(grupo1.getId()).to.be.equal('G1');
    });
    it('Metodos: getNombre(): string', () => {
        expect(grupo1.getNombre()).to.be.equal('Grupo de aventureros');
    });
    it('Metodos: getParticipantes(): string []', () => {
        expect(grupo1.getParticipantes()).to.be.eql(['USU1', 'USU2']);
    });
    it('Metodos: getHistoricoRutas(): { fecha: Date; ruta: string, usuarios: string [] }[]', () => {
        expect(grupo1.getHistoricoRutas()).to.be.eql([ { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1", "USU2"] }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1"] } ]);
    });
});