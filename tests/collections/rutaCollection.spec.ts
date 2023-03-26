import { rutaCollection } from '../../src/collections/rutaCollection';
import { ruta } from '../../src/types/rutas';
import 'mocha';
import { expect } from 'chai'

const rutaCollection1: rutaCollection = new rutaCollection([]);

describe('Comprobar clase rutaCollection', () => {
    it('Metodos: getColeccionRutas(): ruta[]', () => {
        expect(rutaCollection1.getColeccionRutas().length).to.be.equal(9);
    });
    it('Metodos: addRuta(ruta: ruta)', () => {
        const ruta1: ruta = new ruta('R5', 'Ruta de ciclismo por la costa', "28.6483,-38.6987", "29.684,-29.984" , 12, 6, 'Bicicleta', 7);
        rutaCollection1.addRuta(ruta1);
        expect(rutaCollection1.getColeccionRutas().length).to.be.equal(10);
    });
    it('Metodos: removeRuta(id: string)', () => {
        rutaCollection1.removeRuta('R5');
        expect(rutaCollection1.getColeccionRutas().length).to.be.equal(9);
    });
    
    it('Metodo: getRutasAlfabetico(orden: boolean) : ruta[]', () => {
        expect(rutaCollection1.getRutasAlfabetico(true)[0].getNombre()).to.be.equal('Ruta de senderismo en la montaña');
    });
    
    it('Metodo: getRutasCalificacionMedia(orden: boolean) : ruta[]', () => {
        expect(rutaCollection1.getRutasCalificacionMedia(false)[0].getNombre()).to.be.equal('Ruta de senderismo por el parque nacional');
    });
    it('Metodo: getRutasActividad(actividad: string) : ruta[]', () => {
       expect(rutaCollection1.getRutasActividad("Bicicleta").length).to.be.equal(2);
    });
});