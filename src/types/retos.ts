export class reto {
  private id: string;
  private nombre: string;
  private rutasReto: string[];
  private tipoActividad: "Bicicleta" | "Correr";
  private usuariosRealizandoReto: string[];

  constructor(
    id: string,
    nombre: string,
    rutasReto: string[],
    tipoActividad: "Bicicleta" | "Correr",
    usuariosRealizandoReto: string[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.rutasReto = rutasReto;
    this.tipoActividad = tipoActividad;
    this.usuariosRealizandoReto = usuariosRealizandoReto;
  }

  getId(): string {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getRutasReto(): string[] {
    return this.rutasReto;
  }

  getTipoActividad(): "Bicicleta" | "Correr" {
    return this.tipoActividad;
  }

  public getUsuariosRealizandoReto(): string[] {
    return this.usuariosRealizandoReto;
  }
}
