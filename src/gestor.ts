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

public createUser(id: string, nombre:string, actividades: "Bicicleta" | "Correr") {
  const nuevousuario = new usuario(id, nombre, actividades, [], [], []);
  this.coleccionUsuarios.addUsuario(nuevousuario);
  }

}

            