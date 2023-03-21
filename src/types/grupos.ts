export class grupo {

    id: string;
    nombre: string;
    participantes: string[];
    historicoRutas: { fecha: Date; ruta: string }[];
    // Atributo de usuario creador
    constructor(
      id: string,
      nombre: string,
      participantes: string[],
      historicoRutas: { fecha: Date; ruta: string }[],
      
    ) {
      this.id = id;
      this.nombre = nombre;
      this.participantes = participantes;
      this.historicoRutas = historicoRutas;
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

    getHistoricoRutas(): { fecha: Date; ruta: string }[] {
        return this.historicoRutas;
    }
  }

  module.exports = {
    grupo
  }