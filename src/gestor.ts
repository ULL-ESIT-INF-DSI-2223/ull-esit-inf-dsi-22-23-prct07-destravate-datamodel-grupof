import * as inquirer from "inquirer";
import { usuarioCollection } from "./collections/usuarioCollection";
import { grupoCollection } from "./collections/grupoCollection";
import { rutaCollection } from "./collections/rutaCollection";
import { retoCollection } from "./collections/retoCollection";
import { usuario } from "./types/usuarios";
import { grupo } from "./types/grupos";

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
    inquirer
      .prompt({
        type: "input",
        name: "id",
        message: "Introduce tu id de usuario",
      })
      .then((respuesta) => {
        const usuario = this.coleccionUsuarios
          .getColeccionUsuarios()
          .find((usuario) => usuario.getId() === respuesta.id);

        if (usuario) {
          this.usuarioActual = usuario.getId();
          console.log(
            "Bienvenido " + usuario.getNombre() + " con ID: " + usuario.getId()
          );
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
    let id = "",
      nombre = "",
      actividades: "Bicicleta" | "Correr" = "Correr";
    //Primero registrar todos los datos y despues comprobar si el id existe
    inquirer
      .prompt({
        type: "input",
        name: "id",
        message: "Introduce tu id de usuario",
      })
      .then((respuesta) => {
        id = respuesta.id;
        console.log("El id es: " + id);
        const usuario = this.coleccionUsuarios
          .getColeccionUsuarios()
          .find((usuario) => usuario.getId() === respuesta.id);
        if (usuario) {
          console.log("El usuario ya existe, por favor, introduzca otro id: ");
          this.registro();
        } else {
          inquirer
            .prompt({
              type: "input",
              name: "nombre",
              message: "Introduce tu nombre de usuario",
            })
            .then((respuesta) => {
              nombre = respuesta.nombre;
              inquirer
                .prompt({
                  type: "list",
                  name: "actividades",
                  message: "Introduce tu actividad favorita",
                  choices: ["Bicicleta", "Correr"],
                })
                .then((respuesta) => {
                  actividades = respuesta.actividades;
                  this.createUser(id, nombre, actividades);
                });
            });
        }
      });
  }

  menuUsuario() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Datos de la cuenta",
          "Usuarios del sistema",
          "Estadisticas",
          "Amigos",
          "Grupos",
          "Rutas",
          "Retos",
          "Salir",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Datos de la cuenta":
            this.coleccionUsuarios.getUsuario(this.usuarioActual);
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
            this.menuRetos();
            break;
          case "Salir":
            //    this.salir();
            break;
        }
      });
  }

  /*
  Ver mis retos
    Ver todos los retos
  Alfabéticamente por nombre del reto, ascendente y descendente.
Por cantidad de KM que se deben realizar, ascendente y descendente.
Por la cantidad de usuarios que lo están realizando, ascendente y descendente
  */
  menuRetos() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver mis retos",
          "Ver todos los retos",
          "Ver retos ordenados por nombre",
          "Ver retos ordenados por distancia",
          "Ver retos ordenados por cantidad de usuarios",
          "Ver retos ordenados por kms",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver mis retos":
            this.coleccionRetos
              .getRetosUsuario(this.coleccionUsuarios, this.usuarioActual)
              .forEach((reto) => {
                console.log(reto.getId() + " " + reto.getNombre());
              });
            setTimeout(() => {
              this.menuRetos();
            }, 2000);
            break;
          case "Ver todos los retos":
            this.menuInfoRetos();
            break;
          case "Ver retos ordenados por nombre":
            this.menuOrdenacionRetosNombre();
            break;
          case "Ver retos ordenados por distancia":
            this.menuOrdenacionRetosDistancia();
            break;
          case "Ver retos ordenados por cantidad de usuarios":
            this.menuOrdenacionRetosCantidadUsuarios();
            break;
          case "Ver retos ordenados por kms":
            this.menuOrdenacionRetosPorKms();
            break;
          case "Volver":
            this.menuUsuario();
            break;
        }
      });
  }

  menuOrdenacionRetosCantidadUsuarios() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver retos ordenados por cantidad de usuarios ascendente",
          "Ver retos ordenados por cantidad de usuarios descendente",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver retos ordenados por cantidad de usuarios ascendente":
            this.coleccionRetos
              .getRetosOrdenadosCantidadUsuarios("ascendente")
              .forEach((reto) => {
                console.log(
                  reto.getId() +
                    " " +
                    reto.getNombre() +
                    " " +
                    reto.getUsuariosRealizandoReto().length
                );
              });
            setTimeout(() => {
              this.menuOrdenacionRetosCantidadUsuarios();
            }, 2000);
            break;
          case "Ver retos ordenados por cantidad de usuarios descendente":
            this.coleccionRetos
              .getRetosOrdenadosCantidadUsuarios("descendente")
              .forEach((reto) => {
                console.log(
                  reto.getId() +
                    " " +
                    reto.getNombre() +
                    " " +
                    reto.getUsuariosRealizandoReto().length
                );
              });
            setTimeout(() => {
              this.menuOrdenacionRetosCantidadUsuarios();
            }, 2000);
            break;
          case "Volver":
            this.menuRetos();
            break;
        }
      });
  }

  menuOrdenacionRetosDistancia() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver retos ordenados por distancia ascendente",
          "Ver retos ordenados por distancia descendente",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver retos ordenados por distancia ascendente":
            this.coleccionRetos
              .getRetosOrdenadosDistancia(this.coleccionRutas, "ascendente")
              .forEach((reto) => {
                console.log(reto.getId() + " " + reto.getNombre());
              });
            setTimeout(() => {
              this.menuOrdenacionRetosDistancia();
            }, 2000);
            break;
          case "Ver retos ordenados por distancia descendente":
            this.coleccionRetos
              .getRetosOrdenadosDistancia(this.coleccionRutas, "descendente")
              .forEach((reto) => {
                console.log(reto.getId() + " " + reto.getNombre());
              });
            setTimeout(() => {
              this.menuOrdenacionRetosDistancia();
            }, 2000);
            break;
          case "Volver":
            this.menuRetos();
            break;
        }
      });
  }

  menuOrdenacionRetosNombre() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver retos ordenados por nombre ascendente",
          "Ver retos ordenados por nombre descendente",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver retos ordenados por nombre ascendente":
            this.coleccionRetos
              .getRetosOrdenadosNombre("ascendente")
              .forEach((reto) => {
                console.log(reto.getId() + " " + reto.getNombre());
              });
            setTimeout(() => {
              this.menuOrdenacionRetosNombre();
            }, 2000);
            break;
          case "Ver retos ordenados por nombre descendente":
            this.coleccionRetos
              .getRetosOrdenadosNombre("descendente")
              .forEach((reto) => {
                console.log(reto.getId() + " " + reto.getNombre());
              });
            setTimeout(() => {
              this.menuOrdenacionRetosNombre();
            }, 2000);
            break;
          case "Volver":
            this.menuRetos();
            break;
        }
      });
  }

  menuOrdenacionRetosPorKms() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver retos ordenados por kms ascendente",
          "Ver retos ordenados por kms descendente",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver retos ordenados por kms ascendente":
            this.coleccionRetos.getRetosOrdenadosKmsTotales(this.coleccionRutas, "ascendente").forEach((reto) => {
              console.log(reto.getId() + " " + reto.getNombre() + " " + this.coleccionRetos.getDistanciaTotalReto(this.coleccionRutas, reto.getId()));
            });
            setTimeout(() => {
              this.menuOrdenacionRetosPorKms();
            }, 2000);
            break;
          case "Ver retos ordenados por kms descendente":
            this.coleccionRetos.getRetosOrdenadosKmsTotales(this.coleccionRutas, "descendente").forEach((reto) => {
              console.log(reto.getId() + " " + reto.getNombre() + " " + this.coleccionRetos.getDistanciaTotalReto(this.coleccionRutas, reto.getId()));
            });
            setTimeout(() => {
              this.menuOrdenacionRetosPorKms();
            }, 2000);
            break;
          case "Volver":
            this.menuRetos();
            break;
        }
      });
  }

  public menuInfoRetos() {
    const retos: { id: string }[] = [];
    this.coleccionRetos.getColeccionRetos().forEach((reto) => {
      retos.push({ id: reto.getId() });
    });
    const retosid: string[] = this.coleccionRetos
      .getColeccionRetos()
      .map((reto) => reto.getId());
    retosid.push("Volver");
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: retosid,
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Volver":
            this.menuRutas();
            break;

          default:
            this.coleccionRetos.getInfoReto(
              respuesta.menu,
              this.coleccionUsuarios
            );
            setTimeout(() => {
              this.menuInfoRetos();
            }, 2000);
            break;
        }
      });
  }
  menuGrupos() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver mis grupos",
          "Ver todos los grupos",
          "Crear un grupo",
          "Unirse a un grupo",
          "Borrar un grupo(Debes ser el creador del mismo)",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver mis grupos":
            this.coleccionGrupos.getGruposUsuario(this.usuarioActual);
            setTimeout(() => {
              this.menuGrupos();
            }, 2000);
            break;
          case "Ver todos los grupos":
            this.menuOrdenacionGrupos();
            break;
          case "Crear un grupo":
            this.menuCrearGrupo();
            break;
          case "Unirse a un grupo":
            this.menuUnirseAlGrupo();
            break;
          case "Borrar un grupo(Debes ser el creador del mismo)":
            this.menuBorrarGrupo();
            break;
          case "Volver":
            this.menuUsuario();
            break;
        }
      });
  }

  menuEstadisticas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Semana", "Mes", "Año", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Semana":
            console.log(
              this.coleccionUsuarios.getEstadisticasEntrenamiento(
                this.coleccionRutas,
                this.usuarioActual,
                "semana"
              )
            );
            setTimeout(() => {
              this.menuEstadisticas();
            }, 2000);
            break;
          case "Mes":
            console.log(
              this.coleccionUsuarios.getEstadisticasEntrenamiento(
                this.coleccionRutas,
                this.usuarioActual,
                "mes"
              )
            );
            setTimeout(() => {
              this.menuEstadisticas();
            }, 2000);
            break;
          case "Año":
            console.log(
              this.coleccionUsuarios.getEstadisticasEntrenamiento(
                this.coleccionRutas,
                this.usuarioActual,
                "año"
              )
            );
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
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Ver amigos", "Añadir amigo", "Eliminar amigo", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Añadir amigo":
            inquirer
              .prompt({
                type: "input",
                name: "id",
                message: "Introduce el id del usuario que quieres añadir",
              })
              .then((respuesta) => {
                console.log(
                  this.coleccionUsuarios.addAmigo(
                    this.usuarioActual,
                    respuesta.id
                  )
                );
                setTimeout(() => {
                  this.menuAmigos();
                }, 2000);
              });
            break;
          case "Eliminar amigo":
            inquirer
              .prompt({
                type: "input",
                name: "id",
                message: "Introduce el id del usuario que quieres eliminar",
              })
              .then((respuesta) => {
                console.log(
                  this.coleccionUsuarios.removeAmigo(
                    this.usuarioActual,
                    respuesta.id
                  )
                );
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
            break;
          case "Volver":
            this.menuUsuario();
            break;
        }
      });
  }

  public menuRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ver todas las rutas",
          "Ver Rutas Ordenadas",
          "Añadir ruta realizada",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ver todas las rutas":
            this.menuInfoRutas();
            break;

          case "Ver Rutas Ordenadas":
            this.menuOrdenacionRutas();
            break;
          case "Añadir ruta realizada":
            inquirer
              .prompt({
                type: "input",
                name: "id",
                message: "Introduce el id de la ruta que has realizado",
              })
              .then((respuesta) => {
                this.coleccionRutas.addRutaRealizada(
                  this.coleccionUsuarios,
                  respuesta.id,
                  this.usuarioActual
                );
                setTimeout(() => {
                  this.menuRutas();
                }, 2000);
              });
            break;
          case "Volver":
            this.menuUsuario();
            break;
        }
      });
  }

  public menuInfoRutas() {
    const rutas: { id: string }[] = [];
    this.coleccionRutas.getColeccionRutas().forEach((ruta) => {
      rutas.push({ id: ruta.getId() });
    });
    const rutasid: string[] = this.coleccionRutas
      .getColeccionRutas()
      .map((ruta) => ruta.getId());
    rutasid.push("Volver");
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: rutasid,
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Volver":
            this.menuRutas();
            break;

          default:
            this.coleccionRutas.getInfoRuta(
              respuesta.menu,
              this.coleccionUsuarios
            );
            setTimeout(() => {
              this.menuInfoRutas();
            }, 2000);
            break;
        }
      });
  }

  public menuOrdenacionRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Alfabéticamente por nombre de la ruta",
          "Cantidad de usuarios que realizan las rutas",
          "Por longitud de la ruta",
          "Por la calificación media de la ruta",
          "Ordenar por actividad",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Alfabéticamente por nombre de la ruta":
            this.menuAlfabeticoRutas();
            break;
          case "Cantidad de usuarios que realizan las rutas":
            this.menuCantidadUsuariosRutas();
            break;
          case "Por longitud de la ruta":
            this.menuLongitudRutas();
            break;
          case "Por la calificación media de la ruta":
            this.menuCalificacionRutas();
            break;
          case "Ordenar por actividad":
            this.menuActividadRutas();
            break;
          case "Volver":
            this.menuRutas();
            break;
        }
      });
  }

  menuCantidadUsuariosRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Ascendente", "Descendente", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ascendente":
            this.coleccionRutas
              .getRutasPorCantidadUsuarios(this.coleccionUsuarios, true)
              .forEach((ruta) => {
                console.log(
                  ruta.getId() +
                    " " +
                    ruta.getNombre() +
                    " " +
                    this.coleccionRutas.getUsuariosFinalizados(
                      this.coleccionUsuarios,
                      ruta.getId()
                    ).length
                );
              });
            setTimeout(() => {
              this.menuCantidadUsuariosRutas();
            }, 2000);
            break;
          case "Descendente":
            this.coleccionRutas
              .getRutasPorCantidadUsuarios(this.coleccionUsuarios, false)
              .forEach((ruta) => {
                console.log(
                  ruta.getId() +
                    " " +
                    ruta.getNombre() +
                    " " +
                    this.coleccionRutas.getUsuariosFinalizados(
                      this.coleccionUsuarios,
                      ruta.getId()
                    ).length
                );
              });
            setTimeout(() => {
              this.menuCantidadUsuariosRutas();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionRutas();
            break;
        }
      });
  }

  menuLongitudRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Ascendente", "Descendente", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ascendente":
            this.coleccionRutas.getRutasPorLongitud(true).forEach((ruta) => {
              console.log(
                ruta.getId() +
                  " " +
                  ruta.getNombre() +
                  " " +
                  ruta.getLongitudRuta()
              );
            });
            setTimeout(() => {
              this.menuLongitudRutas();
            }, 2000);
            break;
          case "Descendente":
            this.coleccionRutas.getRutasPorLongitud(false).forEach((ruta) => {
              console.log(
                ruta.getId() +
                  " " +
                  ruta.getNombre() +
                  " " +
                  ruta.getLongitudRuta()
              );
            });
            setTimeout(() => {
              this.menuLongitudRutas();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionRutas();
            break;
        }
      });
  }

  menuActividadRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Correr", "Bicicleta", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Correr":
            this.coleccionRutas.getRutasActividad("Correr").forEach((ruta) => {
              console.log(
                ruta.getId() +
                  " " +
                  ruta.getNombre() +
                  " " +
                  ruta.getTipoActividad()
              );
            });
            setTimeout(() => {
              this.menuActividadRutas();
            }, 2000);
            break;
          case "Bicicleta":
            this.coleccionRutas
              .getRutasActividad("Bicicleta")
              .forEach((ruta) => {
                console.log(
                  ruta.getId() +
                    " " +
                    ruta.getNombre() +
                    " " +
                    ruta.getTipoActividad()
                );
              });
            setTimeout(() => {
              this.menuActividadRutas();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionRutas();
            break;
        }
      });
  }
  menuCalificacionRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Ascendente", "Descendente", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ascendente":
            this.coleccionRutas
              .getRutasCalificacionMedia(true)
              .forEach((ruta) => {
                console.log(
                  ruta.getId() +
                    " " +
                    ruta.getNombre() +
                    " " +
                    ruta.getCalificacionMedia()
                );
              });
            setTimeout(() => {
              this.menuCalificacionRutas();
            }, 2000);
            break;
          case "Descendente":
            this.coleccionRutas
              .getRutasCalificacionMedia(false)
              .forEach((ruta) => {
                console.log(
                  ruta.getId() +
                    " " +
                    ruta.getNombre() +
                    " " +
                    ruta.getCalificacionMedia()
                );
              });
            setTimeout(() => {
              this.menuCalificacionRutas();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionRutas();
            break;
        }
      });
  }

  menuAlfabeticoRutas() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Ascendente", "Descendente", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ascendente":
            this.coleccionRutas.getRutasAlfabetico(true).forEach((ruta) => {
              console.log(ruta.getId() + " " + ruta.getNombre());
            });
            setTimeout(() => {
              this.menuAlfabeticoRutas();
            }, 2000);
            break;
          case "Descendente":
            this.coleccionRutas.getRutasAlfabetico(false).forEach((ruta) => {
              console.log(ruta.getId() + " " + ruta.getNombre());
            });
            setTimeout(() => {
              this.menuAlfabeticoRutas();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionRutas();
            break;
        }
      });
  }

  public menuOrdenacionUsuarios() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Alfabéticamente por nombre del usuario",
          "Por cantidad de KM realizados",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Alfabéticamente por nombre del usuario":
            this.menuAlfabeticoUsuarios();
            break;
          case "Por cantidad de KM realizados":
            this.menuKmUsuarios();
            break;
          case "Volver":
            this.menuUsuario();
            break;
        }
      });
  }

  menuAlfabeticoUsuarios() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Ascendente", "Descendiente", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ascendente":
            console.log(this.coleccionRutas.getRutasAlfabetico(true));
            setTimeout(() => {
              this.menuOrdenacionUsuarios();
            }, 2000);
            break;
          case "Descendiente":
            console.log(this.coleccionRutas.getRutasAlfabetico(false));
            setTimeout(() => {
              this.menuOrdenacionUsuarios();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionUsuarios();
            break;
        }
      });
  }

  menuKmUsuarios() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Ultima semana de manera ascendente",
          "Ultima semana de manera descendente",
          "Ultimo mes de manera ascendente",
          "Ultimo mes de manera descendente",
          "Ultimo año de manera ascendente",
          "Ultimo año de manera descendente",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Ultima semana de manera ascendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(this.coleccionRutas, "semana", "ascendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "semana"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmUsuarios();
            }, 2000);
            break;
          case "Ultima semana de manera descendente":
            console.log(
              this.coleccionUsuarios
                .ordenarUsuariosPorKm(
                  this.coleccionRutas,
                  "semana",
                  "descendente"
                )
                .forEach((usuario) =>
                  console.log(
                    usuario.getId() +
                      " " +
                      usuario.getNombre() +
                      " " +
                      this.coleccionUsuarios.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        usuario.getId(),
                        "semana"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmUsuarios();
            }, 2000);
            break;
          case "Ultimo mes de manera ascendente":
            console.log(
              this.coleccionUsuarios
                .ordenarUsuariosPorKm(this.coleccionRutas, "mes", "ascendente")
                .forEach((usuario) =>
                  console.log(
                    usuario.getId() +
                      " " +
                      usuario.getNombre() +
                      " " +
                      this.coleccionUsuarios.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        usuario.getId(),
                        "mes"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmUsuarios();
            }, 2000);
            break;
          case "Ultimo mes de manera descendente":
            console.log(
              this.coleccionUsuarios
                .ordenarUsuariosPorKm(this.coleccionRutas, "mes", "descendente")
                .forEach((usuario) =>
                  console.log(
                    usuario.getId() +
                      " " +
                      usuario.getNombre() +
                      " " +
                      this.coleccionUsuarios.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        usuario.getId(),
                        "mes"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmUsuarios();
            }, 2000);
            break;
          case "Ultimo año de manera ascendente":
            console.log(
              this.coleccionUsuarios
                .ordenarUsuariosPorKm(this.coleccionRutas, "año", "ascendente")
                .forEach((usuario) =>
                  console.log(
                    usuario.getId() +
                      " " +
                      usuario.getNombre() +
                      " " +
                      this.coleccionUsuarios.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        usuario.getId(),
                        "año"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmUsuarios();
            }, 2000);
            break;
          case "Ultimo año de manera descendente":
            console.log(
              this.coleccionUsuarios
                .ordenarUsuariosPorKm(this.coleccionRutas, "año", "descendente")
                .forEach((usuario) =>
                  console.log(
                    usuario.getId() +
                      " " +
                      usuario.getNombre() +
                      " " +
                      this.coleccionUsuarios.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        usuario.getId(),
                        "año"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmUsuarios();
            }, 2000);
            break;
          case "Volver":
            this.menuOrdenacionUsuarios();
            break;
        }
      });
  }

  public menuOrdenacionGrupos() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Alfabéticamente por nombre del grupo",
          "Por cantidad de KM realizados conjuntamente",
          "Cantidad de participantes",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Alfabéticamente por nombre del grupo":
            this.menuAlfabeticoGrupos();
            break;
          case "Por cantidad de KM realizados conjuntamente":
            //menu grupos ordenados por km
            this.menuKmGrupos();
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

  menuKmGrupos() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: [
          "Última semana de manera ascendente",
          "Ultima semana de manera descendente",
          "Último mes de manera ascendente",
          "Último mes de manera descendente",
          "Último año de manera ascendente",
          "Último año de manera descendente",
          "Volver",
        ],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Última semana de manera ascendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(this.coleccionRutas, "semana", "ascendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "semana"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmGrupos();
            }, 2000);
            break;
          case "Ultima semana de manera descendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(
                  this.coleccionRutas,
                  "semana",
                  "descendente"
                )
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "semana"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmGrupos();
            }, 2000);
            break;

          case "Último mes de manera ascendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(this.coleccionRutas, "mes", "ascendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "mes"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmGrupos();
            }, 2000);
            break;
          case "Último mes de manera descendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(this.coleccionRutas, "mes", "descendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "mes"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmGrupos();
            }, 2000);
            break;
          case "Último año de manera ascendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(this.coleccionRutas, "año", "ascendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "año"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmGrupos();
            }, 2000);
            break;
          case "Último año de manera descendente":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorKm(this.coleccionRutas, "año", "descendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      this.coleccionGrupos.getEstadisticasEntrenamiento(
                        this.coleccionRutas,
                        grupo.getId(),
                        "año"
                      ).km
                  )
                )
            );
            setTimeout(() => {
              this.menuKmGrupos();
            }, 2000);
            break;

          case "Volver":
            this.menuUsuario();
            break;
        }
      });
  }

  menuParticipantesGrupos() {
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["Más participantes", "Menos participantes", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "Más participantes":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorParticipantes("ascendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      grupo.getParticipantes().length
                  )
                )
            );
            setTimeout(() => {
              this.menuParticipantesGrupos();
            }, 2000);
            break;
          case "Menos participantes":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorParticipantes("descendente")
                .forEach((grupo) =>
                  console.log(
                    grupo.getId() +
                      " " +
                      grupo.getNombre() +
                      " " +
                      grupo.getParticipantes().length
                  )
                )
            );
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
    inquirer
      .prompt({
        type: "list",
        name: "menu",
        message: "Elige una opción",
        choices: ["A-Z", "Z-A", "Volver"],
      })
      .then((respuesta) => {
        switch (respuesta.menu) {
          case "A-Z":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorNombre("ascendente")
                .forEach((grupo) =>
                  console.log(grupo.getId() + " " + grupo.getNombre())
                )
            );
            setTimeout(() => {
              this.menuAlfabeticoGrupos();
            }, 2000);
            break;
          case "Z-A":
            console.log(
              this.coleccionGrupos
                .ordenarGruposPorNombre("descendente")
                .forEach((grupo) =>
                  console.log(grupo.getId() + " " + grupo.getNombre())
                )
            );
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

  menuCrearGrupo() {
    inquirer
      .prompt({
        type: "input",
        name: "nombre",
        message: "Introduce el nombre del grupo",
      })
      .then((respuesta) => {
        this.coleccionGrupos.addGrupo(
          new grupo(
            this.coleccionGrupos.getNextId(),
            respuesta.nombre,
            [],
            [],
            this.usuarioActual
          )
        );
        setTimeout(() => {
          this.menuGrupos();
        }, 2000);
      });
  }

  menuBorrarGrupo() {
    inquirer
      .prompt({
        type: "input",
        name: "id",
        message: "Introduce el id del grupo",
      })
      .then((respuesta) => {
        //comrpobar que el usuario es el creador del grupo
        if (
          this.coleccionGrupos.getGrupoById(respuesta.id)?.getCreador() ===
          this.usuarioActual
        ) {
          this.coleccionGrupos.removeGrupo(respuesta.id);
          console.log("Grupo borrado");

          setTimeout(() => {
            this.menuGrupos();
          }, 2000);
        } else {
          console.log("No puedes borrar un grupo que no has creado");
          setTimeout(() => {
            this.menuGrupos();
          }, 2000);
        }
      });
  }

  menuUnirseAlGrupo() {
    inquirer
      .prompt({
        type: "input",
        name: "id",
        message: "Introduce el id del grupo",
      })
      .then((respuesta) => {
        if (this.coleccionGrupos.getGrupoById(respuesta.id)) {
          this.coleccionGrupos.addParticipante(
            respuesta.id,
            this.usuarioActual
          );
          console.log("Te has unido al grupo");
          setTimeout(() => {
            this.menuGrupos();
          }, 2000);
        } else {
          console.log("No existe el grupo");
          setTimeout(() => {
            this.menuGrupos();
          }, 2000);
        }
      });
  }

  public createUser(
    id: string,
    nombre: string,
    actividades: "Bicicleta" | "Correr"
  ) {
    const nuevousuario = new usuario(id, nombre, actividades, [], []);
    this.coleccionUsuarios.addUsuario(nuevousuario);
  }
}
