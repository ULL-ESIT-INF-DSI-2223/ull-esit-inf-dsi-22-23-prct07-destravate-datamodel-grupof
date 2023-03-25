export type grupoSchema = {
  grupo: {
    id: string;
    nombre: string;
    participantes: string[];
    historicoRutas: {
      fecha: Date;
      ruta: string;
      usuarios: string[];
    }[];
    creador: string;
  }[];
};
