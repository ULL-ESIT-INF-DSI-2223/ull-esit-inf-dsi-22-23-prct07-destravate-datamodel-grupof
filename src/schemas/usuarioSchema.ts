export type usuarioSchema = {
    usuario: {
         id: string,
         nombre: string,
         actividades: "Bicicleta" | "Correr",
         amigos: string [], //usuarios con los que interacciona
         grupoAmigos: string [], //Ids de usuarios con los que realiza rutas
         historicoRutas: {
            fecha: Date,
            ruta: string 
        } [] //ID de la ruta y fecha
    } []
}