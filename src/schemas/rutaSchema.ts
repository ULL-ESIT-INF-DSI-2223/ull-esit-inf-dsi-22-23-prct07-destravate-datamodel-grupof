export type rutaSchema = {
    ruta: {
        id: string,
        nombre: string,
        coordenadasInicio: string,
        coordenadasFinal: string,
        longitudRuta: number,
        desnivelMedio: number,
        usuariosFinalizados: string [], // Cambiar a vector de usuarios
        tipoActividad: 'Bicicleta' | 'Correr',
        calificacionMedia: number
    } []
}