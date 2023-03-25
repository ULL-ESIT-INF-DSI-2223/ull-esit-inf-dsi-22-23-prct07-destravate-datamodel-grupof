export class grupo {
  id: string;
  nombre: string;
  participantes: string[];
  historicoRutas: { fecha: Date; ruta: string; usuarios: string[] }[];
  creador: string;
  // Atributo de usuario creador
  constructor(
    id: string,
    nombre: string,
    participantes: string[],
    historicoRutas: { fecha: Date; ruta: string; usuarios: string[] }[],
    creador: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.participantes = participantes;
    this.historicoRutas = historicoRutas;
    this.creador = creador;
  }

  // Getters

  getId(): string {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getParticipantes(): string[] {
    return this.participantes;
  }

  addParticipante(idParticipante: string) {
    this.participantes.push(idParticipante);
  }

  getHistoricoRutas(): { fecha: Date; ruta: string; usuarios: string[] }[] {
    return this.historicoRutas;
  }
  getCreador(): string {
    return this.creador;
  }
}

module.exports = {
  grupo,
};
