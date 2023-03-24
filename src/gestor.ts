import * as inquirer from 'inquirer';
import { usuarioCollection } from './collections/usuarioCollection'; 
import { grupoCollection } from './collections/grupoCollection';
import { rutaCollection } from './collections/rutaCollection';
import { retoCollection } from './collections/retoCollection';
import { usuario } from './types/usuarios';


export class gestor {
    private coleccionUsuarios: usuarioCollection;
    private coleccionGrupos: grupoCollection;
    private coleccionRutas: rutaCollection;
    private coleccionRetos: retoCollection;
    private usuarioActual: string;

    constructor() {
        this.coleccionUsuarios = new usuarioCollection([]);
        this.coleccionGrupos = new grupoCollection([]);
        this.coleccionRutas = new rutaCollection([]);
        this.coleccionRetos = new retoCollection([]);
        this.usuarioActual = "";
    }

    public getUsuarioActual(): string {
        return this.usuarioActual;
    }

    public setUsuarioActual(usuario: string) {
        this.usuarioActual = usuario;
    }

    public getColeccionUsuarios(): usuarioCollection {
        return this.coleccionUsuarios;
    }

    public getColeccionGrupos(): grupoCollection {
        return this.coleccionGrupos;
    }

    public getColeccionRutas(): rutaCollection {
        return this.coleccionRutas;
    }

    public getColeccionRetos(): retoCollection {
        return this.coleccionRetos;
    }
    // Función para iniciar sesión, Preguntar al usuario su id y comprobar si existe en la lista de usuarios, en caso de que no exista, se le pedirá que se registre.
    public login() {
        inquirer.prompt({
            type: 'input',
            name: 'id',
            message: 'Introduce tu id de usuario'
        }).then((respuesta) => {
          
          
            const usuario = this.coleccionUsuarios.getColeccionUsuarios().find(usuario => usuario.getId() === respuesta.id);
            
            if (usuario) {
                this.usuarioActual = usuario.getId();
                console.log("Bienvenido " + usuario.getNombre() + " con ID: " + usuario.getId());
                this.menuUsuario();
            } else {
                console.log("El usuario no existe, por favor, regístrese: ");
                this.registro();
            }
        });
    }
    /*
    constructor(id: string, nombre: string, actividades: "Bicicleta" | "Correr", amigos: string [], grupoAmigos: string [], historicoRutas: { fecha: Date; ruta: string }[]) {
            this.id = id
            this.nombre = nombre
            this.actividades = actividades
            this.amigos = amigos
            this.grupoAmigos = grupoAmigos
            this.historicoRutas = historicoRutas
         }
    */
    // Función para registrar un usuario, Preguntar al usuario los parámetros necesarios del constructor de usuario, comprobar que el id no exista en la lista de usuarios, en caso de que exista, se le pedirá que introduzca otro id.
    //Primero preguntar el id y comprobar si no existe, luego preguntar el resto de datos
    public registro() {
      let id = "", nombre = "", actividades: "Bicicleta" | "Correr" = "Correr";
      //Primero registrar todos los datos y despues comprobar si el id existe
      inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Introduce tu id de usuario'
    }).then((respuesta) => {
      id = respuesta.id;
      console.log("El id es: " + id)
      const usuario = this.coleccionUsuarios.getColeccionUsuarios().find(usuario => usuario.getId() === respuesta.id);
      if (usuario) {
        console.log("El usuario ya existe, por favor, introduzca otro id: ");
        this.registro();
      } else {
        inquirer.prompt({
          type: 'input',
          name: 'nombre',
          message: 'Introduce tu nombre de usuario'
      }).then((respuesta) => {
        nombre = respuesta.nombre;
        inquirer.prompt({
          type: 'list',
          name: 'actividades',
          message: 'Introduce tu actividad favorita',
          choices: ["Bicicleta", "Correr"]
      }).then((respuesta) => {
        actividades = respuesta.actividades;
        this.createUser(id, nombre, actividades);
      });
      });
      }
});
}

menuUsuario() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Datos de la cuenta", "Usuarios del sistema", "Estadisticas", "Amigos", "Grupos", "Rutas", "Retos", "Salir"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Datos de la cuenta":
                this.coleccionUsuarios.getUsuario(this.usuarioActual)
                setTimeout(() => {
                    this.menuUsuario();
                }, 2000); 
                break;
            case "Usuarios del sistema":
                this.menuOrdenacionUsuarios();
                break;
            case "Estadisticas":
                this.menuEstadisticas();
                break;
            case "Amigos":
                this.menuAmigos();
                break;
            case "Grupos":
                this.menuGrupos();
                break;
            case "Rutas":
                this.menuRutas();
                break;
            case "Retos":
                //this.retos();
                break;
            case "Salir":
                //this.salir();
                break;
        }
    });
}

menuGrupos() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Ver grupos","Unirse a un grupo", "Crear un grupo", "Borrar un grupo(Debes ser el creador del mismo)", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Ver grupos":
               this.menuOrdenacionGrupos();
                break;
            case "Eliminar amigo":
                
                break;
            case "Ver amigos":
                
                break
            case "Volver":
                this.menuUsuario();
                break;
        }
    });

}

menuEstadisticas() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Semana", "Mes", "Año", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Semana":
                console.log(this.coleccionUsuarios.getEstadisticasEntrenamiento(this.coleccionRutas, this.usuarioActual, "semana"));
                setTimeout(() => {
                    this.menuEstadisticas();
                }, 2000);
                break;
            case "Mes":
                console.log(this.coleccionUsuarios.getEstadisticasEntrenamiento(this.coleccionRutas, this.usuarioActual, "mes"));
                setTimeout(() => {
                    this.menuEstadisticas();
                }, 2000);
                break;
            case "Año":    
            console.log(this.coleccionUsuarios.getEstadisticasEntrenamiento(this.coleccionRutas, this.usuarioActual, "año"));
            setTimeout(() => {
                this.menuEstadisticas();
            }, 2000);    
            break;
            case "Volver":
                this.menuUsuario();
                break;
        }
    });
}

menuAmigos() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Ver amigos","Añadir amigo", "Eliminar amigo", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Añadir amigo":
                inquirer.prompt({
                    type: 'input',
                    name: 'id',
                    message: 'Introduce el id del usuario que quieres añadir'
                }).then((respuesta) => {
                    console.log(this.coleccionUsuarios.addAmigo(this.usuarioActual, respuesta.id));
                    setTimeout(() => {
                        this.menuAmigos();
                    }, 2000);
                });
                break;
            case "Eliminar amigo":
                inquirer.prompt({
                    type: 'input',
                    name: 'id',
                    message: 'Introduce el id del usuario que quieres eliminar'
                }).then((respuesta) => {
                    console.log(this.coleccionUsuarios.removeAmigo(this.usuarioActual, respuesta.id));
                    setTimeout(() => {
                        this.menuAmigos();
                    }, 2000);
                });
                break;
            case "Ver amigos":
                console.log(this.coleccionUsuarios.getAmigos(this.usuarioActual));
                setTimeout(() => {
                    this.menuAmigos();
                }, 2000);
                break
            case "Volver":
                this.menuUsuario();
                break;
        }
    });
}

public menuRutas() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Ver rutas", "Añadir ruta realizada", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Ver rutas":
                this.menuInfoRutas();
                break;
            case "Añadir ruta realizada":
                inquirer.prompt({
                    type: 'input',
                    name: 'id',
                    message: 'Introduce el id de la ruta que has realizado'
                }).then((respuesta) => {
                    //console.log(this.coleccionRutas.addRutaRealizada(this.usuarioActual, respuesta.id));
                    setTimeout(() => {
                        this.menuRutas();
                    }, 2000);
                });
                break;
            case "Volver":
                this.menuUsuario();
                break;
        }
    }
    );
    
}

public menuInfoRutas() {
    let rutas: {id: string}[] = [];
    this.coleccionRutas.getColeccionRutas().forEach(ruta => {
        rutas.push({id: ruta.getId()});
    });
    let rutasid: string[] = this.coleccionRutas.getColeccionRutas().map(ruta => ruta.getId());
    rutasid.push("Volver");
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: rutasid
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Volver":
                this.menuRutas();
                break;
                
             default:
            
            this.coleccionRutas.getInfoRuta(respuesta.menu, this.coleccionUsuarios)
            setTimeout(() => {
                this.menuInfoRutas();
            }, 2000);
            break;
        }
    });
}

public menuOrdenacionUsuarios() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Alfabéticamente por nombre del usuario", "Por cantidad de KM realizados", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Alfabéticamente por nombre del usuario":
                this.menuAlfabeticoUsuarios();
                break;
            case "Por cantidad de KM realizados":
                //menu usuarios ordenados por km
                break;
            case "Volver":
                this.menuUsuario();
                break;
        }
    });
}

menuAlfabeticoUsuarios() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["A-Z", "Z-A", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "A-Z":
                console.log(this.coleccionUsuarios.ordenarUsuariosPorNombre("ascendente").forEach(usuario => console.log(usuario.getId() + " " +usuario.getNombre())));
                setTimeout(() => {
                    this.menuAlfabeticoUsuarios();
                }, 2000);
                break;
            case "Z-A":
                console.log(this.coleccionUsuarios.ordenarUsuariosPorNombre("descendente").forEach(usuario => console.log(usuario.getId() + " " +usuario.getNombre())));
                setTimeout(() => {
                    this.menuAlfabeticoUsuarios();
                }, 2000);
                break;
            case "Volver":
                this.menuOrdenacionUsuarios();
                break;
        }
    });
}

public menuOrdenacionGrupos() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Alfabéticamente por nombre del grupo", "Por cantidad de KM realizados conjuntamente", "Cantidad de participantes",  "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Alfabéticamente por nombre del grupo":
                this.menuAlfabeticoGrupos();
                break;
            case "Por cantidad de KM realizados conjuntamente":
                //menu grupos ordenados por km
                break;
            case "Cantidad de participantes":
                this.menuParticipantesGrupos();
                break;
            case "Volver":
                this.menuUsuario();
                break;
        }
    });
}

menuParticipantesGrupos() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["Más participantes", "Menos participantes", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "Más participantes":
                console.log(this.coleccionGrupos.ordenarGruposPorParticipantes("ascendente").forEach(grupo => console.log(grupo.getId() + " " +grupo.getNombre())));
                setTimeout(() => {
                    this.menuParticipantesGrupos();
                }, 2000);
                break;
            case "Menos participantes":
                console.log(this.coleccionGrupos.ordenarGruposPorParticipantes("descendente").forEach(grupo => console.log(grupo.getId() + " " +grupo.getNombre())));
                setTimeout(() => {
                    this.menuParticipantesGrupos();
                }, 2000);
                break;
            case "Volver":
                this.menuOrdenacionGrupos();
                break;
        }
    });
}
menuAlfabeticoGrupos() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Elige una opción',
        choices: ["A-Z", "Z-A", "Volver"]
    }).then((respuesta) => {
        switch (respuesta.menu) {
            case "A-Z":
                console.log(this.coleccionGrupos.ordenarGruposPorNombre("ascendente").forEach(grupo => console.log(grupo.getId() + " " +grupo.getNombre())));
                setTimeout(() => {
                    this.menuAlfabeticoGrupos();
                }, 2000);
                break;
            case "Z-A":
                console.log(this.coleccionGrupos.ordenarGruposPorNombre("descendente").forEach(grupo => console.log(grupo.getId() + " " +grupo.getNombre())));
                setTimeout(() => {
                    this.menuAlfabeticoGrupos();
                }, 2000);
                break;
            case "Volver":
                this.menuOrdenacionGrupos();
                break;
        }
    });
}

public createUser(id: string, nombre:string, actividades: "Bicicleta" | "Correr") {
  const nuevousuario = new usuario(id, nombre, actividades, [], []);
  this.coleccionUsuarios.addUsuario(nuevousuario);
  }

  
}
            