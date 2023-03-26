import { usuarioCollection } from "./collections/usuarioCollection";
import { grupoCollection } from "./collections/grupoCollection";
import { rutaCollection } from "./collections/rutaCollection";
import { retoCollection } from "./collections/retoCollection";
import { gestor } from "./gestor";

const gestion = new gestor();

gestion.login();

//const usuarioCollectionPrueba = new usuarioCollection([])
const grupoCollectionPrueba = new grupoCollection([])
const rutaCollectionPrueba = new rutaCollection([])
const retoCollectionPrueba = new retoCollection([])

//console.log(retoCollectionPrueba.getDistanciaTotalReto(rutaCollectionPrueba, "C1"))

/*let visible = 5

if (visible == 1) {
    console.log(usuarioCollectionPrueba.getColeccionUsuarios())
}

if (visible == 2) {
    console.log(grupoCollectionPrueba.getColeccionGrupos())
}


if (visible == 3) {
    console.log(rutaCollectionPrueba.getColeccionRutas())
}

if (visible == 4) {
    console.log(retoCollectionPrueba.getColeccionRetos())
}
*/
//rutaCollectionPrueba.addUserToRuta("USU7","R1")
//console.log(rutaCollectionPrueba.getRutasAlfabetico(true))
//console.log(rutaCollectionPrueba.getRutasCantidadUsuarios(false))
//console.log(usuarioCollectionPrueba.getEstadisticasEntrenamiento(rutaCollectionPrueba, "USU1", "año"))
//console.log(usuarioCollectionPrueba.getRutaFavorita(rutaCollectionPrueba, "USU2"))
//console.log(usuarioCollectionPrueba.getRetosActivos(retoCollectionPrueba, "USU1"))
//console.log(grupoCollectionPrueba.getEstadisticasEntrenamiento(rutaCollectionPrueba, "G1", "año"))
//console.log(grupoCollectionPrueba.getClaificacionUsuarios(rutaCollectionPrueba, "G1", "km"))
//console.log(grupoCollectionPrueba.getRutasFavoritas(rutaCollectionPrueba, "G1"))
