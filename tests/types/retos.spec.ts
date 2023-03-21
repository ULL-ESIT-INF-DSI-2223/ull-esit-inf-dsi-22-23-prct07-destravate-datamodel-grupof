import { reto } from '../../src/types/retos';
import 'mocha';
import { expect } from 'chai'

const reto1: reto = new reto('C1', 'El reto de la muerte', ['R1', 'R2'], 'Bicicleta', ['USU1']);

describe('Comprobar clase Reto', () => {
    it('Metodos: getId(): string', () => {
        expect(reto1.getId()).to.be.equal('C1');
    });
    it('Metodos: getNombre(): string', () => {
        expect(reto1.getNombre()).to.be.equal('El reto de la muerte');
    });
    it('Metodos: getRutasReto(): string []', () => {
        expect(reto1.getRutasReto()).to.be.eql(['R1', 'R2']);
    });
    it('Metodos: getTipoActividad(): "Bicicleta" | "Correr"', () => {
        expect(reto1.getTipoActividad()).to.be.equal('Bicicleta');
    });
    it('Metodos: getUsuariosRealizandoReto(): string []', () => {
        expect(reto1.getUsuariosRealizandoReto()).to.be.eql(['USU1']);
    });
});