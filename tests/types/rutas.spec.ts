import { ruta } from '../../src/types/rutas';
import 'mocha';
import { expect } from 'chai'

const ruta1: ruta = new ruta(  '', '', '', '', 0, 0, 'Correr', 0);



describe('Comprobar clase Ruta', () => {
    it('Metodos: setId(id: string), getId(): string', () => {
      ruta1.setId('R1');
      expect(ruta1.getId()).to.be.equal('R1');
    });
    it('Metodos: setNombre(nombre: string), getNombre(): string', () => {
        ruta1.setNombre('Ruta 1');
        expect(ruta1.getNombre()).to.be.equal('Ruta 1');
    });
    it('Metodos: setCoordenadasInicio(coordenadasInicio: string), getCoordenadasInicio(): string', () => {
        ruta1.setCoordenadasInicio('41.397158, 2.160873');
        expect(ruta1.getCoordenadasInicio()).to.be.equal('41.397158, 2.160873');
    });
    it('Metodos: setCoordenadasFinal(coordenadasFinal: string), getCoordenadasFinal(): string', () => {
        ruta1.setCoordenadasFinal('41.397158, 2.160873');
        expect(ruta1.getCoordenadasFinal()).to.be.equal('41.397158, 2.160873');
    });
    it('Metodos: setLongitudRuta(longitudRuta: number), getLongitudRuta(): number', () => {
        ruta1.setLongitudRuta(15);
        expect(ruta1.getLongitudRuta()).to.be.equal(15);
    });
    it('Metodos: setDesnivelMedio(desnivelMedio: number), getDesnivelMedio(): number', () => {
        ruta1.setDesnivelMedio(4);
        expect(ruta1.getDesnivelMedio()).to.be.equal(4);
    });
    it('Metodos: setTipoActividad(tipoActividad: "Bicicleta" | "Correr"), getTipoActividad(): "Bicicleta" | "Correr"', () => {
        ruta1.setTipoActividad('Bicicleta');
        expect(ruta1.getTipoActividad()).to.be.equal('Bicicleta');
    });
    it('Metodos: setCalificacionMedia(calificacionMedia: number), getCalificacionMedia(): number', () => {
        ruta1.setCalificacionMedia(3);
        expect(ruta1.getCalificacionMedia()).to.be.equal(3);
    });
});





