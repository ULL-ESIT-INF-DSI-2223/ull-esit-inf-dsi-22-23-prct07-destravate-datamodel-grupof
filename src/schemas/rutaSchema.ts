export type rutaSchema = {
  ruta: {
    id: string;
    nombre: string;
    coordenadasInicio: string;
    coordenadasFinal: string;
    longitudRuta: number;
    desnivelMedio: number;
    tipoActividad: "Bicicleta" | "Correr";
    calificacionMedia: number;
  }[];
};
