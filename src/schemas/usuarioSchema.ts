export type usuarioSchema = {
  usuario: {
    id: string;
    nombre: string;
    actividades: "Bicicleta" | "Correr";
    amigos: string[]; //usuarios con los que interacciona
    historicoRutas: {
      fecha: Date;
      ruta: string;
    }[]; //ID de la ruta y fecha
  }[];
};
