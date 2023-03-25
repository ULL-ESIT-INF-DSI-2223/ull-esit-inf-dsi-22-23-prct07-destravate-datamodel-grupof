export class usuario {
  private id: string;
  private nombre: string;
  private actividades: "Bicicleta" | "Correr";
  private amigos: string[]; //usuarios con los que interacciona
  private historicoRutas: { fecha: Date; ruta: string }[]; //ID de la ruta y fecha

  constructor(
    id: string,
    nombre: string,
    actividades: "Bicicleta" | "Correr",
    amigos: string[],
    historicoRutas: { fecha: Date; ruta: string }[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.actividades = actividades;
    this.amigos = amigos;
    this.historicoRutas = historicoRutas;
  }

  public getId(): string {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }

  public getActividades(): "Bicicleta" | "Correr" {
    return this.actividades;
  }

  public getAmigos(): string[] {
    return this.amigos;
  }
  public getHistoricoRutas(): { fecha: Date; ruta: string }[] {
    return this.historicoRutas;
  }

  public addHistoricoRutas(fecha: Date, ruta: string) {
    this.historicoRutas.push({ fecha, ruta });
  }
}

module.exports = {
  usuario,
};
