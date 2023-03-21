import { reto } from '../../src/types/retos';
import { retoCollection } from '../../src/collections/retoCollection';
import 'mocha';
import { expect } from 'chai'

const retoCollection1: retoCollection = new retoCollection([]);

const reto1: reto = new reto('C3', 'El reto final', ['R2', 'R4'], 'Correr', ['USU1', 'USU3', 'USU4']);


describe('Comprobar clase RetoCollection', () => {
    it('Metodos: getColeccionRetos(): reto []', () => {
        expect(retoCollection1.getColeccionRetos().length).to.be.eql(2);
    });
    it('Metodos: addReto(reto: reto)', () => {
        retoCollection1.addReto(reto1);
        expect(retoCollection1.getColeccionRetos().length).to.be.eql(3);
    });
    it('Metodos: removeReto(id: string)', () => {
        retoCollection1.removeReto('C3');
        expect(retoCollection1.getColeccionRetos().length).to.be.eql(2);
    });
});
