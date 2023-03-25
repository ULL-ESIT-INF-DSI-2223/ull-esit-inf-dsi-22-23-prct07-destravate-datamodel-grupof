import { reto } from "../types/retos";

export type retoSchema = {
  reto: {
    id: string;
    nombre: string;
    rutasReto: string[];
    tipoActividad: "Bicicleta" | "Correr";
    usuariosRealizandoReto: string[];
  }[];
};
