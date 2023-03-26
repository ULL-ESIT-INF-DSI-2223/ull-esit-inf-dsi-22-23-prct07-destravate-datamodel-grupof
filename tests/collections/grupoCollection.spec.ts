import { grupo } from '../../src/types/grupos';
import { grupoCollection } from '../../src/collections/grupoCollection';
import { rutaCollection } from '../../src/collections/rutaCollection';
import 'mocha';
import { expect } from 'chai'

const grupoCollection1: grupoCollection = new grupoCollection([]);
const rutaCollection1: rutaCollection = new rutaCollection([]);
const grupo1: grupo = new grupo('GR4', 'Grupo 4', ['USU1', 'USU2', 'USU3'], [{
    "fecha": new Date("2022-05-12T18:25:43.511Z"),
    "ruta": "R2",
    "usuarios": [
        "USU1",
        "USU2"
    ]
},
{
    "fecha": new Date("2022-05-12T18:25:43.511Z"),
    "ruta": "R2",
    "usuarios": [
        "USU1"
    ]
}], 'USU1');

describe('Comprobar clase GrupoCollection', () => {
    it('Metodos: getColeccionGrupos(): grupo []', () => {
        expect(grupoCollection1.getColeccionGrupos().length).to.be.eql(5);
    });
    it('Metodos: addGrupo(grupo: grupo)', () => {
        grupoCollection1.addGrupo(grupo1);
        expect(grupoCollection1.getColeccionGrupos().length).to.be.eql(6);
    });
    it('Metodos: removeGrupo(id: string)', () => {
        grupoCollection1.removeGrupo('GR4');
        expect(grupoCollection1.getColeccionGrupos().length).to.be.eql(5);
    });
    it('Metodo: getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number }', () => {
        expect(grupoCollection1.getEstadisticasEntrenamiento(rutaCollection1, 'G1', 'mes')).to.be.eql({ km: 30, desnivel: 400 });
    });
    it('Metodo: getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[]', () => {
        expect(grupoCollection1.getClasificacionUsuarios(rutaCollection1, 'G1', 'km')).to.be.eql([{ usuario: 'USU1', valor: 30 }, { usuario: 'USU2', valor: 15 }]);
    });
    it('Metodo: getRutasFavoritas(coleccionRutas: rutaCollection ,id: string): {ruta: string, frecuencia: number}[]', () => {
        expect(grupoCollection1.getRutasFavoritas(rutaCollection1, 'G2')).to.be.eql([{ ruta: 'R3', frecuencia: 2}, { ruta: 'R4', frecuencia: 2}, { ruta: 'R5', frecuencia: 1}]);
    });


});

