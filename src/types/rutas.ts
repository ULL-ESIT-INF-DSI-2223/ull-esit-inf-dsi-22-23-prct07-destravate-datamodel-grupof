export class ruta {
  private id: string;
  private nombre: string;
  private coordenadasInicio: string;
  private coordenadasFinal: string;
  private longitudRuta: number;
  private desnivelMedio: number;
  private tipoActividad: "Bicicleta" | "Correr";
  private calificacionMedia: number;

  constructor(
    id: string,
    nombre: string,
    coordenadasInicio: string,
    coordenadasFinal: string,
    longitudRuta: number,
    desnivelMedio: number,
    tipoActividad: "Bicicleta" | "Correr",
    calificacionMedia: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.coordenadasInicio = coordenadasInicio;
    this.coordenadasFinal = coordenadasFinal;
    this.longitudRuta = longitudRuta;
    this.desnivelMedio = desnivelMedio;
    this.tipoActividad = tipoActividad;
    this.calificacionMedia = calificacionMedia;
  }

  setId(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }

  setCoordenadasInicio(coordenadasInicio: string) {
    this.coordenadasInicio = coordenadasInicio;
  }

  getCoordenadasInicio(): string {
    return this.coordenadasInicio;
  }

  setCoordenadasFinal(coordenadasFinal: string) {
    this.coordenadasFinal = coordenadasFinal;
  }

  getCoordenadasFinal(): string {
    return this.coordenadasFinal;
  }

  setLongitudRuta(longitudRuta: number) {
    this.longitudRuta = longitudRuta;
  }

  getLongitudRuta(): number {
    return this.longitudRuta;
  }

  setDesnivelMedio(desnivelMedio: number) {
    this.desnivelMedio = desnivelMedio;
  }

  getDesnivelMedio(): number {
    return this.desnivelMedio;
  }

  setTipoActividad(tipoActividad: "Bicicleta" | "Correr") {
    this.tipoActividad = tipoActividad;
  }

  getTipoActividad(): "Bicicleta" | "Correr" {
    return this.tipoActividad;
  }

  setCalificacionMedia(calificacionMedia: number) {
    this.calificacionMedia = calificacionMedia;
  }

  getCalificacionMedia(): number {
    return this.calificacionMedia;
  }
}

module.exports = {
  ruta,
};
