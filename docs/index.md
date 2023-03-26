# [PRÁCTICA 7. DESTRAVATE](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupof.git). 

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101036694/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101036694?branch=main)

## Carla Oval Torres, Jairo Alonso Abreu, Gabi Vacaru

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Descripción de los requisitos del sistema](#requisitos)
3. [Funcionamiento](#funcionamiento)
    1. [Tipos de datos (rutas, retos, usuarios y grupos)](#tipos)
    2. [Colecciones de datos](#colecciones)
    3. [Schemas](#schemas)
    4. [Base de datos](#database)
    5. [Programa principal](#principal)
3. [Conclusiones](#conclusiones)
4. [Referencias](#referencias)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

En esta práctica, la primera grupal de la asignatura, tendrá que llevar a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita almacenar registros de actividades deportivas.

Todo el código desarrollado deberá estar alojado en el repositorio generado tras la aceptación de la asignación grupal de GitHub Classroom. En ese sentido, utilice en dicho repositorio una estructura de proyecto similar a la que hemos visto en clase.

Trate de respetar los principios SOLID de diseño orientado a objetos. Recuerde hacer uso durante su desarrollo de todas las herramientas relacionadas con el cubrimiento del código (Coveralls), integración contínua (Github Actions) y calidad del código (Sonar Cloud).

Por último, tendrá que comentar en un informe la solución diseñada, haciendo hincapié en las decisiones de diseño que ha implementado.

## Descripción de los requisitos del sistema <a name="requisitos"></a>
> [Volver al índice](#índice)

> Rutas
> 
> Para cada ruta incluida dentro del sistema, se debe almacenar la información siguiente:
> 1. ID único de la ruta.
> 2. Nombre de la ruta.
> 3. Geolocalización del inicio (coordenadas).
> 4. Geolocalización del final de la ruta (coordenadas).
> 5. Longitud de la ruta en kilómetros.
> 6. Desnivel medio de la ruta.
> 7. Usuarios que han realizado la ruta (IDs).
> 8. Tipo de actividad: Indicador si la ruta se puede realizar en bicicleta o corriendo.
> 9. Calificación media de la ruta.

> Usuarios
> 
> Dentro del sistema, necesitamos la siguiente información de los usuarios:
> 1. ID único del usuario (puede ser un username creado por el usuario en el registro o un valor generado automáticamente por el sistema).
> 2. Nombre del usuario.
> 3. Actividades que realiza: Correr o bicicleta.
> 4. Amigos en la aplicación: Colleción de IDs de usuarios con los que interacciona.
> 5. Grupos de amigos: Diferentes colecciones de IDs de usuarios con los que suele realizar rutas.
> 6. Estadísticas de entrenamiento: Cantidad de km y desnivel total acumulados en la semana, mes y año.
> 7. Rutas favoritas: IDs de las rutas que el usuario ha realizado con mayor frecuencia.
> 8. Retos activos: IDs de los retos que el usuario está realizando actualmente.
> 9. Histórico de rutas: Los usuarios deben almacenar el historial de rutas realizadas desde que se registraron en el sistema. La información almacenada en esta estructura de datos deberá contener la información de la fecha y el ID de la ruta realizada. Nótese que un usuario puede realizar más de una ruta al día y está decisión puede afectar al tipo de estructura en el que se almacena la información.

> Grupos
> 
> Un grupo de usuarios engloba la información de los usuarios que se unen para realizar rutas juntos.
> 1. ID único del grupo.
> 2. Nombre del grupo.
> 3. Participantes: IDs de los miembros del grupo.
> 4. Estadísticas de entrenamiento grupal: Cantidad de km y desnivel total acumulados de manera grupal en la semana, mes y año
> 5. Clasificación de los usuarios: Ranking de los usuarios que más entrenamientos han realizado históricamente dentro del grupo, es decir, ordenar los usuarios por la cantidad de km totales o desnivel total que han acumulado.
> 6. Rutas favoritas del grupo: Rutas que los usuarios del grupo han realizado con mayor frecuencia en sus salidas conjuntas.
> 7. Histórico de rutas realizadas por el grupo: Información similar que almacenan los usuarios pero en este caso referente a los grupos. Nótese que un usuario puede realizar rutas con un grupo y/o de manera individual el mismo día. Es decir, a modo de simplificación, asumimos que todos los usuarios de un grupo realizan la actividad cuando se planifica. Aunque, también pueden realizar otras actividades de manera individual.

> Retos
> 
> Los retos serán otra entidad dentro del sistema. Esta entidad deberá contener toda la información asociada a objetivos de entrenamientos:
1. ID único del reto.
2. Nombre del reto.
3. Rutas que forman parte del reto.
4. Tipo de actividad del reto: bicicleta o correr.
5. Km totales a realizar (como la suma de los kms de las rutas que lo engloban)
6. Usuarios que están realizando el reto.


### Funcionamiento <a name="funcionamiento"></a>
> [Volver al índice](#índice)

> Para comprobar el funcionamiento de su diseño deberá crear:
> 1. Al menos 10 rutas distintas.
> 2. Incluir al menos 20 usuarios distintos.
> 3. Un mínimo de 5 grupos.
> 4. Al menos 3 retos.
>
> En este punto, deberá hacer uso del módulo Inquirer.js para la gestión de una línea de comandos interactiva. De este modo, su aplicación deberá permitir añadir, borrar y modificar rutas, usuarios, grupos y retos. Para ello, le recomendamos que lea el Capítulo 1 del libro Essential TypeScript: From Beginner to Pro, dado que se describe un ejemplo detallado de su uso, incluyendo cómo podría hacer para que toda la información introducida persista mediante el uso del paquete Lowdb. Recuerde hacer uso de las versiones de los paquetes utilizadas en el libro.
> 
> En cuanto a la gestión avanzada de rutas, usuarios, grupos y retos, simplemente se requiere poder navegar la información asociada a estás entidades. Para cada tipo de información se podrá mostrar la información correspondiente de la siguiente manera:
> 
> Rutas:
> - Alfabéticamente por nombre de la ruta, ascendente y descendente.
> - Cantidad de usuarios que realizan las rutas, ascendente y descendente.
> - Por longitud de la ruta, ascendente y descendente.
> - Por la calificación media de la ruta, ascendente y descendente.
> - Ordenar por actividad: correr o ciclismo.
> 
> Usuarios:
> - Alfabéticamente por nombre del usuario, ascendente y descendente.
> - Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
> 
> Grupos:
> - Alfabéticamente por nombre de la grupo, ascendente y descendente.
> - Por cantidad de KM realizados conjuntamente (ascendente y descendentemente) en función de la semana actual, mes o año.
> - Por la cantidad de miembros que lo componen, ascendente y descendente.
> 
> Retos:
> Alfabéticamente por nombre del reto, ascendente y descendente.
> Por cantidad de KM que se deben realizar, ascendente y descendente.
> Por la cantidad de usuarios que lo están realizando, ascendente y descendente.

> #### Clase Gestor
> Por último, deberá crear una clase Gestor que permita gestionar el tratamiento de la información del sistema.
> 
> Para el funcionamiento de la clase Gestor, también necesitará hacer uso de Inquirer.js. En concreto, un usuario podrá:
> Registrarse en el sistema. Un usuario que se conecte por primera vez al sistema deberá poder incluir su información para ser almacenada en el sistema. Asimismo, un usuario podrá visualizar el listado de usuarios existentes dentro del sistema y añadir/borrar amigos.
> Visualizar todas las rutas existentes dentro del sistema. En este apartado se deben poder consultar el listado de rutas así como acceder a la información completa de cada una de ellas.
> Unirse a un grupo existente. Este apartado considera la opción de un usuario que desea incluirse dentro de un grupo ya existente en el sistema.
> Visualizar, crear y borrar grupos. Un usuario podrá borrar un grupo, pero solo si esta ha sido creado por él, es decir, no se podrá borrar un grupo pre-cargado en el sistema. Por otro lado, los grupos se podrán guardar usando el mismo sistema empleado para guardar la información cargada en el sistema. Por último, considere que en posteriores conexiones al sistema, el usuario podrá desear borrar un grupo que haya creado anteriormente. Debido a esto, se deberá distinguir entre los grupos creados por el usuario y los creados por el sistema con el objetivo de evitar borrar información sin permiso.


### Tipos de datos (rutas, retos, usuarios y grupos) <a name="tipos"></a>
> [Volver al índice](#índice)

> El código define una clase llamada "usuario" que representa a un usuario en un sistema de seguimiento de actividades físicas.

#### Clase usuario:

El código que representa la clase tiene las siguientes propiedades privadas:

- "id": el identificador único del usuario (de tipo string)
- "nombre": el nombre del usuario (de tipo string)
- "actividades": una enumeración que indica las actividades físicas que realiza el usuario ("Bicicleta" o "Correr")
- "amigos": una lista de los nombres de usuario de los amigos del usuario (de tipo string[])
- "historicoRutas": una lista de objetos que contienen información sobre las rutas tomadas por el usuario, incluyendo la fecha en que se tomó la ruta y la ruta tomada (de tipo { fecha: Date; ruta: string }[]).

El constructor de la clase toma como argumentos los valores para estas propiedades y los asigna a los atributos correspondientes de la instancia actual utilizando la palabra clave "this".

```typescript
export class usuario{
    private id: string
    private nombre: string
    private actividades: "Bicicleta" | "Correr"
    private amigos: string [] //usuarios con los que interacciona
    private historicoRutas: {fecha: Date; ruta: string } []; //ID de la ruta y fecha

    constructor(id: string, nombre: string, actividades: "Bicicleta" | "Correr", amigos: string [], historicoRutas: { fecha: Date; ruta: string }[]) {
            this.id = id
            this.nombre = nombre
            this.actividades = actividades
            this.amigos = amigos
            this.historicoRutas = historicoRutas
         }
    
    public getId(): string {
        return this.id
    }
    public getNombre(): string {
        return this.nombre;
    }

    public getActividades(): "Bicicleta" | "Correr" {
        return  this.actividades;
    }

    public getAmigos(): string [] {
        return this.amigos;
    }

    public getHistoricoRutas(): { fecha: Date; ruta: string }[] {
        return this.historicoRutas
    } 
}

module.exports={
    usuario
}
```

La clase también define getters públicos para cada una de las propiedades, lo que permite acceder a ellas desde fuera de la clase.

Por último, se exporta la clase "usuario" para que pueda ser utilizada en otros archivos mediante la sintaxis de "require" o "import".


#### Tests de la clase usuario:

Se ha diseñado un conjunto de pruebas unitarias escritas en TypeScript utilizando Mocha y Chai para la comprobación de la clase usuario y sus métodos.

Primero definimos una variable llamada usuario1 que es de tipo usuario. Se está creando una instancia de la clase usuario mediante el constructor y se le están pasando varios argumentos: "USU1" que es el id del usuario, "Paco" que es el nombre del usuario, "Correr" que es la actividad principal del usuario, ["USU2"] que es un arreglo con los ids de los amigos del usuario, ["GR1"] que es un arreglo con los ids de los grupos de amigos del usuario y finalmente, `[ { fecha: new Date("2023-02-19T18:25:43.511Z"), ruta: "R1" }, { fecha: new Date("2023-03-13T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-02-14T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-06-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-08T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R4" }, { fecha: new Date("2023-02-12T18:25:43.511Z"), ruta: "R4" } ]` que es un arreglo de objetos, cada uno de los cuales representa una ruta y su fecha.

```typescript
const usuario1: usuario = new usuario("USU1", "Paco", "Correr", ["USU2"], ["GR1"], [ { fecha: new Date("2023-02-19T18:25:43.511Z"), ruta: "R1" }, { fecha: new Date("2023-03-13T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-02-14T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-06-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-08T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R4" }, { fecha: new Date("2023-02-12T18:25:43.511Z"), ruta: "R4" } ]);

```

Luego pasamos a cada prueba se describe con una cadena de texto y se ejecuta dentro de un bloque "it". Dentro de cada bloque "it", se llama a un método de la instancia de usuario, que en su mayoría son getters, y se espera que su resultado sea igual al valor esperado utilizando la sintaxis de expect.

```typescript
import { usuario } from '../../src/types/usuarios';
import 'mocha';
import { expect } from 'chai'


const usuario1: usuario = new usuario("USU1", "Paco", "Correr", ["USU2"], ["GR1"], [ { fecha: new Date("2023-02-19T18:25:43.511Z"), ruta: "R1" }, { fecha: new Date("2023-03-13T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-02-14T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-06-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-08T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R4" }, { fecha: new Date("2023-02-12T18:25:43.511Z"), ruta: "R4" } ]);


describe('Comprobar clase Usuario', () => {
    it('Metodos: getId(): string', () => {
        expect(usuario1.getId()).to.be.equal('USU1');
    });
    it('Metodos: getNombre(): string', () => {
        expect(usuario1.getNombre()).to.be.equal('Paco');
    });
    it('Metodos: getActividades(): "Bicicleta" | "Correr"', () => {
        expect(usuario1.getActividades()).to.be.equal('Correr');
    });
    it('Metodos: getAmigos(): string []', () => {
        expect(usuario1.getAmigos()).to.be.eql(['USU2']);
    });
    it('Metodos: getHistoricoRutas(): { fecha: Date; ruta: string }[]', () => {
        expect(usuario1.getHistoricoRutas()).to.be.eql([ { fecha: new Date("2023-02-19T18:25:43.511Z"), ruta: "R1" }, { fecha: new Date("2023-03-13T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-01-30T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2023-02-14T18:25:43.511Z"), ruta: "R2" }, { fecha: new Date("2022-06-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-13T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-07-08T18:25:43.511Z"), ruta: "R3" }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R4" }, { fecha: new Date("2023-02-12T18:25:43.511Z"), ruta: "R4" } ]);
    });
});
```

#### Cumplimiento de los principios SOLID en la clase usuario:

Esta clase `usuario` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase usuario se encarga de gestionar la información de un usuario y no tiene más de una razón para cambiar. Por lo tanto, cumple con el principio SRP.

- **Open/Closed Principle (OCP)**: La clase usuario no está diseñada para ser modificada, sino para ser extendida. Por ejemplo, se puede crear una subclase de usuario que contenga información adicional, sin modificar la implementación de usuario en sí misma. Por lo tanto, la clase cumple con el principio OCP.

- **Liskov Substitution Principle (LSP)**: La clase usuario cumple con el principio LSP, ya que se puede utilizar en lugar de cualquier subclase de usuario sin afectar al comportamiento del sistema.

- **Interface Segregation Principle (ISP)**: La clase usuario no implementa interfaces, por lo que no es aplicable al principio ISP.

- **Dependency Inversion Principle (DIP)**: La clase usuario no depende de ninguna otra clase de alto nivel, sino que es una clase de bajo nivel utilizada por otras clases. Por lo tanto, cumple con el principio DIP.


> El código define una clase llamada "grupo" que representa a un grupo de usuarios en un sistema de seguimiento de actividades físicas.

#### Clase grupo:

La clase grupo, que tiene los siguientes atributos, que toma por parámetro su constructor:

- id: identificador único del grupo.
- nombre: nombre del grupo.
- participantes: lista de identificadores de usuarios que pertenecen al grupo.
- historicoRutas: lista de objetos que contienen información sobre las rutas que ha realizado el grupo, incluyendo la fecha en que se realizó la ruta, el identificador de la ruta y una lista de identificadores de los usuarios que participaron en la ruta.
- creador: identificador del usuario que creó el grupo.

```typescript
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
```

La clase grupo también tiene cinco métodos get que devuelven los valores de los atributos id, nombre, participantes, historicoRutas y creador, respectivamente. Además, se exporta la clase grupo como un módulo, lo que permite que otros archivos de código fuente puedan importar y utilizar la clase grupo.

#### Tests de la clase grupo:

En concreto, se han definido cuatro tests para los siguientes métodos:

- getId(): este método debería devolver el ID del grupo, por lo que se comprueba que el valor devuelto por el método sea igual al ID que se ha pasado al constructor al crear el objeto grupo1.
- getNombre(): este método debería devolver el nombre del grupo, por lo que se comprueba que el valor devuelto por el método sea igual al nombre que se ha pasado al constructor al crear el objeto grupo1.
- getParticipantes(): este método debería devolver un array con los IDs de los participantes del grupo, por lo que se comprueba que el array devuelto por el método sea igual al array de participantes que se ha pasado al constructor al crear el objeto grupo1.
- getHistoricoRutas(): este método debería devolver un array con los registros del historial de rutas del grupo, por lo que se comprueba que el array devuelto por el método sea igual al array de registros que se ha pasado al constructor al crear el objeto grupo1.

```typescript
import { grupo } from '../../src/types/grupos';
import 'mocha';
import { expect } from 'chai'


const grupo1: grupo = new grupo("G1", "Grupo de aventureros", ["USU1", "USU2"], [ { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1", "USU2"] }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1"] } ]);

describe('Comprobar clase Grupo', () => {
    it('Metodos: getId(): string', () => {
        expect(grupo1.getId()).to.be.equal('G1');
    });
    it('Metodos: getNombre(): string', () => {
        expect(grupo1.getNombre()).to.be.equal('Grupo de aventureros');
    });
    it('Metodos: getParticipantes(): string []', () => {
        expect(grupo1.getParticipantes()).to.be.eql(['USU1', 'USU2']);
    });
    it('Metodos: getHistoricoRutas(): { fecha: Date; ruta: string, usuarios: string [] }[]', () => {
        expect(grupo1.getHistoricoRutas()).to.be.eql([ { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1", "USU2"] }, { fecha: new Date("2022-05-12T18:25:43.511Z"), ruta: "R2", usuarios: ["USU1"] } ]);
    });
});
```

Cada test se ejecuta mediante la función it() de la librería mocha, que recibe como parámetro una descripción del test y una función que realiza la comprobación. La comprobación se realiza con la función expect() de la librería chai, que permite verificar si un valor cumple una determinada condición mediante una serie de métodos encadenados. En este caso, se utiliza el método to.be.equal() para verificar que el valor devuelto por el método es igual al valor esperado, y to.be.eql() para verificar que el array devuelto por el método es igual al array esperado. Si la comprobación es correcta, el test se considera superado y se muestra un mensaje indicando que ha pasado; si no lo es, el test falla y se muestra un mensaje indicando qué ha ido mal.

#### Cumplimiento de los principios SOLID en la clase grupo:

Esta clase `grupo` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase grupo tiene una única responsabilidad, que es representar la entidad de un grupo y proporcionar métodos para obtener su información.

- **Open/Closed Principle (OCP)**: La clase grupo está abierta para su extensión ya que se pueden agregar nuevos métodos, pero está cerrada para su modificación ya que la implementación actual no se modifica.

- **Liskov Substitution Principle (LSP)**: La clase grupo cumple con este principio ya que se comporta como se espera de una clase de grupo, y sus subtipos no alteran el comportamiento de los métodos.

- **Interface Segregation Principle (ISP)**: La clase grupo no tiene interfaz, por lo que no se aplica este principio.

- **Dependency Inversion Principle (DIP)**: La clase grupo depende solo de tipos abstractos y no de implementaciones concretas, lo que permite que se puedan intercambiar diferentes implementaciones sin afectar su funcionalidad.


> El código define una clase llamada "ruta" que representa una ruta en un sistema de seguimiento de actividades físicas. 

#### Clase ruta:

 La clase ruta contiene información sobre una ruta, incluyendo su identificación, nombre, coordenadas de inicio y finalización, longitud, desnivel medio, tipo de actividad (bicicleta o correr) y calificación media. La clase también tiene métodos para obtener y establecer cada uno de estos valores.

```typescript
export class ruta {
    private id: string
    private nombre: string
    private coordenadasInicio: string
    private coordenadasFinal: string
    private longitudRuta: number
    private desnivelMedio: number
    private tipoActividad: 'Bicicleta' | 'Correr'
    private calificacionMedia: number

    constructor(id: string, nombre: string, coordenadasInicio: string, coordenadasFinal: string, longitudRuta: number, desnivelMedio: number, tipoActividad: 'Bicicleta' | 'Correr', calificacionMedia: number){
        this.id = id;
        this.nombre = nombre;
        this.coordenadasInicio = coordenadasInicio;
        this.coordenadasFinal = coordenadasFinal;
        this.longitudRuta = longitudRuta;
        this.desnivelMedio = desnivelMedio;
        this.tipoActividad = tipoActividad;
        this.calificacionMedia = calificacionMedia;
    }

    setId(id: string){
        this.id = id
    }

    getId(): string {
        return this.id
    }

    setNombre(nombre: string){
        this.nombre = nombre
    }

    getNombre(): string {
        return this.nombre
    }

    setCoordenadasInicio(coordenadasInicio: string){
        this.coordenadasInicio = coordenadasInicio
    }

    getCoordenadasInicio(): string {
        return this.coordenadasInicio
    }

    setCoordenadasFinal(coordenadasFinal: string){
        this.coordenadasFinal = coordenadasFinal
    }

    getCoordenadasFinal(): string {
        return this.coordenadasFinal
    }

    setLongitudRuta(longitudRuta: number){
        this.longitudRuta = longitudRuta
    }

    getLongitudRuta(): number {
        return this.longitudRuta
    }

    setDesnivelMedio(desnivelMedio: number){
        this.desnivelMedio = desnivelMedio
    }

    getDesnivelMedio(): number {
        return this.desnivelMedio
    }

    setTipoActividad(tipoActividad: 'Bicicleta' | 'Correr'){
        this.tipoActividad = tipoActividad
    }

    getTipoActividad(): 'Bicicleta' | 'Correr'  {
        return this.tipoActividad
    }

    setCalificacionMedia(calificacionMedia: number){
        this.calificacionMedia = calificacionMedia
    }

    getCalificacionMedia(): number {
        return this.calificacionMedia
    }
    
}

module.exports = {
    ruta
}
```

La clase tiene un constructor que toma valores para todos los atributos y los asigna a las variables correspondientes. 

Además, tiene métodos setter y getter para cada uno de los atributos, lo que permite cambiar y obtener los valores de cada uno de ellos. Cada método se llama set y get, respectivamente, seguido del nombre del atributo, y devuelve el mismo. Por ejemplo, setId establece el valor de id, y getId devuelve el valor actual de id.


#### Tests de la clase ruta:

A continuación tenemos los tests que se han diseñado para esta clase. En la primera línea se importa la clase ruta desde su ruta relativa. Luego se importan los módulos mocha y chai, que son librerías para facilitar la escritura de pruebas.

```typescript
import { ruta } from '../../src/types/rutas';
import 'mocha';
import { expect } from 'chai'

const ruta1: ruta = new ruta(  '', '', '', '', 0, 0, 'Correr', 0);

describe('Comprobar clase Ruta', () => {
    it('Metodos: setId(id: string), getId(): string', () => {
      ruta1.setId('R1');
      expect(ruta1.getId()).to.be.equal('R1');
    });
    it('Metodos: setNombre(nombre: string), getNombre(): string', () => {
        ruta1.setNombre('Ruta 1');
        expect(ruta1.getNombre()).to.be.equal('Ruta 1');
    });
    it('Metodos: setCoordenadasInicio(coordenadasInicio: string), getCoordenadasInicio(): string', () => {
        ruta1.setCoordenadasInicio('41.397158, 2.160873');
        expect(ruta1.getCoordenadasInicio()).to.be.equal('41.397158, 2.160873');
    });
    it('Metodos: setCoordenadasFinal(coordenadasFinal: string), getCoordenadasFinal(): string', () => {
        ruta1.setCoordenadasFinal('41.397158, 2.160873');
        expect(ruta1.getCoordenadasFinal()).to.be.equal('41.397158, 2.160873');
    });
    it('Metodos: setLongitudRuta(longitudRuta: number), getLongitudRuta(): number', () => {
        ruta1.setLongitudRuta(15);
        expect(ruta1.getLongitudRuta()).to.be.equal(15);
    });
    it('Metodos: setDesnivelMedio(desnivelMedio: number), getDesnivelMedio(): number', () => {
        ruta1.setDesnivelMedio(4);
        expect(ruta1.getDesnivelMedio()).to.be.equal(4);
    });
    it('Metodos: setTipoActividad(tipoActividad: "Bicicleta" | "Correr"), getTipoActividad(): "Bicicleta" | "Correr"', () => {
        ruta1.setTipoActividad('Bicicleta');
        expect(ruta1.getTipoActividad()).to.be.equal('Bicicleta');
    });
    it('Metodos: setCalificacionMedia(calificacionMedia: number), getCalificacionMedia(): number', () => {
        ruta1.setCalificacionMedia(3);
        expect(ruta1.getCalificacionMedia()).to.be.equal(3);
    });
});
```

Se crea una instancia de la clase ruta (ruta1) con valores vacíos o nulos y se comprueba que los métodos set y get funcionen correctamente. Cada método set establece el valor de un atributo de la instancia, mientras que cada método get devuelve el valor del mismo atributo.

Por ejemplo, el primer test comprueba que el método setId establece el valor del atributo id y el método getId devuelve ese mismo valor. El segundo test comprueba que el método setNombre establece el valor del atributo nombre y el método getNombre devuelve ese mismo valor. Y así sucesivamente para cada uno de los atributos de la clase.

Cada prueba utiliza la función expect de la biblioteca chai para comprobar que el valor devuelto por el método get sea igual al valor establecido por el método set. Si el valor no es igual, la prueba fallará.


#### Cumplimiento de los principios SOLID en la clase ruta:

Esta clase `ruta` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase ruta tiene una única responsabilidad, que es representar una ruta y almacenar información relacionada con ella, como la identificación, las coordenadas, la longitud, etc. Además, los métodos de la clase se ocupan exclusivamente de la manipulación de los datos de la ruta.

- **Open/Closed Principle (OCP)**:  La clase ruta es extensible ya que los desarrolladores pueden agregar nuevas características y comportamientos a la clase sin modificar su implementación actual. Por ejemplo, si se desea agregar un método para calcular la duración de una ruta, se puede implementar en una subclase de Ruta sin cambiar la clase Ruta original.

- **Liskov Substitution Principle (LSP)**: La clase ruta no hereda de ninguna otra clase en el código proporcionado, pero si se hiciera, la clase derivada debería poder reemplazar a la clase base sin afectar el comportamiento del programa.

- **Interface Segregation Principle (ISP)**: La clase ruta no implementa ninguna interfaz, por lo que no es aplicable este principio.

- **Dependency Inversion Principle (DIP)**: La clase ruta depende solo de tipos abstractos y no de implementaciones concretas, lo que permite que se puedan intercambiar diferentes implementaciones sin afectar su funcionalidad.


> El código define una clase llamada "reto" que representa un reto en un sistema de seguimiento de actividades físicas. 

#### Clase reto:

El código de la clase reto, tiene las siguientes propiedades:

- id: un identificador único para el reto, de tipo string
- nombre: el nombre del reto, de tipo string
- rutasReto: un arreglo de rutas asociadas al reto, de tipo string[]
- tipoActividad: el tipo de actividad del reto, que puede ser "Bicicleta" o "Correr", de tipo 'Bicicleta' | 'Correr'
- usuariosRealizandoReto: un arreglo de usuarios que están realizando el reto, de tipo string[]

El constructor de la clase reto recibe como parámetros todas estas propiedades y las asigna a las propiedades correspondientes de la instancia de la clase.

```typescript
export class reto {
    private id: string
    private nombre: string
    private rutasReto: string []
    private tipoActividad: 'Bicicleta' | 'Correr'
    private usuariosRealizandoReto: string []


    constructor( id: string, nombre: string, rutasReto: string [], tipoActividad: 'Bicicleta' | 'Correr', usuariosRealizandoReto: string []) {
        this.id = id;
        this.nombre = nombre;
        this.rutasReto = rutasReto;
        this.tipoActividad = tipoActividad;
        this.usuariosRealizandoReto = usuariosRealizandoReto;
    }
    
    getId(): string {
        return this.id
    }

    getNombre(): string {
        return this.nombre
    }

    getRutasReto(): string [] {
        return this.rutasReto
    }

    getTipoActividad(): 'Bicicleta' | 'Correr' {
        return this.tipoActividad
    }

    public getUsuariosRealizandoReto(): string [] {
        return this.usuariosRealizandoReto;
    }
}
```

Además, la clase tiene varios métodos de acceso a las propiedades privadas:

- "getId()": devuelve el valor de la propiedad "id".
- "getNombre()": devuelve el valor de la propiedad "nombre".
- "getRutasReto()": devuelve el arreglo de rutas que se deben recorrer para completar el reto.
- "getTipoActividad()": devuelve el tipo de actividad que se debe realizar para completar el reto.
- "getUsuariosRealizandoReto()": devuelve el arreglo de usuarios que están actualmente realizando el reto.

Todos estos métodos son públicos y pueden ser llamados desde fuera de la clase para obtener información sobre un objeto "reto" específico.

#### Tests de la clase reto:

Los tests comprueban que la clase "reto" funciona correctamente y que sus métodos de acceso a las propiedades privadas devuelven los valores esperados.

Primero, se crea un objeto "reto" llamado "reto1" con los valores de las propiedades especificadas. Luego, se definen una serie de pruebas que comprueban que los métodos de acceso a las propiedades del objeto "reto1" funcionan correctamente.

```typescript
import { reto } from '../../src/types/retos';
import 'mocha';
import { expect } from 'chai'

const reto1: reto = new reto('C1', 'El reto de la muerte', ['R1', 'R2'], 'Bicicleta', ['USU1']);

describe('Comprobar clase Reto', () => {
    it('Metodos: getId(): string', () => {
        expect(reto1.getId()).to.be.equal('C1');
    });
    it('Metodos: getNombre(): string', () => {
        expect(reto1.getNombre()).to.be.equal('El reto de la muerte');
    });
    it('Metodos: getRutasReto(): string []', () => {
        expect(reto1.getRutasReto()).to.be.eql(['R1', 'R2']);
    });
    it('Metodos: getTipoActividad(): "Bicicleta" | "Correr"', () => {
        expect(reto1.getTipoActividad()).to.be.equal('Bicicleta');
    });
    it('Metodos: getUsuariosRealizandoReto(): string []', () => {
        expect(reto1.getUsuariosRealizandoReto()).to.be.eql(['USU1']);
    });
});
```

A continuación, se detallan los tests uno por uno:

- it('Metodos: getId(): string', () => { expect(reto1.getId()).to.be.equal('C1'); });: Este test comprueba que el método "getId()" de la clase "reto" devuelve el valor esperado para la propiedad "id" del objeto "reto1". Se espera que el valor devuelto sea una string con valor "C1".

- it('Metodos: getNombre(): string', () => { expect(reto1.getNombre()).to.be.equal('El reto de la muerte'); });: Este test comprueba que el método "getNombre()" de la clase "reto" devuelve el valor esperado para la propiedad "nombre" del objeto "reto1". Se espera que el valor devuelto sea una string con valor "El reto de la muerte".

- it('Metodos: getRutasReto(): string []', () => { expect(reto1.getRutasReto()).to.be.eql(['R1', 'R2']); });: Este test comprueba que el método "getRutasReto()" de la clase "reto" devuelve el valor esperado para la propiedad "rutasReto" del objeto "reto1". Se espera que el valor devuelto sea un arreglo de strings con los valores "R1" y "R2".

- it('Metodos: getTipoActividad(): "Bicicleta" | "Correr"', () => { expect(reto1.getTipoActividad()).to.be.equal('Bicicleta'); });: Este test comprueba que el método "getTipoActividad()" de la clase "reto" devuelve el valor esperado para la propiedad "tipoActividad" del objeto "reto1". Se espera que el valor devuelto sea una string que sea "Bicicleta".

- it('Metodos: getUsuariosRealizandoReto(): string []', () => { expect(reto1.getUsuariosRealizandoReto()).to.be.eql(['USU1']); });: Este test comprueba que el método "getUsuariosRealizandoReto()" de "reto1" devuelve un arreglo con el valor ['USU1'].

Al ejecutar estos tests, si todos pasan correctamente, se puede afirmar que los métodos de la clase "reto" funcionan correctamente y que la implementación es válida para los propósitos deseados. En caso contrario, si alguno de los tests falla, se debe revisar la implementación del código y corregir los errores encontrados para garantizar el correcto funcionamiento de la clase.

#### Cumplimiento de los principios SOLID en la clase reto:

Esta clase `reto` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase tiene una única responsabilidad, que es representar un "reto" y proporcionar métodos de acceso a sus propiedades.

- **Open/Closed Principle (OCP)**: La clase está abierta a extensiones (se pueden agregar nuevos métodos o propiedades si es necesario) pero cerrada a modificaciones (los métodos existentes no necesitan ser modificados).

- **Liskov Substitution Principle (LSP)**: La clase "reto" es sustituible por cualquier subclase que herede de ella y cumpla con las mismas funcionalidades.

- **Interface Segregation Principle (ISP)**: La clase "reto" no tiene interfaces separadas, pero proporciona métodos de acceso específicos para cada propiedad, lo que permite a los usuarios acceder a los datos de forma cohesiva y sin acceder a los datos innecesarios.

- **Dependency Inversion Principle (DIP)**: La clase "reto" no cumple con el principio de inversión de dependencia (DIP), ya que no se basa en abstracciones, sino que depende directamente de tipos concretos para sus propiedades. En caso de que se necesite utilizar diferentes tipos para estas propiedades, podría ser necesario modificar la implementación de la clase "reto".


### Colecciones de datos <a name="colecciones"></a>
> [Volver al índice](#índice)

> A continuación se detallan las colecciones de datos que se utilizarán en la aplicación.

#### Colección de usuarios:

Este es un módulo escrito en TypeScript para la colección de usuarios en una aplicación de seguimiento de actividad física. El módulo se encarga de definir una clase usuarioCollection que se encarga de almacenar y manejar una colección de usuarios y la guarda en una base de datos lowdb en formato JSON.

```typescript
import { usuario } from "../types/usuarios";
import { usuarioSchema } from "../schemas/usuarioSchema";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { rutaCollection } from "./rutaCollection";
import { retoCollection } from "./retoCollection";
import { grupoCollection } from "./grupoCollection";
/**
 * Usuarios:
Alfabéticamente por nombre del usuario, ascendente y descendente.
Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
 */

export class usuarioCollection {
  private coleccionUsuarios: usuario[];
  private database: lowdb.LowdbSync<usuarioSchema>;

  constructor(public coleccion: usuario[]) {
    this.database = lowdb(new FileSync("src/databases/db_usuarios.json"));
    if (this.database.has("usuario").value()) {
      const dbItems = this.database.get("usuario").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new usuario(
            item.id,
            item.nombre,
            item.actividades,
            item.amigos,
            item.historicoRutas
          )
        )
      );
    }
    this.coleccionUsuarios = coleccion;
  }

  public getColeccionUsuarios(): usuario[] {
    return this.coleccionUsuarios;
  }

  public getHistoricoRutas(
    id: string
  ): { fecha: Date; ruta: string }[] | undefined {
    const usuario = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    return usuario ? usuario.getHistoricoRutas() : undefined;
  }

  public addUsuario(usuario: usuario) {
    this.coleccionUsuarios.push(usuario);
    const dbUsuario = {
      id: usuario.getId(),
      nombre: usuario.getNombre(),
      actividades: usuario.getActividades(),
      amigos: usuario.getAmigos(),
      historicoRutas: usuario.getHistoricoRutas(),
    };
    this.database.get("usuario").push(dbUsuario).write();
  }

  public removeUsuario(id: string) {
    const usuarioAEliminar = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    if (usuarioAEliminar) {
      this.coleccionUsuarios = this.coleccionUsuarios.filter(
        (usuario) => usuario.getId() !== id
      );
      this.database.get("usuario").remove({ id: id }).write();
    }
  }

  public ordenarUsuariosPorNombre(
    orden: "ascendente" | "descendente"
  ): usuario[] {
    if (orden === "ascendente") {
      return this.coleccionUsuarios.sort((a, b) =>
        a.getNombre().localeCompare(b.getNombre())
      );
    } else {
      return this.coleccionUsuarios.sort((a, b) =>
        b.getNombre().localeCompare(a.getNombre())
      );
    }
  }

  public ordenarUsuariosPorKm(
    coleccionRutas: rutaCollection,
    tiempo: "semana" | "mes" | "año",
    orden: "ascendente" | "descendente"
  ) {
    if (orden === "ascendente") {
      return this.coleccionUsuarios.sort(
        (a, b) =>
          this.getEstadisticasEntrenamiento(coleccionRutas, a.getId(), tiempo)
            .km -
          this.getEstadisticasEntrenamiento(coleccionRutas, b.getId(), tiempo)
            .km
      );
    } else {
      return this.coleccionUsuarios.sort(
        (a, b) =>
          this.getEstadisticasEntrenamiento(coleccionRutas, b.getId(), tiempo)
            .km -
          this.getEstadisticasEntrenamiento(coleccionRutas, a.getId(), tiempo)
            .km
      );
    }
  }

  // Estadísticas de entrenamiento: Cantidad de km y desnivel total acumulados en la semana, mes y año.

  public getEstadisticasEntrenamiento(
    coleccionRutas: rutaCollection,
    id: string,
    tiempo: "semana" | "mes" | "año"
  ): { km: number; desnivel: number } {
    const usuario = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    if (usuario) {
      const historicoRutas = usuario.getHistoricoRutas();
      let km = 0;
      let desnivel = 0;
      const fechaActual = new Date();
      const fechaInicio = new Date();
      switch (tiempo) {
        case "semana":
          fechaInicio.setDate(fechaInicio.getDate() - 7);
          break;
        case "mes":
          fechaInicio.setMonth(fechaInicio.getMonth() - 1);
          break;
        case "año":
          fechaInicio.setFullYear(fechaInicio.getFullYear() - 1);
          break;
      }
      historicoRutas?.forEach((historico) => {
        const historicoFecha = new Date(historico.fecha);
        if (historicoFecha >= fechaInicio && historicoFecha <= fechaActual) {
          const ruta = coleccionRutas
            .getColeccionRutas()
            .find((ruta) => ruta.getId() === historico.ruta);
          if (ruta) {
            km += ruta.getLongitudRuta();
            desnivel += ruta.getDesnivelMedio();
          }
        }
      });
      return { km: km, desnivel: desnivel };
    }
    return { km: 0, desnivel: 0 };
  }

  public getRutaFavorita(
    coleccionRutas: rutaCollection,
    id_usuario: string
  ): string | string[] | undefined {
    // Retornar solo las 3 primeras
    const usuario = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id_usuario
    );
    if (usuario) {
      const historicoRutas = usuario.getHistoricoRutas();
      const rutasFavoritas: { ruta: string; veces: number }[] = [];
      historicoRutas?.forEach((historico) => {
        const ruta = rutasFavoritas.find(
          (ruta) => ruta.ruta === historico.ruta
        );
        if (ruta) {
          ruta.veces++;
        } else {
          rutasFavoritas.push({ ruta: historico.ruta, veces: 1 });
        }
      });
      rutasFavoritas.sort((a, b) => b.veces - a.veces);
      // Retornar las 3 rutas favoritas
      const rutasFavoritasRetorno: string[] = [];
      const nFavoritas = rutasFavoritas.length > 3 ? 3 : rutasFavoritas.length;
      for (let i = 0; i < nFavoritas; i++) {
        rutasFavoritasRetorno.push(rutasFavoritas[i].ruta);
      }
      return rutasFavoritasRetorno;
    }
    return undefined;
  }

  public getRetosActivos(
    coleccionRetos: retoCollection,
    id_usuario: string
  ): string[] {
    const retosActivos: string[] = [];
    const retos = coleccionRetos.getColeccionRetos();
    retos
      ? retos.forEach((reto) => {
          if (reto.getUsuariosRealizandoReto().includes(id_usuario)) {
            retosActivos.push(reto.getId());
          }
        })
      : undefined;
    return retosActivos;
  }

  public getUsuario(id: string): void {
    const user = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    console.log("ID = " + user?.getId());
    console.log("Nombre = " + user?.getNombre());
    console.log("Actividades = " + user?.getActividades());
  }

  public getAmigos(id: string): string[] | undefined {
    const user = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    return user?.getAmigos();
  }

  public addAmigo(id: string, idAmigo: string): string {
    const user = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    if (!user) return "No se ha encontrado el usuario";
    if (!this.coleccionUsuarios.find((usuario) => usuario.getId() === idAmigo))
      return "No se ha encontrado el amigo";
    if (user.getAmigos()?.includes(idAmigo)) return "El usuario ya es amigo";
    if (id === idAmigo) return "No puedes añadirte a ti mismo";
    user.getAmigos()?.push(idAmigo);
    this.database
      .get("usuario")
      .find({ id: id })
      .assign({ amigos: user?.getAmigos() })
      .write();
    return "Amigo añadido";
  }

  public removeAmigo(id: string, idAmigo: string): string {
    const user = this.coleccionUsuarios.find(
      (usuario) => usuario.getId() === id
    );
    if (!user) return "No se ha encontrado el usuario";
    if (!user.getAmigos()?.includes(idAmigo)) return "El usuario no es amigo";
    user.getAmigos()?.splice(user.getAmigos()?.indexOf(idAmigo), 1);
    this.database
      .get("usuario")
      .find({ id: id })
      .assign({ amigos: user?.getAmigos() })
      .write();
    return "Amigo eliminado";
  }

  public getGrupos(
    coleccionGrupos: grupoCollection,
    id_user: string
  ): string[] {
    const gruposActivos = new Set<string>();
    const grupos = coleccionGrupos.getColeccionGrupos();
    grupos?.forEach((grupo) => {
      if (grupo.getParticipantes().includes(id_user)) {
        gruposActivos.add(grupo.getId());
      }
    });
    return Array.from(gruposActivos);
  }
}
```

Algunos puntos destacados del código:

- Se importan las dependencias necesarias (lowdb y FileSync) y algunos tipos personalizados (usuario y usuarioSchema).
- La clase usuarioCollection tiene un constructor que acepta una colección de usuarios y un método para obtener la colección de usuarios. Además, tiene métodos para agregar, eliminar y obtener estadísticas de entrenamiento y rutas favoritas para un usuario en particular. También hay un método para obtener retos activos para un usuario.
- El `constructor(public coleccion: usuario[])` de la clase usuarioCollection inicializa la colección de usuarios con la matriz de usuarios proporcionada y crea una instancia de la base de datos utilizando el adaptador FileSync. Si ya hay elementos en la base de datos, los carga en la colección de usuarios.
- El método `getColeccionUsuarios(): usuario[]` devuelve la colección completa de usuarios.
- El método `getHistoricoRutas(id: string): { fecha: Date; ruta: string }[] | undefined` toma un ID de usuario y devuelve un array de objetos de historial de rutas para ese usuario. Si no se encuentra ningún usuario con el ID proporcionado, devuelve undefined.
- El método `addUsuario(usuario: usuario)` agrega un objeto usuario a la colección de usuarios y también lo agrega a la base de datos.
- El método `removeUsuario(id: string)` elimina un usuario de la colección de usuarios utilizando su ID y también lo elimina de la base de datos.
- El método `ordenarUsuariosPorNombre(orden: "ascendente" | "descendente"): usuario[]` ordena la colección de usuarios por nombre, ya sea en orden ascendente o descendente. Devuelve la colección de usuarios ordenada.
- El método `ordenarUsuariosPorKm(coleccionRutas: rutaCollection, tiempo: "semana" | "mes" | "año", orden: "ascendente" | "descendente")` ordena la colección de usuarios según la cantidad de kilómetros recorridos en la semana, mes o año especificados. Recibe como argumento un objeto rutaCollection, que se utiliza para obtener la longitud de la ruta de cada registro en el historial de rutas del usuario. Devuelve la colección de usuarios ordenada.
- El método `getEstadisticasEntrenamiento(coleccionRutas: rutaCollection, id: string, tiempo: "semana" | "mes" | "año"): { km: number; desnivel: number }` devuelve la cantidad de kilómetros y desnivel acumulado por un usuario en la semana, mes o año especificados. Utiliza el objeto rutaCollection proporcionado para calcular la longitud de la ruta y el desnivel promedio para cada registro en el historial de rutas del usuario.

#### Tests de la colección de usuarios:

A continuación, el conjunto de pruebas (tests) que evalúan el correcto funcionamiento de algunos métodos de la clase usuarioCollection y sus dependencias (rutaCollection y retoCollection).

Primero se importan las dependencias necesarias, incluyendo la clase usuario y las colecciones rutaCollection, retoCollection y usuarioCollection, que se utilizarán en las pruebas.

Luego se define un objeto usuario3 que contiene algunos datos de un usuario, y se crean instancias de las tres colecciones con parámetros vacíos ([]).

```typescript
import { usuario } from '../../src/types/usuarios';
import { rutaCollection } from '../../src/collections/rutaCollection';
import { retoCollection } from '../../src/collections/retoCollection';
import { usuarioCollection } from '../../src/collections/usuarioCollection';
import 'mocha';
import { expect } from 'chai'


const usuario3: usuario = new usuario("USU17", "Juan", "Correr", ["USU1"], ["GR2"], [ { fecha: new Date("2022-05-20T18:25:43.511Z"), ruta: "R3" } ]);
const usuarioCollection1: usuarioCollection = new usuarioCollection([]);
const rutaCollection1: rutaCollection = new rutaCollection([]);
const retoCollection1: retoCollection = new retoCollection([]);
```

A continuación, se describe un conjunto de pruebas utilizando la función describe de la librería mocha, que agrupa un conjunto de pruebas que evalúan el comportamiento de la clase usuarioCollection.

Cada prueba se define mediante la función it de mocha, y se le da un nombre descriptivo que explica qué se está evaluando. Dentro de cada prueba se utiliza la función expect de la librería chai para definir una serie de expectativas que deben cumplirse para que la prueba sea exitosa.

```typescript
describe('Comprobar clase usuarioCollection', () => {
    it('Metodo: getColeccionUsuarios(): usuario[]', () => {
        expect(usuarioCollection1.getColeccionUsuarios().length).to.be.eql(15);
    });
    it('Metodo: getHistoricoRutas(id: string): { fecha: Date, ruta: string }[] | undefined', () => {
        expect(usuarioCollection1.getHistoricoRutas("USU3")).to.be.eql([ { fecha: "2022-05-12", ruta: "R3" } ]);
    });
    it('Metodo: addUsuario(usuario: usuario)', () => {
        usuarioCollection1.addUsuario(usuario3);
        expect(usuarioCollection1.getColeccionUsuarios().length).to.be.equal(16);
    });
    it('Metodo: removeUsuario(id: string)', () => {
        usuarioCollection1.removeUsuario("USU17");
        expect(usuarioCollection1.getColeccionUsuarios().length).to.be.equal(15);
    });
    it('Metodo: getEstadisticasEntrenamiento(id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number }', () => {
        expect(usuarioCollection1.getEstadisticasEntrenamiento(rutaCollection1, "USU1", "mes")).to.be.eql({km: 15, desnivel: 200});
    });
    it('Metodo: getRutaFavorita(id_usuario: string): string | string [] | undefined', () => {
        expect(usuarioCollection1.getRutaFavorita(rutaCollection1, "USU1")).to.be.eql(["R2", "R3", "R4"]);
    });
    it('Metodo: getRetosActivos(id_usuario: string): string[]', () => {
        expect(usuarioCollection1.getRetosActivos(retoCollection1, "USU1")).to.be.eql(["C1", "C2"]);
    });

});
```

En resumen, las pruebas evalúan los siguientes métodos de la clase usuarioCollection:

- getColeccionUsuarios(): Evalúa si la función getColeccionUsuarios devuelve un array con la longitud esperada.
- getHistoricoRutas(id: string): Evalúa si la función getHistoricoRutas devuelve un array con un objeto que tiene una fecha y una ruta específicas para un usuario determinado.
- addUsuario(usuario: usuario): Evalúa si la función addUsuario agrega correctamente un nuevo usuario a la colección.
- removeUsuario(id: string): Evalúa si la función removeUsuario elimina correctamente un usuario de la colección.
- getEstadisticasEntrenamiento(id_usuario: string, tiempo: "semana" | "mes" | "año"): Evalúa si la función getEstadisticasEntrenamiento devuelve las estadísticas de entrenamiento esperadas para un usuario en un período de tiempo específico.
- getRutaFavorita(id_usuario: string): Evalúa si la función getRutaFavorita devuelve la ruta favorita esperada para un usuario.
- getRetosActivos(id_usuario: string): Evalúa si la función getRetosActivos devuelve los retos activos esperados para un usuario.

Cada prueba verifica una funcionalidad específica de la clase usuarioCollection y sus dependencias, lo que permite identificar posibles errores y asegurar que el código funcione correctamente.

#### Colección de grupos:

La clase grupoCollection representa una colección de objetos grupo y proporciona diferentes métodos para realizar operaciones en la colección. Esta colección de grupos la guarda en una base de datos lowdb en formato JSON.

El constructor de la clase toma una colección de objetos grupo y usa la biblioteca lowdb para crear una base de datos JSON en el archivo src/databases/db_grupos.json. Si la base de datos ya contiene un objeto con el nombre "grupo", se cargan los datos de la base de datos y se agregan a la colección.

```typescript
import { grupo } from "../types/grupos";
import { grupoSchema } from "../schemas/grupoSchema";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

import { rutaCollection } from "../collections/rutaCollection";

export class grupoCollection {
  private coleccionGrupos: grupo[];
  private database: lowdb.LowdbSync<grupoSchema>;

  constructor(public coleccion: grupo[]) {
    this.database = lowdb(new FileSync("src/databases/db_grupos.json"));
    if (this.database.has("grupo").value()) {
      const dbItems = this.database.get("grupo").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new grupo(
            item.id,
            item.nombre,
            item.participantes,
            item.historicoRutas,
            item.creador
          )
        )
      );
    }
    this.coleccionGrupos = coleccion;
  }

  public getColeccionGrupos(): grupo[] {
    return this.coleccionGrupos;
  }

  public addParticipante(id: string, idParticipante: string) {
    const grupo = this.coleccionGrupos.find((grupo) => grupo.getId() === id);
    if (grupo) {
      grupo.addParticipante(idParticipante);
      this.database
        .get("grupo")
        .find({ id: id })
        .assign({ participantes: grupo.getParticipantes() })
        .write();
    }
  }

  public addGrupo(grupo: grupo) {
    this.coleccionGrupos.push(grupo);
    const dbGrupo = {
      id: grupo.getId(),
      nombre: grupo.getNombre(),
      participantes: grupo.getParticipantes(),
      historicoRutas: grupo.getHistoricoRutas(),
      creador: grupo.getCreador(),
    };
    this.database.get("grupo").push(dbGrupo).write();
  }

  public removeGrupo(id: string) {
    const grupoAEliminar = this.coleccionGrupos.find(
      (grupo) => grupo.getId() === id
    );
    if (grupoAEliminar) {
      this.coleccionGrupos = this.coleccionGrupos.filter(
        (grupo) => grupo.getId() !== id
      );
      this.database.get("grupo").remove({ id: id }).write();
    }
  }

  public getGruposUsuario(id: string): void {
    const misGrupos = this.coleccionGrupos.filter((grupo) =>
      grupo.getParticipantes()?.includes(id)
    );
    misGrupos.forEach((grupo) =>
      console.log(grupo.getId() + " " + grupo.getNombre())
    );
  }

  public ordenarGruposPorNombre(orden: "ascendente" | "descendente"): grupo[] {
    if (orden === "ascendente") {
      return this.coleccionGrupos.sort((a, b) =>
        a.getNombre().localeCompare(b.getNombre())
      );
    } else {
      return this.coleccionGrupos.sort((a, b) =>
        b.getNombre().localeCompare(a.getNombre())
      );
    }
  }

  public ordenarGruposPorParticipantes(
    orden: "ascendente" | "descendente"
  ): grupo[] {
    if (orden === "descendente") {
      return this.coleccionGrupos.sort(
        (a, b) => a.getParticipantes()?.length - b.getParticipantes()?.length
      );
    } else {
      return this.coleccionGrupos.sort(
        (a, b) => b.getParticipantes()?.length - a.getParticipantes()?.length
      );
    }
  }

  public ordenarGruposPorKm(
    coleccionRutas: rutaCollection,
    tiempo: "semana" | "mes" | "año",
    orden: "ascendente" | "descendente"
  ) {
    if (orden === "ascendente") {
      return this.coleccionGrupos.sort(
        (a, b) =>
          this.getEstadisticasEntrenamiento(coleccionRutas, a.getId(), tiempo)
            .km -
          this.getEstadisticasEntrenamiento(coleccionRutas, b.getId(), tiempo)
            .km
      );
    } else {
      return this.coleccionGrupos.sort(
        (a, b) =>
          this.getEstadisticasEntrenamiento(coleccionRutas, b.getId(), tiempo)
            .km -
          this.getEstadisticasEntrenamiento(coleccionRutas, a.getId(), tiempo)
            .km
      );
    }
  }

  public getEstadisticasEntrenamiento(
    coleccionRutas: rutaCollection,
    id: string,
    tiempo: "semana" | "mes" | "año"
  ): { km: number; desnivel: number } {
    const grupo = this.coleccionGrupos.find((grupo) => grupo.getId() === id);
    if (grupo) {
      const historicoRutas = grupo.getHistoricoRutas();
      let km = 0;
      let desnivel = 0;
      const fechaActual = new Date();
      const fechaInicio = new Date();
      switch (tiempo) {
        case "semana":
          fechaInicio.setDate(fechaInicio.getDate() - 7);
          break;
        case "mes":
          fechaInicio.setMonth(fechaInicio.getMonth() - 1);
          break;
        case "año":
          fechaInicio.setFullYear(fechaInicio.getFullYear() - 1);
          break;
      }
      historicoRutas?.forEach((historico) => {
        const historicoFecha = new Date(historico.fecha);
        if (historicoFecha >= fechaInicio && historicoFecha <= fechaActual) {
          const ruta = coleccionRutas
            .getColeccionRutas()
            .find((ruta) => ruta.getId() === historico.ruta);
          if (ruta) {
            km += ruta.getLongitudRuta();
            desnivel += ruta.getDesnivelMedio();
          }
        }
      });

      return { km: km, desnivel: desnivel };
    }
    return { km: 0, desnivel: 0 };
  }

  /*
Clasificación de los usuarios: Ranking de los usuarios que más entrenamientos han realizado históricamente dentro del grupo
, es decir, ordenar los usuarios por la cantidad de km totales o desnivel total que han acumulado.
*/

  public getClasificacionUsuarios(
    coleccionRutas: rutaCollection,
    id: string,
    tipo: "km" | "desnivel"
  ): { usuario: string; valor: number }[] {
    const grupo = this.coleccionGrupos.find((grupo) => grupo.getId() === id);
    if (grupo) {
      const historicoRutas = grupo.getHistoricoRutas();
      const usuarios = grupo.getParticipantes();
      const clasificacion: { usuario: string; valor: number }[] = [];
      usuarios?.forEach((usuario) => {
        let km = 0;
        let desnivel = 0;
        historicoRutas?.forEach((historico) => {
          if (historico.usuarios.includes(usuario)) {
            const ruta = coleccionRutas
              .getColeccionRutas()
              .find((ruta) => ruta.getId() === historico.ruta);
            if (ruta) {
              km += ruta.getLongitudRuta();
              desnivel += ruta.getDesnivelMedio();
            }
          }
        });
        clasificacion.push({
          usuario: usuario,
          valor: tipo === "km" ? km : desnivel,
        });
      });
      clasificacion.sort((a, b) => b.valor - a.valor);
      return clasificacion;
    }
    return [];
  }

  // Rutas favoritas del grupo: Rutas que los usuarios del grupo han realizado con mayor frecuencia en sus salidas conjuntas.
  public getRutasFavoritas(
    coleccionRutas: rutaCollection,
    id: string
  ): { ruta: string; frecuencia: number }[] {
    const grupo = this.coleccionGrupos.find((grupo) => grupo.getId() === id);
    if (grupo) {
      const historicoRutas = grupo.getHistoricoRutas();
      const rutas: { ruta: string; frecuencia: number }[] = [];
      historicoRutas?.forEach((historico) => {
        const ruta = rutas.find((ruta) => ruta.ruta === historico.ruta);
        if (ruta) {
          ruta.frecuencia++;
        } else {
          rutas.push({ ruta: historico.ruta, frecuencia: 1 });
        }
      });
      rutas.sort((a, b) => b.frecuencia - a.frecuencia);
      // Solo devolvemos las 3 primeras
      return rutas.slice(0, 3);
    }
    return [];
  }

  getGrupoById(id: string): grupo | undefined {
    return this.coleccionGrupos.find((grupo) => grupo.getId() === id);
  }

  getNextId(): string {
    const last = this.coleccionGrupos[this.coleccionGrupos.length - 1].id;
    // expresion regular para extraer el numero de la id
    const regex = /\d+/;
    const idNumber = parseInt(regex.exec(last)![0]);
    return "G" + (idNumber + 1);
  }
}
```

Los métodos de la clase incluyen:

- `getColeccionGrupos()`: devuelve la colección de objetos grupo almacenados en la clase.
- `addGrupo(grupo)`: agrega un objeto grupo a la colección y lo almacena en la base de datos.
- `removeGrupo(id)`: elimina un objeto grupo de la colección y de la base de datos según su identificador
- `getEstadisticasEntrenamiento(coleccionRutas, id, tiempo)`: devuelve un objeto que contiene las estadísticas de entrenamiento para un grupo específico en un período de tiempo específico. Las estadísticas incluyen la cantidad de kilómetros recorridos y el desnivel acumulado en todas las rutas que el grupo ha realizado durante el período de tiempo.
- `getClasificacionUsuarios(coleccionRutas, id, tipo)`: devuelve una lista de usuarios del grupo clasificados por la cantidad de kilómetros recorridos o el desnivel acumulado en todas las rutas que han realizado en el grupo.
- `getRutasFavoritas(coleccionRutas, id)`: devuelve una lista de las rutas favoritas del grupo según la frecuencia con la que los usuarios del grupo las han realizado en sus salidas conjuntas.

#### Tests de la colección de grupos:

Los tests que se han preparado para esta clase son los siguientes: 

```typescript
import { grupo } from '../../src/types/grupos';
import { grupoCollection } from '../../src/collections/grupoCollection';
import { rutaCollection } from '../../src/collections/rutaCollection';
import 'mocha';
import { expect } from 'chai'

const grupoCollection1: grupoCollection = new grupoCollection([]);
const rutaCollection1: rutaCollection = new rutaCollection([]);
const grupo1: grupo = new grupo('GR4', 'Grupo 4', ['USU1', 'USU2', 'USU3'], [{
    "fecha": new Date("2022-05-12T18:25:43.511Z"),
    "ruta": "R2",
    "usuarios": [
        "USU1",
        "USU2"
    ]
},
{
    "fecha": new Date("2022-05-12T18:25:43.511Z"),
    "ruta": "R2",
    "usuarios": [
        "USU1"
    ]
}]);

describe('Comprobar clase GrupoCollection', () => {
    it('Metodos: getColeccionGrupos(): grupo []', () => {
        expect(grupoCollection1.getColeccionGrupos().length).to.be.eql(3);
    });
    it('Metodos: addGrupo(grupo: grupo)', () => {
        grupoCollection1.addGrupo(grupo1);
        expect(grupoCollection1.getColeccionGrupos().length).to.be.eql(4);
    });
    it('Metodos: removeGrupo(id: string)', () => {
        grupoCollection1.removeGrupo('GR4');
        expect(grupoCollection1.getColeccionGrupos().length).to.be.eql(3);
    });
    it('Metodo: getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number }', () => {
        expect(grupoCollection1.getEstadisticasEntrenamiento(rutaCollection1, 'G1', 'mes')).to.be.eql({ km: 15, desnivel: 200 });
    });
    it('Metodo: getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[]', () => {
        expect(grupoCollection1.getClasificacionUsuarios(rutaCollection1, 'G1', 'km')).to.be.eql([{ usuario: 'USU1', valor: 30 }, { usuario: 'USU2', valor: 15 }]);
    });
    it('Metodo: getRutasFavoritas(coleccionRutas: rutaCollection ,id: string): {ruta: string, frecuencia: number}[]', () => {
        expect(grupoCollection1.getRutasFavoritas(rutaCollection1, 'G2')).to.be.eql([{ ruta: 'R3', frecuencia: 2}, { ruta: 'R4', frecuencia: 2}, { ruta: 'R5', frecuencia: 1}]);
    });


});
```

El código presentado es una serie de tests que prueban los métodos de la clase grupoCollection. A continuación se explica cada uno de ellos:

- `it('Metodos: getColeccionGrupos(): grupo []', () => {...})`: Este test verifica que el método getColeccionGrupos() de la clase grupoCollection devuelva un arreglo de objetos tipo grupo. Se espera que la longitud de este arreglo sea igual a 3. Para ello, se utiliza la función expect del paquete chai, que comprueba que el valor actual sea igual al valor esperado utilizando la función to.be.eql().

- `it('Metodos: addGrupo(grupo: grupo)', () => {...})`: En este test se comprueba que el método addGrupo(grupo: grupo) de la clase grupoCollection añada un objeto grupo al arreglo de grupos. Primero se crea un nuevo objeto grupo y se añade a la colección de grupos mediante la función addGrupo(). Luego se comprueba que la longitud del arreglo sea igual a 4.

- `it('Metodos: removeGrupo(id: string)', () => {...})`: En este test se verifica que el método removeGrupo(id: string) de la clase grupoCollection elimine un objeto grupo del arreglo de grupos. Para ello, se elimina el objeto grupo1 que se había añadido en el test anterior, y se comprueba que la longitud del arreglo sea igual a 3.

- `it('Metodo: getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number }', () => {...})`: En este test se comprueba que el método getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number } de la clase grupoCollection devuelva un objeto con las estadísticas de entrenamiento de un grupo. Para ello, se utiliza un objeto rutaCollection que se pasa como argumento al método, se especifica el id del grupo y el intervalo de tiempo en el que se desea obtener las estadísticas. Se espera que el objeto devuelto tenga un valor de kilómetros y de desnivel, y se utiliza la función to.be.eql() de chai para comprobar que los valores sean iguales a los esperados.

- `it('Metodo: getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[]', () => {...})`: En este test se verifica que el método getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[] de la clase grupoCollection devuelva un arreglo de objetos con la clasificación de usuarios de un grupo en función del tipo de entrenamiento. Se utiliza un objeto rutaCollection que se pasa como argumento al método, se especifica el id del grupo y el tipo de entrenamiento (kilómetros o desnivel). Se espera que el arreglo devuelto contenga objetos con el nombre del usuario y el valor del tipo de entrenamiento especificado. Se utiliza la función to.be.eql() de chai

#### Colección de rutas:

El siguiente código define una clase rutaCollection que gestiona una colección de rutas y la guarda en una base de datos lowdb en formato JSON.

```typescript
import { ruta } from "../types/rutas";
import { rutaSchema } from "../schemas/rutaSchema";
import { usuarioCollection } from "./usuarioCollection";
import { usuarioSchema } from "../schemas/usuarioSchema";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

/**Rutas:
Alfabéticamente por nombre de la ruta, ascendente y descendente.
Cantidad de usuarios que realizan las rutas, ascendente y descendente.
Por longitud de la ruta, ascendente y descendente.
Por la calificación media de la ruta, ascendente y descendente.
Ordenar por actividad: correr o ciclismo.
 */

export class rutaCollection {
  private coleccionRutas: ruta[];
  private database: lowdb.LowdbSync<rutaSchema>;
  private databaseUsuarios: lowdb.LowdbSync<usuarioSchema>;

  constructor(public coleccion: ruta[]) {
    this.database = lowdb(new FileSync("src/databases/db_rutas.json"));
    this.databaseUsuarios = lowdb(new FileSync("src/databases/db_usuarios.json"));
    if (this.database.has("ruta").value()) {
      const dbItems = this.database.get("ruta").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new ruta(
            item.id,
            item.nombre,
            item.coordenadasInicio,
            item.coordenadasFinal,
            item.longitudRuta,
            item.desnivelMedio,
            item.tipoActividad,
            item.calificacionMedia
          )
        )
      );
    }
    this.coleccionRutas = coleccion;
  }

  public getColeccionRutas(): ruta[] {
    return this.coleccionRutas;
  }

  public addRuta(ruta: ruta) {
    this.coleccionRutas.push(ruta);
    const dbRuta = {
      id: ruta.getId(),
      nombre: ruta.getNombre(),
      coordenadasInicio: ruta.getCoordenadasInicio(),
      coordenadasFinal: ruta.getCoordenadasFinal(),
      longitudRuta: ruta.getLongitudRuta(),
      desnivelMedio: ruta.getDesnivelMedio(),
      tipoActividad: ruta.getTipoActividad(),
      calificacionMedia: ruta.getCalificacionMedia(),
    };
    this.database.get("ruta").push(dbRuta).write();
  }

  public removeRuta(id: string) {
    const rutaAEliminar = this.coleccionRutas.find(
      (ruta) => ruta.getId() === id
    );
    if (rutaAEliminar) {
      this.coleccionRutas = this.coleccionRutas.filter(
        (ruta) => ruta.getId() !== id
      );
      this.database.get("ruta").remove({ id: id }).write();
    }
  }

  //Alfabéticamente por nombre de la ruta, ascendente y descendente.
  public getRutasAlfabetico(orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) =>
        a.getNombre().localeCompare(b.getNombre())
      );
    } else {
      return this.coleccionRutas.sort((a, b) =>
        b.getNombre().localeCompare(a.getNombre())
      );
    }
  }

  //Cantidad de usuarios que realizan las rutas, ascendente y descendente.
  public getRutasPorCantidadUsuarios(coleccionUsuarios: usuarioCollection, orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort(
        (a, b) =>
          this.getUsuariosFinalizados(coleccionUsuarios, a.getId()).length -
          this.getUsuariosFinalizados(coleccionUsuarios, b.getId()).length
      );
    } else {
      return this.coleccionRutas.sort(
        (a, b) =>
          this.getUsuariosFinalizados(coleccionUsuarios, b.getId()).length
          - this.getUsuariosFinalizados(coleccionUsuarios, a.getId()).length
      );
    }
  }

  // Por la calificación media de la ruta, ascendente y descendente.

  public getRutasPorLongitud(orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort(
        (a, b) => a.getLongitudRuta() - b.getLongitudRuta()
      );
    } else {
      return this.coleccionRutas.sort(
        (a, b) => b.getLongitudRuta() - a.getLongitudRuta()
      );
    }

  }
  public getRutasCalificacionMedia(orden: boolean): ruta[] {
    if (orden) {
      return this.coleccionRutas.sort(
        (a, b) => a.getCalificacionMedia() - b.getCalificacionMedia()
      );
    } else {
      return this.coleccionRutas.sort(
        (a, b) => b.getCalificacionMedia() - a.getCalificacionMedia()
      );
    }
  }

  //Ordenar por actividad: correr o ciclismo.

  public getRutasActividad(actividad: string): ruta[] {
    // comprobamos que la actividad es ciclismo o correr
    if (actividad === "Bicicleta" || actividad === "Correr") {
      return this.coleccionRutas.filter(
        (ruta) => ruta.getTipoActividad() === actividad
      );
    } else {
      return [];
    }
  }

  public getInfoRuta(id: string, coleccionUsuarios: usuarioCollection): void {
    const ruta = this.coleccionRutas.find((ruta) => ruta.getId() === id);
    if (ruta) {
      console.log("Nombre: " + ruta.getNombre());
      console.log("Coordenadas inicio: " + ruta.getCoordenadasInicio());
      console.log("Coordenadas final: " + ruta.getCoordenadasFinal());
      console.log("Longitud de la ruta: " + ruta.getLongitudRuta());
      console.log("Desnivel medio: " + ruta.getDesnivelMedio());
      console.log(
        "Usuarios finalizados: " +
          this.getUsuariosFinalizados(coleccionUsuarios, id)
      );
      console.log("Tipo de actividad: " + ruta.getTipoActividad());
      console.log("Calificación media: " + ruta.getCalificacionMedia());
    } else {
      console.log("No existe la ruta");
    }
  }

  getRutaById(id: string): ruta | undefined {
    return this.coleccionRutas.find((ruta) => ruta.getId() === id);
  }


  public addRutaRealizada(coleccionUsuarios: usuarioCollection,id: string, user_id: string) {
    // buscar el usuario con ese ID.
    const usuario = coleccionUsuarios.getColeccionUsuarios().find(usuario => usuario.getId() === user_id);
    if (usuario) {
      // comprobar que la ruta existe
      const ruta = this.coleccionRutas.find(ruta => ruta.getId() === id);
      if (ruta) {
        usuario.addHistoricoRutas(new Date(Date.now()), id);
        // añadir a la base da datos
        this.databaseUsuarios.get("usuario").find({ id: user_id }).get("historicoRutas").push({ fecha: new Date(Date.now()), ruta: id }).write();
      } else {
        console.log("No existe la ruta");
      } } else {
      console.log("No existe el usuario");

    }

  }

  public getUsuariosFinalizados(
    coleccionUsuarios: usuarioCollection,
    id: string
  ): string[] {
    const usuariosFinalizados = new Set<string>();
    const usuarios = coleccionUsuarios.getColeccionUsuarios();

    if (!ruta) {
      console.log("No existe la ruta");
    }

    usuarios.forEach((usuario) => {
      if (usuario.getHistoricoRutas().find((ruta) => ruta.ruta === id)) {
        usuariosFinalizados.add(usuario.getId());
      }
    });

    return Array.from(usuariosFinalizados);
  }
}
```

En el constructor, se carga la base de datos si existe y se crean las rutas a partir de los datos guardados. También se inicializa la variable coleccionRutas con la colección de rutas proporcionada.

La clase tiene los siguientes métodos:

- `constructor(coleccion: ruta[])`: el constructor de la clase que recibe una colección de objetos ruta como parámetro y los guarda en la propiedad coleccionRutas. Además, inicializa dos bases de datos de lowdb para guardar los datos de las rutas y de los usuarios.
- `getColeccionRutas(): ruta[]`: devuelve la colección de rutas guardada en la propiedad coleccionRutas.
- `addRuta(ruta: ruta)`: añade una nueva ruta a la colección de rutas coleccionRutas y guarda sus datos en la base de datos de rutas.
- `removeRuta(id: string)`: elimina la ruta con el identificador id de la colección de rutas coleccionRutas y de la base de datos de rutas.
- `getRutasAlfabetico(orden: boolean): ruta[]`: ordena la colección de rutas coleccionRutas alfabéticamente por nombre de la ruta en orden ascendente o descendente, según el valor del parámetro orden.
- `getRutasPorCantidadUsuarios(coleccionUsuarios: usuarioCollection, orden: boolean): ruta[]`: ordena la colección de rutas coleccionRutas por la cantidad de usuarios que han realizado cada ruta en orden ascendente o descendente, según el valor del parámetro orden. El método recibe como parámetro una colección de usuarios coleccionUsuarios y utiliza el método getUsuariosFinalizados() para obtener la lista de usuarios que han finalizado cada ruta.
- `getRutasPorLongitud(orden: boolean): ruta[]`: ordena la colección de rutas coleccionRutas por la longitud de la ruta en orden ascendente o descendente, según el valor del parámetro orden.
- `getRutasCalificacionMedia(orden: boolean): ruta[]`: ordena la colección de rutas coleccionRutas por la calificación media de la ruta en orden ascendente o descendente, según el valor del parámetro orden.
- `getRutasActividad(actividad: string): ruta[]`: devuelve las rutas que corresponden a la actividad especificada en el parámetro actividad, que puede ser "Bicicleta" o "Correr".
- `getInfoRuta(id: string, coleccionUsuarios: usuarioCollection)`: muestra la información de la ruta con el identificador id, incluyendo el número de usuarios que han finalizado la ruta y la calificación media de la ruta. El método recibe como parámetro una colección de usuarios coleccionUsuarios y utiliza el método getUsuariosFinalizados() para obtener la lista de usuarios que han finalizado la ruta.


#### Tests de la colección de rutas:

Los tests de la clase `rutaCollection` son os siguientes:

```typescript
import { rutaCollection } from '../../src/collections/rutaCollection';
import { ruta } from '../../src/types/rutas';
import 'mocha';
import { expect } from 'chai'

const rutaCollection1: rutaCollection = new rutaCollection([]);

describe('Comprobar clase rutaCollection', () => {
    it('Metodos: getColeccionRutas(): ruta[]', () => {
        expect(rutaCollection1.getColeccionRutas().length).to.be.equal(4);
    });
    it('Metodos: addRuta(ruta: ruta)', () => {
        const ruta1: ruta = new ruta('R5', 'Ruta de ciclismo por la costa', "28.6483,-38.6987", "29.684,-29.984" , 12, 6, 'Bicicleta', 7);
        rutaCollection1.addRuta(ruta1);
        expect(rutaCollection1.getColeccionRutas().length).to.be.equal(5);
    });
    it('Metodos: removeRuta(id: string)', () => {
        rutaCollection1.removeRuta('R5');
        expect(rutaCollection1.getColeccionRutas().length).to.be.equal(4);
    });
    
    it('Metodo: getRutasAlfabetico(orden: boolean) : ruta[]', () => {
        expect(rutaCollection1.getRutasAlfabetico(true)[0].getNombre()).to.be.equal('Ruta de senderismo en la montaña');
    });
    
    it('Metodo: getRutasCalificacionMedia(orden: boolean) : ruta[]', () => {
        expect(rutaCollection1.getRutasCalificacionMedia(false)[0].getNombre()).to.be.equal('Ruta de senderismo por el parque nacional');
    });
    it('Metodo: getRutasActividad(actividad: string) : ruta[]', () => {
       expect(rutaCollection1.getRutasActividad("Bicicleta").length).to.be.equal(1);
    });
});
```

A continuación, se explican los diferentes tests que se están realizando:

- `it('Metodos: getColeccionRutas(): ruta[]', () => {...})`: este test comprueba si el método getColeccionRutas() de la clase rutaCollection devuelve un array de rutas. Se espera que el array tenga una longitud de 4, lo que sugiere que ya se han agregado 4 rutas a la colección.
- `it('Metodos: addRuta(ruta: ruta)', () => {...}`): este test verifica si el método addRuta(ruta: ruta) de la clase rutaCollection agrega una nueva ruta a la colección. Se crea una nueva ruta y se agrega a la colección. Se espera que la longitud de la colección de rutas sea igual a 5 después de agregar la ruta recién creada.
- `it('Metodos: removeRuta(id: string)', () => {...}`): este test comprueba si el método removeRuta(id: string) de la clase rutaCollection elimina una ruta de la colección de rutas. Se espera que la longitud de la colección de rutas sea igual a 4 después de eliminar la ruta con el id R5.
- `it('Metodo: getRutasAlfabetico(orden: boolean) : ruta[]', () => {...})`: este test comprueba si el método getRutasAlfabetico(orden: boolean) de la clase rutaCollection devuelve un array de rutas ordenado alfabéticamente. Se espera que la primera ruta en el array sea la que tiene el nombre "Ruta de senderismo en la montaña", si se ordena de forma ascendente.
- `it('Metodo: getRutasCalificacionMedia(orden: boolean) : ruta[]', () => {...})`: este test comprueba si el método getRutasCalificacionMedia(orden: boolean) de la clase rutaCollection devuelve un array de rutas ordenado por su calificación media. Se espera que la primera ruta en el array sea la que tiene el nombre "Ruta de senderismo por el parque nacional", si se ordena de forma descendente.
- `it('Metodo: getRutasActividad(actividad: string) : ruta[]', () => {...})`: este test comprueba si el método getRutasActividad(actividad: string) de la clase rutaCollection devuelve un array de rutas que se corresponden con una determinada actividad. En este caso, se espera que el array devuelto tenga una longitud de 1, ya que solo hay una ruta en la colección que se corresponde con la actividad "Bicicleta".

#### Colección de retos:

El siguiente código define una clase retoCollection que gestiona una colección de retos y los guarda en una base de datos lowdb en formato JSON.

```typescript
import { reto } from "../types/retos";
import { retoSchema } from "../schemas/retoSchema";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { usuarioCollection } from "./usuarioCollection";
import { rutaCollection } from "./rutaCollection";

export class retoCollection {
  private coleccionRetos: reto[];
  private database: lowdb.LowdbSync<retoSchema>;

  constructor(public coleccion: reto[]) {
    this.database = lowdb(new FileSync("src/databases/db_retos.json"));
    if (this.database.has("reto").value()) {
      const dbItems = this.database.get("reto").value();
      dbItems.forEach((item) =>
        this.coleccion.push(
          new reto(
            item.id,
            item.nombre,
            item.rutasReto,
            item.tipoActividad,
            item.usuariosRealizandoReto
          )
        )
      );
    }
    this.coleccionRetos = coleccion;
  }

  public getColeccionRetos(): reto[] {
    return this.coleccionRetos;
  }

  public getRetosUsuario(coleccionUsuario: usuarioCollection, idUsuario: string): reto[] {
    const retosUsuario: reto[] = [];
    this.coleccionRetos.forEach((reto) => {
      if (reto.getUsuariosRealizandoReto().includes(idUsuario)) {
        retosUsuario.push(reto);
      }
    });
    return retosUsuario;
  
  }

  public addReto(reto: reto) {
    this.coleccionRetos.push(reto);
    const dbRuta = {
      id: reto.getId(),
      nombre: reto.getNombre(),
      rutasReto: reto.getRutasReto(),
      tipoActividad: reto.getTipoActividad(),
      usuariosRealizandoReto: reto.getUsuariosRealizandoReto(),
    };
    this.database.get("reto").push(dbRuta).write();
  }

  public removeReto(id: string) {
    const retoAEliminar = this.coleccionRetos.find(
      (reto) => reto.getId() === id
    );
    if (retoAEliminar) {
      this.coleccionRetos = this.coleccionRetos.filter(
        (reto) => reto.getId() !== id
      );
      this.database.get("reto").remove({ id: id }).write();
    }
  }

  public getInfoReto(id: string, coleccionUsuarios: usuarioCollection): void {
    const reto = this.coleccionRetos.find((ruta) => ruta.getId() === id);
    
    if (reto) {
      console.log("Nombre: " + reto.getNombre());
      console.log("Tipo de actividad: " + reto.getTipoActividad());
      console.log("Rutas del reto: ");
      reto.getRutasReto().forEach((ruta) => {
        console.log("Ruta: " + ruta);
      });
      console.log("Usuarios realizando el reto: ");
      reto.getUsuariosRealizandoReto().forEach((idUsuario) => {
        const usuario = coleccionUsuarios.getColeccionUsuarios().find((usuario) => usuario.getId() === idUsuario);
        if (usuario) {
          console.log("Nombre: " + usuario.getNombre());
        }
      });
    }
  
  }

  getRetosOrdenadosNombre(orden: "ascendente" | "descendente"): reto[] {
    if (orden === "ascendente") {
      return this.coleccionRetos.sort((a, b) =>
        a.getNombre() > b.getNombre() ? 1 : -1
      );
    } else {
      return this.coleccionRetos.sort((a, b) =>
        a.getNombre() < b.getNombre() ? 1 : -1
      );
    }
  }

  public getDistanciaTotalReto(coleccionRutas: rutaCollection, id: string): number {
    let distanciaTotal = 0;
    const reto = this.coleccionRetos.find((reto) => reto.getId() === id);
    if (reto) {
      reto.getRutasReto().forEach((ruta) => {
        const rutaReto = coleccionRutas.getColeccionRutas().find((rutaReto) => rutaReto.getId() === ruta);
        if (rutaReto) {
          distanciaTotal += rutaReto.getLongitudRuta();
        }
      });
    }
    return distanciaTotal;
  }
  getRetosOrdenadosDistancia(coleccionRutas: rutaCollection ,orden: "ascendente" | "descendente"): reto[] {
      console.log("Retos ordenados por distancia: ");
      if (orden === "ascendente") {
      return this.coleccionRetos.sort((a, b) => this.getDistanciaTotalReto(coleccionRutas, a.getId()) - 
      this.getDistanciaTotalReto(coleccionRutas, b.getId()));
    } else {
      return this.coleccionRetos.sort((a, b) => this.getDistanciaTotalReto(coleccionRutas, b.getId()) - 
      this.getDistanciaTotalReto(coleccionRutas, a.getId()));
    }
  }

  getRetosOrdenadosCantidadUsuarios(orden: "ascendente" | "descendente"): reto[] {
    if (orden === "ascendente") {
      return this.coleccionRetos.sort((a, b) => a.getUsuariosRealizandoReto().length - 
      b.getUsuariosRealizandoReto().length);
    } else {
      return this.coleccionRetos.sort((a, b) => b.getUsuariosRealizandoReto().length - 
      a.getUsuariosRealizandoReto().length);
    }
  }

  getRetosOrdenadosKmsTotales(coleccionRutas: rutaCollection, orden: "ascendente" | "descendente"): reto[] {
    if (orden === "ascendente") {
      return this.coleccionRetos.sort((a, b) => this.getDistanciaTotalReto(coleccionRutas, a.getId()) - 
      this.getDistanciaTotalReto(coleccionRutas, b.getId()));
    } else {
      return this.coleccionRetos.sort((a, b) => this.getDistanciaTotalReto(coleccionRutas, b.getId()) - 
      this.getDistanciaTotalReto(coleccionRutas, a.getId()));
    }
  } 
}
```

El código anterior implementa la clase `retoCollection`, que representa una colección de retos. La colección es un arreglo de objetos de tipo reto, que se pasan como parámetro en el constructor. La clase tiene varios métodos para acceder, modificar y obtener información de la colección de retos.

A continuación se detallan los métodos de la clase uno a uno:

- `constructor(coleccion: reto[])`: el constructor de la clase toma como parámetro un arreglo de objetos de tipo reto. Crea una instancia de lowdb, una biblioteca que implementa una base de datos JSON en memoria. Si la base de datos ya tiene un objeto llamado "reto", se cargan los datos de la base de datos a la colección de retos. De lo contrario, se crea un objeto vacío en la base de datos y se asigna el arreglo pasado como parámetro a la colección de retos.
- `getColeccionRetos(): reto[]`: este método devuelve la colección de retos.
- `getRetosUsuario(coleccionUsuario`: usuarioCollection, idUsuario: string): reto[]: este método toma como parámetro una instancia de la clase usuarioCollection y un id de usuario. Devuelve una lista de retos que están siendo realizados por el usuario cuyo id coincide con el pasado como parámetro.
- `addReto(reto: reto)`: este método toma como parámetro un objeto de tipo reto. Agrega el objeto a la colección de retos y actualiza la base de datos JSON en memoria con la nueva información.
- `removeReto(id: string)`: este método toma como parámetro el id de un reto. Busca el reto en la colección de retos y lo elimina. También actualiza la base de datos JSON en memoria con la nueva información.
- `getInfoReto(id: string, coleccionUsuarios: usuarioCollection): void`: este método toma como parámetro el id de un reto y una instancia de la clase usuarioCollection. Imprime en la consola la información del reto cuyo id coincide con el pasado como parámetro, incluyendo el nombre del reto, el tipo de actividad, las rutas del reto y los usuarios que están realizando el reto.
- `getRetosOrdenadosNombre(orden: "ascendente" | "descendente"): reto[]`: este método toma como parámetro el orden en que se deben ordenar los retos (ascendente o descendente). Devuelve una lista de retos ordenados alfabéticamente por nombre.
- `getDistanciaTotalReto(coleccionRutas: rutaCollection, id: string): number`: este método toma como parámetro una instancia de la clase rutaCollection y el id de un reto. Devuelve la distancia total de todas las rutas del reto cuyo id coincide con el pasado como parámetro.
- `getRetosOrdenadosDistancia(coleccionRutas: rutaCollection ,orden: "ascendente" | "descendente"): reto[]`: este método toma como parámetro una instancia de la clase rutaCollection y el orden en que se deben ordenar los retos (ascendente o descendente) según la distancia total de sus rutas. Devuelve una lista de retos ordenados por distancia.
- `getRetosOrdenadosCantidadUsuarios`, ordena una lista de retos según la cantidad de usuarios que están realizando cada uno de ellos. Toma como parámetro el orden en que se deben ordenar los retos (ascendente o descendente) y devuelve una lista de retos ordenados por cantidad de usuarios. Para ordenar la lista de retos, se utiliza el método sort(), que toma una función de comparación como parámetro. La función de comparación compara la longitud de los arreglos de usuarios que están realizando cada reto. Si el orden es ascendente, los retos con menos usuarios se ordenarán primero, y si el orden es descendente, los retos con más usuarios se ordenarán primero.
- `getRetosOrdenadosKmsTotales`, ordena una lista de retos según la distancia total de sus rutas. Toma como parámetro una instancia de la clase rutaCollection y el orden en que se deben ordenar los retos (ascendente o descendente). Devuelve una lista de retos ordenados por distancia. Para ordenar la lista de retos, se utiliza el método sort(), que toma una función de comparación como parámetro. La función de comparación compara la distancia total de las rutas de cada reto utilizando el método getDistanciaTotalReto que toma como parámetros una instancia de la clase rutaCollection y el id del reto. Si el orden es ascendente, los retos con menos distancia se ordenarán primero, y si el orden es descendente, los retos con más distancia se ordenarán primero.

#### Tests de la colección de retos:

Estos son tests para probar la funcionalidad de algunos métodos de la clase `retoCollection`:

```typescript
import { reto } from '../../src/types/retos';
import { retoCollection } from '../../src/collections/retoCollection';
import 'mocha';
import { expect } from 'chai'

const retoCollection1: retoCollection = new retoCollection([]);

const reto1: reto = new reto('C3', 'El reto final', ['R2', 'R4'], 'Correr', ['USU1', 'USU3', 'USU4']);


describe('Comprobar clase RetoCollection', () => {
    it('Metodos: getColeccionRetos(): reto []', () => {
        expect(retoCollection1.getColeccionRetos().length).to.be.eql(2);
    });
    it('Metodos: addReto(reto: reto)', () => {
        retoCollection1.addReto(reto1);
        expect(retoCollection1.getColeccionRetos().length).to.be.eql(3);
    });
    it('Metodos: removeReto(id: string)', () => {
        retoCollection1.removeReto('C3');
        expect(retoCollection1.getColeccionRetos().length).to.be.eql(2);
    });
});
```

En el primer test, se verifica que el método getColeccionRetos() devuelve una matriz vacía cuando se instancia retoCollection. Sin embargo, esto no es cierto ya que se está creando un objeto retoCollection con una matriz vacía como argumento, pero la longitud de la matriz será 0 y no 2 como se espera en la prueba.

En el segundo test, se agrega un objeto reto a retoCollection y se verifica que la longitud de la matriz de retos en retoCollection sea 3, lo que implica que se agregó correctamente un nuevo reto.

En el tercer test, se elimina un objeto reto de retoCollection y se verifica que la longitud de la matriz de retos sea 2, lo que implica que se eliminó correctamente el reto.

### Schemas <a name="schemas"></a>
> [Volver al índice](#índice)

> A continuación se detallan los schema que se utilizarán en la aplicación. Estos schemas se utilizan para modelar y estructurar datos relacionados con usuarios, grupos, rutas y retos en una aplicación o sistema.

#### Schema de usuarios:

El schema de usuarios define la estructura de los datos de usuario, que incluyen su id, nombre, actividades que realizan, amigos con los que interaccionan y el historial de rutas que han realizado.

```typescript
export type usuarioSchema = {
  usuario: {
    id: string;
    nombre: string;
    actividades: "Bicicleta" | "Correr";
    amigos: string[]; //usuarios con los que interacciona
    historicoRutas: {
      fecha: Date;
      ruta: string;
    }[]; //ID de la ruta y fecha
  }[];
};
```

#### Schema de grupos:

El schema de grupos define la estructura de los datos de grupo, que incluyen su id, nombre, participantes, historial de rutas que han realizado juntos y el creador del grupo.

```typescript
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
```

#### Schema de rutas:

El schema de rutas define la estructura de los datos de ruta, que incluyen su id, nombre, coordenadas de inicio y fin, longitud de la ruta, desnivel medio, tipo de actividad (bicicleta o correr) y calificación media.

```typescript
export type rutaSchema = {
  ruta: {
    id: string;
    nombre: string;
    coordenadasInicio: string;
    coordenadasFinal: string;
    longitudRuta: number;
    desnivelMedio: number;
    tipoActividad: "Bicicleta" | "Correr";
    calificacionMedia: number;
  }[];
};
```

#### Schema de retos:

El schema de retos define la estructura de los datos de reto, que incluyen su id, nombre, rutas que componen el reto, tipo de actividad (bicicleta o correr) y usuarios que están realizando el reto.

```typescript
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
```

Estos schemas son útiles porque permiten estructurar y organizar los datos de manera coherente y consistente en una base de datos o sistema de almacenamiento, lo que facilita la recuperación y manipulación de los datos en la aplicación o sistema. Además, permiten a los desarrolladores trabajar con una estructura de datos clara y coherente, lo que puede facilitar la creación de nuevas funcionalidades y características en la aplicación.

### Base de datos <a name="database"></a>
> [Volver al índice](#índice)

> A continuación se detallan los archivos de bases de datos que se utilizarán en la aplicación, cuya estructura esta definida por los schemas anteriores, y que se utilizarán para almacenar los datos de usuarios, grupos, rutas y retos.

#### Base de datos JSON de usuarios:

Nuestra base de datos de ususarios consiste en una estructura de datos en formato JSON que describe una lista de usuarios con sus actividades y datos relacionados.

Cada usuario tiene un identificador único (id), un nombre, una actividad principal y una lista de amigos (identificados por su id). Además, cada usuario tiene un historial de rutas que ha recorrido. Cada entrada en el historial de rutas contiene una fecha y un identificador de ruta.

Existen un total de 20 usuarios en nuestra base de datos, si bien mediante las implementaciones que se han hecho en la práctica, se pueden añadir y eliminar elementos en la misma.

```typescript
{
  "usuario": [
    {
      "id": "USU1",
      "nombre": "Paco",
      "actividades": "Correr",
      "amigos": [
        "USU2",
        "USU5"
      ],
      "historicoRutas": [
        {
          "fecha": "2023-02-19T18:25:43.511Z",
          "ruta": "R1"
        },
        {
          "fecha": "2023-03-13T18:25:43.511Z",
          "ruta": "R2"
        },
        {
          "fecha": "2023-01-30T18:25:43.511Z",
          "ruta": "R2"
        },
        {
          "fecha": "2022-01-30T18:25:43.511Z",
          "ruta": "R2"
        },
        {
          "fecha": "2023-02-14T18:25:43.511Z",
          "ruta": "R2"
        },
        {
          "fecha": "2022-06-13T18:25:43.511Z",
          "ruta": "R3"
        },
        {
          "fecha": "2022-07-13T18:25:43.511Z",
          "ruta": "R3"
        },
        {
          "fecha": "2022-07-08T18:25:43.511Z",
          "ruta": "R3"
        },
        {
          "fecha": "2022-05-12T18:25:43.511Z",
          "ruta": "R4"
        },
        {
          "fecha": "2023-02-12T18:25:43.511Z",
          "ruta": "R4"
        },
        {
          "fecha": "2023-03-25T21:22:13.089Z",
          "ruta": "R1"
        }
      ]
    },

    ...

    {
      "id": "USU20",
      "nombre": "Pedro",
      "actividades": "Correr",
      "historicoRutas": [
        {
          "fecha": "2022-05-12",
          "ruta": "R8"
        }
      ]
    }
  ]
}
```

#### Base de datos JSON de grupos:

Nuestra base de datos de grupos consiste en una estructura de datos en formato JSON que describe una lista de grupos con sus datos relacionados.

Cada grupo tiene un identificador único (id), un nombre, un creador (identificado por su id) y una lista de usuarios (identificados por su id). Además, cada grupo tiene un historial de retos que ha realizado. Cada entrada en el historial de retos contiene una fecha y un identificador de reto.

Existen un total de 5 grupos en nuestra base de datos, si bien mediante las implementaciones que se han hecho en la práctica, se pueden añadir y eliminar elementos en la misma.

```typescript
{
  "grupo": [
    {
      "id": "G1",
      "nombre": "Grupo de aventureros",
      "participantes": ["USU1", "USU2"],
      "historicoRutas": [
        {
          "fecha": "2023-03-20T18:25:43.511Z",
          "ruta": "R2",
          "usuarios": ["USU1", "USU2"]
        },
        {
          "fecha": "2023-03-21T18:25:43.511Z",
          "ruta": "R2",
          "usuarios": ["USU1"]
        }
      ],
      "creador": "System"
    },

    ...

    {
      "id": "G5",
      "nombre": "Grupo agrocaminatas",
      "participantes": ["USU1"],
      "historicoRutas": [],
      "creador": "System"
    }
  ]
}

```

#### Base de datos JSON de rutas:

Nuestra base de datos de rutas consiste en una estructura de datos en formato JSON que describe una lista de rutas con sus datos relacionados.

Cada ruta tiene un identificador único (id), un nombre, unas coordenadas de inicio y final, una longitud, un desnivel medio, una lista de usuarios que han finalizado la ruta (identificados por su id), un tipo de actividad y una calificación media.

Existen un total de 10 rutas en nuestra base de datos, si bien mediante las implementaciones que se han hecho en la práctica, se pueden añadir y eliminar elementos en la misma.


```typescript
{
  "ruta": [
    {
      "id": "R1",
      "nombre": "Ruta en bicicleta por la ciudad",
      "coordenadasInicio": "40.4567,-3.5678",
      "coordenadasFinal": "40.5678,-3.6789",
      "longitudRuta": 20,
      "desnivelMedio": 50,
      "usuariosFinalizados": ["USU5", "USU7", "USU2", "USU1"],
      "tipoActividad": "Bicicleta",
      "calificacionMedia": 3.8
    },

    ...

    {
      "id": "R10",
      "nombre": "Ruta de senderismo por el parque nacional",
      "coordenadasInicio": "41.2013,-1.7342",
      "coordenadasFinal": "41.1679,-1.7948",
      "longitudRuta": 15,
      "desnivelMedio": 300,
      "usuariosFinalizados": [],
      "tipoActividad": "Correr",
      "calificacionMedia": 4.5
    }
  ]
}

```

#### Base de datos JSON de retos:

Nuestra base de datos de retos consiste en una estructura de datos en formato JSON que describe una lista de retos con sus datos relacionados.

Cada reto tiene un identificador único (id), un nombre, las rutas que lo componen (identificadas por su id), un tipo de actividad y una lista de usuarios que están realizando el reto (identificados por su id).

Existen un total de 3 retos en nuestra base de datos, si bien mediante las implementaciones que se han hecho en la práctica, se pueden añadir y eliminar elementos en la misma.

```typescript
{
  "reto": [
    {
      "id": "C1",
      "nombre": "El reto de la muerte",
      "rutasReto": ["R1","R2","R3", "R4","R5"],
      "tipoActividad": "Bicicleta",
      "usuariosRealizandoReto": ["USU1"]
    },
    {
      "id": "C2",
      "nombre": "Papita suave",
      "rutasReto": ["R1"],
      "tipoActividad": "Corriendo",
      "usuariosRealizandoReto": ["USU2", "USU1"]
    },
    {
      "id": "C3",
      "nombre": "Reto retito",
      "rutasReto": ["R1","R2"],
      "tipoActividad": "Corriendo",
      "usuariosRealizandoReto": ["USU2"]
    }
  ]
}
```

Todos estos archivos de base de datos componen el conjunto de toda la base de datos de nuestro programa, y se encuentran en la carpeta `database` del proyecto. Esta base de datos será sobre la que trabajaremos en a la hora de manipular los datos de nuestro programa.

### Programa principal <a name="principal"></a>
> [Volver al índice](#índice)

Nuestro prgrama principal consta de dos archivos principales que son `index.ts` y `gestor.ts`. El primero de ellos es el archivo que se ejecuta al iniciar el programa, y el segundo es el archivo que contiene la lógica principal del programa.

#### Archivo index.ts

El archivo `index.ts` es el archivo que se ejecuta al iniciar el programa. En él se importan las librerías necesarias para el funcionamiento del programa, se importa el archivo `gestor.ts`. Este archivo contiene la lógica principal del programa, y es el que se encarga de llamar a los métodos necesarios para que el programa funcione correctamente.

```typescript
import { usuarioCollection } from "./collections/usuarioCollection";
import { grupoCollection } from "./collections/grupoCollection";
import { rutaCollection } from "./collections/rutaCollection";
import { retoCollection } from "./collections/retoCollection";
import { gestor } from "./gestor";

const gestion = new gestor();

gestion.login();

const grupoCollectionPrueba = new grupoCollection([])
const rutaCollectionPrueba = new rutaCollection([])
const retoCollectionPrueba = new retoCollection([])
```

Este programa importa varios módulos de colecciones de datos y un módulo gestor que se utilizan para administrar diferentes tipos de información. Los módulos de colecciones de datos son "usuarioCollection", "grupoCollection", "rutaCollection" y "retoCollection".

Luego, se crea una nueva instancia de "gestor" y se llama al método "login" en esa instancia. Después, se crean nuevas instancias de las colecciones de datos "grupoCollection", "rutaCollection" y "retoCollection", y se les pasa un arreglo vacío como argumento. Esto es utilizado para inicializar una nueva colección de datos vacía.

#### Archivo gestor.ts y clase gestor

El archivo `gestor.ts` es el archivo que contiene la lógica principal del programa. En él se importan las librerías necesarias para el funcionamiento del programa, se importan los archivos de colecciones.

 La clase "gestor" tiene una serie de métodos y propiedades que se utilizan para gestionar diferentes colecciones de datos y realizar diferentes acciones como iniciar sesión, registrar usuarios, mostrar menús de opciones, etc.

Para utilizar este archivo, se importan varias colecciones de datos y tipos de usuarios y grupos desde otros archivos. Además, se importa un módulo llamado "inquirer" que se utiliza para hacer preguntas al usuario en la terminal y obtener sus respuestas.

La clase "gestor" tiene un constructor que inicializa varias colecciones de datos vacías y una propiedad que representa el usuario actual. También tiene varios métodos públicos que permiten obtener y establecer la colección de usuarios, la colección de grupos, la colección de rutas y la colección de retos.

```typescript
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
```

El constructor de la clase "gestor" inicializa una nueva colección de usuarios vacía, una nueva colección de grupos vacía, una nueva colección de rutas vacía y una nueva colección de retos vacía. También inicializa la propiedad "usuarioActual" como una cadena vacía.

Entre los getters de la clase se encuentran los métodos siguientes:

- El método "getUsuarioActual" devuelve la propiedad "usuarioActual" de la clase "gestor".
- El método "setUsuarioActual" establece la propiedad "usuarioActual" de la clase "gestor".
- El método "getColeccionUsuarios" devuelve la colección de usuarios de la clase "gestor".
- El método "getColeccionGrupos" devuelve la colección de grupos de la clase "gestor".
- El método "getColeccionRutas" devuelve la colección de rutas de la clase "gestor".
- El método "getColeccionRetos" devuelve la colección de retos de la clase "gestor".


Descritos los atributos y getters pasamos a explicar los métodos más complejos de la clase "gestor".

#### Método `login`

El método `login` se utiliza para iniciar sesión en el sistema. Pide al usuario que introduzca su ID de usuario y comprueba si existe en la colección de usuarios. Si existe, establece el usuario actual y muestra un mensaje de bienvenida. Si no existe, llama al método "registro" para que el usuario pueda registrarse.

```typescript
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
```

#### Método `registro`

El método `registro` se utiliza para registrar a un nuevo usuario. Pide al usuario que introduzca su ID de usuario, su nombre y su actividad favorita. Comprueba si el ID de usuario ya existe en la colección de usuarios. Si no existe, crea un nuevo usuario y lo añade a la colección de usuarios. Si existe, pide al usuario que introduzca otro ID de usuario.


```typescript	
  // Función para registrar un usuario. Preguntar al usuario los parámetros necesarios del constructor de usuario, comprobar que el id no exista en la lista de usuarios, en caso de que exista, se le pedirá que introduzca otro id.
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
```

#### Método `menuUsuario`

El método `menuUsuario()` es un método que crea un menú de opciones para el usuario y luego realiza diferentes acciones en función de la opción seleccionada utiliza la biblioteca inquirer para crear un menú de opciones que se presenta al usuario en la línea de comandos. El usuario puede elegir entre varias opciones, que se enumeran en la propiedad choices del objeto de opciones.

Cuando el usuario elige una opción, el método then() se ejecuta y utiliza un bloque de instrucciones switch para determinar qué acción tomar en función de la opción seleccionada.

Las opciones disponibles son las siguientes:

- "Datos de la cuenta": muestra información sobre la cuenta del usuario actual, utilizando la instancia coleccionUsuarios y el método getUsuario(). Después de mostrar la información, llama a menuUsuario() nuevamente después de un retraso de 2 segundos.
- "Usuarios del sistema": muestra un submenú que permite al usuario ordenar la lista de usuarios del sistema en función de diferentes criterios.
- "Estadísticas": muestra un submenú que permite al usuario ver varias estadísticas sobre su actividad en el sistema.
- "Amigos": muestra un submenú que permite al usuario gestionar su lista de amigos.
- "Grupos": muestra un submenú que permite al usuario gestionar sus grupos.
- "Rutas": muestra un submenú que permite al usuario gestionar sus rutas.
- "Retos": muestra un submenú que permite al usuario gestionar sus retos.
- "Salir": finaliza el programa.

```typescript	
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
```

#### Método `menuRetos`

El código muestra el método `menuRetos()` que es un método que permite al usuario ver información sobre los retos, así como ordenarlos de diferentes maneras y que utiliza la biblioteca inquirer para presentar un menú de opciones al usuario. Las opciones disponibles son:

- "Ver mis retos": muestra los retos del usuario actual utilizando la instancia coleccionRetos y el método getRetosUsuario(). Luego, llama a menuRetos() nuevamente después de un retraso de 2 segundos.
- "Ver todos los retos": muestra un submenú que permite al usuario ver información sobre todos los retos disponibles en el sistema.
- "Ver retos ordenados por nombre": muestra un submenú que permite al usuario ordenar la lista de retos por orden alfabético ascendente o descendente según el nombre del reto.
- "Ver retos ordenados por distancia": muestra un submenú que permite al usuario ordenar la lista de retos por orden ascendente o descendente según la cantidad de kilómetros que deben realizarse para completar el reto.
- "Ver retos ordenados por cantidad de usuarios": muestra un submenú que permite al usuario ordenar la lista de retos por orden ascendente o descendente según la cantidad de usuarios que están realizando el reto.
- "Ver retos ordenados por kms": muestra un submenú que permite al usuario ordenar la lista de retos por orden ascendente o descendente según la cantidad de kilómetros que se han realizado para completar el reto.
- "Volver": vuelve al menú de usuario principal.

```typescript
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
```

#### Método `menuOrdenacionRetosCantidadUsuarios`

El método `menuOrdenacionRetosCantidadUsuarios` implementa un menú para ordenar los retos según la cantidad de usuarios que los están realizando. Se utiliza la librería inquirer para presentar las opciones al usuario. Las opciones son "Ver retos ordenados por cantidad de usuarios ascendente", "Ver retos ordenados por cantidad de usuarios descendente" y "Volver".

Cuando el usuario selecciona una de las opciones, se realiza un switch en función de la respuesta del usuario. Si el usuario selecciona "Ver retos ordenados por cantidad de usuarios ascendente" o "Ver retos ordenados por cantidad de usuarios descendente", se llama al método getRetosOrdenadosCantidadUsuarios() de la colección de retos, pasando como parámetro "ascendente" o "descendente" según la opción elegida por el usuario.

Luego se recorren los retos devueltos por el método y se muestra por consola el ID, nombre y cantidad de usuarios realizando el reto.

Finalmente, se llama al método setTimeout() para esperar 2 segundos y luego volver a mostrar el menú de ordenación por cantidad de usuarios. Si el usuario selecciona "Volver", se llama al método menuRetos() para volver al menú principal de retos.

```typescript
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
```

#### Método `menuOrdenacionRetosDistancia`

El método `menuOrdenacionRetosDistancia` muestra un menú con tres opciones utilizando la librería inquirer. Las opciones son "Ver retos ordenados por distancia ascendente", "Ver retos ordenados por distancia descendente" y "Volver".

Cuando el usuario elige una opción, la función then se activa y ejecuta un switch que realiza una acción dependiendo de la opción elegida. Si el usuario elige "Ver retos ordenados por distancia ascendente" o "Ver retos ordenados por distancia descendente", se llama al método getRetosOrdenadosDistancia de la colección de retos y se le pasa como argumento la colección de rutas y la dirección de ordenación ("ascendente" o "descendente"). Este método devuelve una lista de retos ordenados por distancia en la dirección especificada y, para cada uno de ellos, se muestra en la consola su identificador y su nombre.

Después de mostrar los retos, se utiliza setTimeout para esperar 2 segundos antes de volver a mostrar el menú de ordenación de retos por distancia. Si el usuario elige "Volver", se llama al método menuRetos, que muestra el menú de retos.

```typescript
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
```

#### Método `menuOrdenacionRetosNombre`

El método `menuOrdenacionRetosNombre` es otro método de la clase que representa el menú de ordenación de los retos según el nombre del reto. Al igual que los otros métodos de ordenación, este método utiliza la librería Inquirer para mostrar un menú de opciones y recibe una respuesta del usuario mediante una función de devolución de llamada.

En la función de devolución de llamada, se utiliza un switch-case para determinar qué acción se debe tomar en función de la opción elegida por el usuario. Si el usuario elige "Ver retos ordenados por nombre ascendente", se llama al método getRetosOrdenadosNombre de la instancia de la clase ColeccionRetos para obtener una lista de los retos ordenados alfabéticamente de forma ascendente y, a continuación, se muestra el resultado por consola mediante el método forEach. De manera similar, si el usuario elige "Ver retos ordenados por nombre descendente", se llama al mismo método de la clase retoCollection, pero con el parámetro "descendente". Si el usuario elige "Volver", se llama al método menuRetos para volver al menú principal de la gestión de retos.

Al final de cada caso, se llama al método setTimeout para volver a mostrar el menú de ordenación después de un intervalo de 2 segundos (2000 ms). Esto permite que el usuario tenga tiempo para revisar los resultados antes de volver a elegir otra opción de ordenación.

```typescript
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
```

#### Método `menuOrdenacionRetosPorKms`

El método llamado `menuOrdenacionRetosPorKms`, utiliza la librería inquirer para mostrar un menú con opciones para ordenar una colección de retos. Las opciones son: "Ver retos ordenados por kms ascendente", "Ver retos ordenados por kms descendente" y "Volver".

Cuando el usuario selecciona una opción, el método utiliza un switch para determinar qué acción tomar. Si la opción seleccionada es "Ver retos ordenados por kms ascendente" o "Ver retos ordenados por kms descendente", el método utiliza la colección de retos y la colección de rutas para obtener los retos ordenados por la suma total de kilómetros de todas las rutas de cada reto. Luego, imprime los retos y la distancia total de cada uno. Finalmente, establece un tiempo de espera de 2 segundos y vuelve a mostrar el menú.

Si el usuario selecciona "Volver", el método llama al método menuRetos() para volver al menú principal de retos.

```typescript
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
```

#### Método `menuInfoRetos`

El método llamado `menuInfoRetos` muestra un menú para que el usuario seleccione un reto y obtener información sobre él.

Primero se crea un array de objetos llamado retos que contiene solo los IDs de los retos de la colección, esto se hace mediante el uso del método forEach de la colección de retos, el cual itera sobre cada objeto reto y agrega el ID a un nuevo objeto que se agrega al array retos. También se crea un array llamado retosid que es similar a retos, pero este solo contiene los IDs de los retos. Este último array se utiliza como opciones en el menú que se muestra mediante la librería inquirer.

Cuando el usuario selecciona una opción del menú, la función then se ejecuta. Si la opción seleccionada es "Volver", se llama al método menuRutas. Si se selecciona otro reto, se llama al método getInfoReto de la colección de retos, el cual recibe como parámetros el ID del reto seleccionado y la colección de usuarios. Este método muestra información sobre el reto seleccionado y los usuarios que lo han completado.

```typescript
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
```

#### Método `menuGrupos`

El método llamado `menuGrupos`, que muestra un menú con varias opciones relacionadas con los grupos, y realiza una acción según la opción seleccionada por el usuario. El menú se crea utilizando la biblioteca inquirer, que permite crear fácilmente una interfaz de línea de comandos interactiva.

Las opciones del menú son:

- "Ver mis grupos": muestra los grupos en los que el usuario actual es miembro.
- "Ver todos los grupos": muestra una lista de todos los grupos disponibles, ordenados por alguna característica.
- "Crear un grupo": permite al usuario crear un nuevo grupo y convertirse en su creador.
- "Unirse a un grupo": permite al usuario unirse a un grupo existente.
- "Borrar un grupo(Debes ser el creador del mismo)": permite al usuario eliminar un grupo que haya creado.
- "Volver": lleva al usuario al menú principal de usuario.

Este método llama a métodos adicionales según la opción seleccionada por el usuario. Por ejemplo, si el usuario selecciona "Ver mis grupos", se llama al método getGruposUsuario de la clase coleccionGrupos para mostrar los grupos en los que el usuario actual es miembro.

Si el usuario selecciona la opción "Ver todos los grupos", se llama al método menuOrdenacionGrupos que muestra una lista de todos los grupos disponibles ordenados por alguna característica. Si el usuario selecciona la opción "Crear un grupo", se llama al método menuCrearGrupo que permite al usuario crear un nuevo grupo y convertirse en su creador. Y así sucesivamente para las demás opciones del menú.

```typescript
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
```

#### Método `menuEstadisticas`

El código del método `menuEstadisticas` define un menú de opciones utilizando la biblioteca inquirer. El menú tiene cuatro opciones: "Semana", "Mes", "Año" y "Volver".

Cuando se selecciona una opción, se utiliza un switch para ejecutar diferentes bloques de código dependiendo de la opción seleccionada. Para las opciones "Semana", "Mes" y "Año", se llama al método getEstadisticasEntrenamiento del objeto coleccionUsuarios con tres argumentos: coleccionRutas, usuarioActual y una cadena de texto que indica la escala de tiempo ("semana", "mes" o "año"). El método devuelve un objeto con estadísticas de entrenamiento para el usuario actual en la escala de tiempo especificada. Estas estadísticas se imprimen en la consola utilizando console.log.

```typescript
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
```

#### Método `menuAmigos`

El método `menuAmigos` implementa el menú de opciones para gestionar amigos en la aplicación. Primero, se muestra un menú con cuatro opciones: Ver amigos, Añadir amigo, Eliminar amigo y Volver.

- Si el usuario elige "Añadir amigo", se le pide que introduzca el ID del usuario que desea agregar como amigo. Una vez que el usuario ha proporcionado el ID, se llama al método addAmigo de la colección de usuarios con el ID del usuario actual y el ID del amigo que se desea agregar. La respuesta del método se muestra en la consola y después de 2 segundos, se llama al menú de amigos nuevamente.
- Si el usuario elige "Eliminar amigo", se le pide que introduzca el ID del usuario que desea eliminar como amigo. Una vez que el usuario ha proporcionado el ID, se llama al método removeAmigo de la colección de usuarios con el ID del usuario actual y el ID del amigo que se desea eliminar. La respuesta del método se muestra en la consola y después de 2 segundos, se llama al menú de amigos nuevamente.
- Si el usuario elige "Ver amigos", se muestra en la consola la lista de amigos del usuario actual y después de 2 segundos, se llama al menú de amigos nuevamente.
- Si el usuario elige "Volver", se llama al menú de usuario.

```typescript
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
```

#### Método `menuRutas`

Este método es una función que muestra un menú con varias opciones y utiliza la librería "inquirer" para interactuar con el usuario mediante la línea de comandos.

El menú muestra cuatro opciones diferentes: "Ver todas las rutas", "Ver Rutas Ordenadas", "Añadir ruta realizada" y "Volver".

Cuando el usuario elige una opción, se usa un switch statement para ejecutar una función correspondiente a la opción elegida.

Si el usuario elige "Ver todas las rutas", se llama a la función "menuInfoRutas()". Si elige "Ver Rutas Ordenadas", se llama a la función "menuOrdenacionRutas()". Si elige "Añadir ruta realizada", se muestra un prompt para que el usuario ingrese el ID de la ruta que ha realizado y luego se llama a la función "addRutaRealizada()" de la instancia "coleccionRutas" y se le pasan tres parámetros: "coleccionUsuarios", "respuesta.id" y "usuarioActual".

Si el usuario elige "Volver", se llama a la función "menuUsuario()".

```typescript
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
```

#### Método `menuInfoRutas`

Este método se encarga de mostrar un menú de información de rutas y permitir al usuario elegir una de ellas para obtener información detallada. Primero, se crea un arreglo rutas que contiene objetos con el id de cada ruta en la colección de rutas, y otro arreglo rutasid que contiene los id de todas las rutas y una opción adicional "Volver".

Luego se utiliza la librería Inquirer para mostrar un menú de opciones al usuario, utilizando el arreglo rutasid como opciones, y esperar la respuesta del usuario a través de la promesa devuelta por inquirer.prompt().

Una vez que se recibe la respuesta del usuario, se utiliza un switch para determinar qué acción tomar. Si el usuario elige "Volver", se llama al método menuRutas() para volver al menú principal de rutas.

Si el usuario elige un id de ruta, se llama al método getInfoRuta() de la instancia coleccionRutas para obtener información detallada sobre la ruta seleccionada, pasando también la instancia coleccionUsuarios como argumento. Luego se llama al método menuInfoRutas() nuevamente, para volver al menú de información de rutas.

```typescript
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
```

#### Método `menuOrdenacionRutas`

El método `menuOrdenacionRutas` muestra un menú para que el usuario elija cómo quiere ordenar las rutas disponibles.

La función inquirer.prompt se utiliza para mostrar un menú de opciones al usuario. Las opciones son proporcionadas en forma de un arreglo de objetos, donde cada objeto representa una opción en el menú. En este caso, las opciones se definen como objetos con type (tipo de la pregunta), name (nombre de la opción), message (mensaje que se muestra al usuario) y choices (opciones para elegir).

El método then se utiliza para manejar la respuesta del usuario al menú de opciones. Dependiendo de la opción elegida por el usuario, se llama a diferentes métodos del objeto this (que se refiere a la instancia de la clase actual) para mostrar las rutas ordenadas según el criterio seleccionado.

Los casos para cada opción son los siguientes:

- "Alfabéticamente por nombre de la ruta": llama al método menuAlfabeticoRutas para mostrar las rutas ordenadas alfabéticamente por nombre.
- "Cantidad de usuarios que realizan las rutas": llama al método menuCantidadUsuariosRutas para mostrar las rutas ordenadas por la cantidad de usuarios que las realizan.
- "Por longitud de la ruta": llama al método menuLongitudRutas para mostrar las rutas ordenadas por longitud.
- "Por la calificación media de la ruta": llama al método menuCalificacionRutas para mostrar las rutas ordenadas por la calificación media.
- "Ordenar por actividad": llama al método menuActividadRutas para mostrar las rutas ordenadas por actividad.
- "Volver": llama al método menuRutas para volver al menú anterior.

```typescript
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
```

#### Método `menuCantidadUsuariosRutas`

El método `menuCantidadUsuariosRutas` muestra un menú que permite al usuario elegir si quiere ordenar la lista de rutas por la cantidad de usuarios que las han realizado de manera ascendente o descendente.

En la opción "Ascendente", se llama al método getRutasPorCantidadUsuarios de la instancia coleccionRutas con el parámetro booleano true, lo que significa que se ordenarán las rutas en orden ascendente. Luego, se recorre cada una de las rutas obtenidas y se muestra en la consola su identificador, nombre y cantidad de usuarios que las han realizado. Finalmente, se llama al método menuCantidadUsuariosRutas de manera recursiva después de un retraso de 2 segundos usando setTimeout.

En la opción "Descendente", se realiza un proceso similar, pero con el parámetro booleano false, lo que indica que se ordenarán las rutas en orden descendente.

En la opción "Volver", se llama al método menuOrdenacionRutas, que muestra el menú de ordenación de rutas original.

```typescript
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
```

#### Método `menulongitudRutas`

El método `menuLongitudRutas` es un menú de opciones para ordenar las rutas según su longitud y permite al usuario elegir entre ordenarlas en orden ascendente o descendente.

Primero, se utiliza la librería Inquirer para mostrar el menú y se establecen las opciones disponibles para el usuario: ordenar por longitud en orden ascendente, ordenar por longitud en orden descendente o volver al menú anterior.

Luego, se usa una estructura de control switch para ejecutar diferentes acciones según la opción seleccionada por el usuario. Si se selecciona "Ascendente", se llama al método getRutasPorLongitud() de la colección de rutas y se pasa true como argumento para indicar que se deben ordenar en orden ascendente. El método devuelve un arreglo de rutas ordenadas por longitud y luego se recorre ese arreglo con un ciclo forEach para imprimir en la consola la información de cada ruta: su ID, nombre y longitud.

El código utiliza la misma lógica para la opción "Descendente", pero se llama al método getRutasPorLongitud() con un argumento de false para ordenar las rutas en orden descendente.

```typescript
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
```

#### Método `menuActividadRutas`

El método `menuActividadRutas()` utiliza la librería inquirer para mostrar un menú en la consola que le pregunta al usuario que elija entre tres opciones: "Correr", "Bicicleta" o "Volver".

En función de la opción elegida por el usuario, se ejecuta un bloque de código diferente:

Si el usuario elige "Correr", se llama al método getRutasActividad("Correr") de la instancia de ColeccionRutas y se itera sobre el resultado para mostrar en la consola la id, el nombre y el tipo de actividad de cada ruta devuelta. Después de mostrar la información, el método llama a sí mismo después de 2 segundos.

Si el usuario elige "Bicicleta", se llama al método getRutasActividad("Bicicleta") de la instancia de ColeccionRutas y se itera sobre el resultado para mostrar en la consola la id, el nombre y el tipo de actividad de cada ruta devuelta. Después de mostrar la información, el método llama a sí mismo después de 2 segundos.

Si el usuario elige "Volver", se llama al método menuOrdenacionRutas().

```typescript
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
```

#### Método `menuCalificacionRutas`

El método `menuCalificacionRutas` implementa un menú para ordenar la colección de rutas por calificación media. Al igual que en los otros menús, se utiliza la biblioteca Inquirer para preguntar al usuario qué opción desea elegir. Las opciones disponibles son "Ascendente", "Descendente" y "Volver".

Si el usuario elige "Ascendente" o "Descendente", la colección de rutas se ordena utilizando el método getRutasCalificacionMedia, que devuelve una lista de rutas ordenada según su calificación media. Luego, se recorre la lista resultante y se imprimen en pantalla el id de la ruta, su nombre y su calificación media.

Si el usuario elige "Volver", se muestra el menú de ordenación de rutas. 

```typescript
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
```

#### Método `menuAlfabeticoRutas`

El método `menuAlfabeticoRutas`, que utiliza la librería inquirer para mostrar un menú de opciones al usuario. Las opciones son "Ascendente", "Descendente" y "Volver".

La opción "Ascendente" permite mostrar las rutas ordenadas alfabéticamente de manera ascendente (de la A a la Z), utilizando el método getRutasAlfabetico(true) de la variable coleccionRutas. Este método devuelve un array de objetos de tipo Ruta ordenados alfabéticamente de manera ascendente. Luego se utiliza el método forEach para recorrer el array y mostrar la información de cada ruta (su ID y su nombre) en la consola.

La opción "Descendente" funciona de manera similar, pero utiliza el método getRutasAlfabetico(false) para obtener las rutas ordenadas alfabéticamente de manera descendente (de la Z a la A).

La opción "Volver" permite volver al menú de ordenación de rutas anterior, utilizando la función menuOrdenacionRutas.

```typescript
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
```

#### Método `menuOrdenacionUsuarios`

El método `menuOrdenacionUsuarios` muestra un menú de opciones utilizando la librería inquirer. El menú muestra tres opciones: ordenar alfabéticamente por nombre del usuario, ordenar por cantidad de kilómetros realizados y volver.

El método utiliza el método then() para manejar la respuesta del usuario y ejecutar la opción correspondiente. Si el usuario selecciona la opción "Alfabéticamente por nombre del usuario", se ejecuta el método menuAlfabeticoUsuarios(). Si selecciona "Por cantidad de KM realizados", se ejecuta el método menuKmUsuarios(). Si selecciona "Volver", se ejecuta el método menuUsuario(), que muestra el menú principal de usuarios.

```typescript
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
```

#### Método `menuAlfabeticoUsuarios`

El método `menuAlfabeticoUsuarios` muestra un menú de opciones para ordenar los usuarios de una colección en orden alfabético ascendente o descendente por su nombre y, al igual que otros métodos del programa, utiliza la biblioteca Inquirer para crear una interfaz de línea de comandos que permita al usuario elegir las opciones.

En el cuerpo del método, se llama al método prompt de Inquirer y se pasa un objeto con las opciones del menú. El objeto tiene un atributo type que especifica el tipo de entrada que se espera del usuario (en este caso, una lista) y un atributo name que es el nombre de la respuesta que se recibirá en el manejador de promesa. El atributo message contiene el texto de la pregunta que se le hará al usuario, y el atributo choices es una matriz de opciones que el usuario puede elegir.

El método prompt devuelve una promesa que se resuelve con la elección del usuario. Cuando se resuelve la promesa, se ejecuta una función de devolución de llamada (en este caso, un manejador de promesa) que utiliza una instrucción switch para determinar qué acción tomar en función de la elección del usuario.

- Si el usuario elige "Ascendente", se llama al método getUsuariosAlfabetico de la colección de usuarios y se pasa true como argumento para ordenar los usuarios por nombre en orden ascendente. Luego, se utiliza un bucle forEach para imprimir cada usuario en la consola. 
- Si el usuario elige "Descendente", se llama al método getUsuariosAlfabetico de la colección de usuarios y se pasa false como argumento para ordenar los usuarios por nombre en orden descendente. Luego, se utiliza un bucle forEach para imprimir cada usuario en la consola. 
- Si el usuario elige "Volver", simplemente se llama al método menuOrdenacionUsuarios para volver al menú de ordenación de usuarios.

```typescript
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
```

#### Método `menuKmUsuarios`

El método `menuKmUsuarios` utiliza la biblioteca Inquirer para mostrar un menú de opciones al usuario. Las opciones disponibles son distintas maneras de ordenar y mostrar los kilómetros recorridos por los usuarios de un sistema de entrenamiento.

Cuando el usuario selecciona una opción, el código usa un switch para ejecutar una serie de acciones correspondientes a esa opción. En cada caso, se llama a un método de la clase colección de usuarios para ordenar los usuarios según la opción seleccionada y se muestra en la consola la información correspondiente a cada usuario, incluyendo su ID, nombre y la cantidad de kilómetros recorridos en el período de tiempo correspondiente.

La opción "Volver" simplemente llama a la función menuOrdenacionUsuarios para volver a mostrar el menú anterior.

```typescript
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
```

#### Método `menuOrdenacionGrupos`

El método `menuOrdenacionGrupos` utiliza la biblioteca inquirer para mostrar un menú de opciones al usuario. El usuario puede elegir entre cuatro opciones diferentes:

1. Ordenar alfabéticamente por nombre del grupo
2. Ordenar por cantidad de kilómetros recorridos en conjunto
3. Ordenar por cantidad de participantes en el grupo
4. Volver al menú principal

El método utiliza una declaración switch para ejecutar el código correspondiente a la opción elegida por el usuario. Si el usuario elige la opción "Alfabéticamente por nombre del grupo", se ejecuta el método menuAlfabeticoGrupos(), que ordena los grupos alfabéticamente. Si el usuario elige la opción "Por cantidad de KM realizados conjuntamente", se ejecuta el método menuKmGrupos(), que ordena los grupos según la cantidad de kilómetros recorridos en conjunto. Si el usuario elige la opción "Cantidad de participantes", se ejecuta el método menuParticipantesGrupos(), que ordena los grupos según la cantidad de participantes en cada uno. Si el usuario elige la opción "Volver", se ejecuta el método menuUsuario(), que lo lleva de vuelta al menú principal.

```typescript
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
```

#### Método `menuKmGrupos`

El método `menuKmGrupos` utiliza la biblioteca inquirer para mostrar un menú de opciones al usuario en la consola. El menú permite al usuario elegir cómo desea ordenar los grupos de una colección, según el kilometraje recorrido por semana, mes o año, ya sea de manera ascendente o descendente.

Cuando el usuario elige una opción del menú, la función realiza una llamada a un método de la colección de grupos (this.coleccionGrupos) para ordenar los grupos según la opción elegida, y luego usa un método forEach para imprimir el ID, nombre y kilometraje de cada grupo en la consola.

La función menuKmGrupos proporciona una forma interactiva de visualizar estadísticas de entrenamiento de grupos en una colección según su kilometraje recorrido, permitiendo al usuario ordenarlos de diferentes maneras.

```typescript
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
```

#### Método `menuParticipantesGrupos`

El método `menuParticipantesGrupos` muestra un menú con tres opciones para ordenar una colección de grupos por número de participantes. La función utiliza la biblioteca Inquirer para crear el menú y recibe como entrada la colección de grupos.

En la primera parte, se usa inquirer.prompt() para crear el menú y se especifica que el usuario debe elegir una opción de una lista de tres opciones: "Más participantes", "Menos participantes" y "Volver". Cuando el usuario selecciona una opción, la función then() se ejecuta con la respuesta del usuario.

En la siguiente parte, se utiliza una estructura de control switch para verificar la respuesta del usuario y ejecutar el código correspondiente. Si el usuario selecciona "Más participantes", se ordena la colección de grupos por número de participantes en orden ascendente utilizando el método ordenarGruposPorParticipantes() y se muestra cada grupo en la consola mediante el método forEach(). 

Si el usuario selecciona "Menos participantes", se ordena la colección de grupos por número de participantes en orden descendente y se muestra cada grupo en la consola de manera similar a la opción anterior.

Si el usuario selecciona "Volver", se llama a otra función menuOrdenacionGrupos() para mostrar otro menú con opciones de ordenación de grupos.

```typescript
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
```

#### Método `menuAlfabeticoGrupos`

Este código define una función llamada menuAlfabeticoGrupos() que utiliza la biblioteca inquirer para presentar un menú con tres opciones: "A-Z", "Z-A" y "Volver".

Después de que el usuario elige una opción, el código utiliza un bloque switch para realizar una acción dependiendo de la opción seleccionada.

- Si se selecciona "A-Z", se llama al método ordenarGruposPorNombre de la colección de grupos (this.coleccionGrupos) con el argumento "ascendente", lo que ordena los grupos alfabéticamente de A a Z y se muestra en la consola el identificador y el nombre de cada grupo utilizando el método getId() y getNombre() respectivamente.
- Si se selecciona "Z-A", se llama al mismo método pero con el argumento "descendente", lo que ordena los grupos alfabéticamente de Z a A y se muestra en la consola el identificador y el nombre de cada grupo.

En ambos casos, después de mostrar la lista ordenada, se utiliza setTimeout para esperar 2 segundos antes de volver a llamar a menuAlfabeticoGrupos().

Si se selecciona "Volver", se llama a menuOrdenacionGrupos(), lo que lleva al usuario de regreso al menú principal de ordenación de grupos.

```typescript
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

```

#### Método `menuCrearGrupo`

La función `menuCrearGrupo` es pusa librería inquirer para recopilar información del usuario a través de la consola. Esta función se encarga de crear un nuevo grupo con un nombre introducido por el usuario.

En la primera línea de la función, se llama a la función inquirer.prompt() para hacer una pregunta al usuario. La pregunta es "Introduce el nombre del grupo", y el usuario debe responder mediante la entrada de texto.

Cuando el usuario introduce el nombre del grupo, la función then() se activa con la respuesta del usuario. Dentro de la función then(), se crea un nuevo objeto grupo con el nombre del grupo y otros argumentos. El objeto grupo se añade a una colección de grupos mediante la función addGrupo() del objeto coleccionGrupos.

Después de que se añade el nuevo grupo a la colección de grupos, la función setTimeout() espera 2 segundos antes de llamar al método menuGrupos(), que muestra de nuevo el menú principal de grupos al usuario.

```typescript
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
```

#### Método `menuBorrarGrupo`

La función `menuBorrarGrupo` muestra un mensaje que pide al usuario que introduzca el id de un grupo para borrarlo. Luego, utiliza el método prompt de la librería inquirer para capturar la entrada del usuario. Una vez que se ha recibido la entrada, se comprueba si el usuario actual es el creador del grupo correspondiente al id proporcionado. Si lo es, el grupo se elimina de la colección de grupos y se muestra un mensaje de confirmación. Si el usuario actual no es el creador del grupo, se muestra un mensaje de error. En ambos casos, la función espera 2 segundos antes de volver al menú de grupos mediante la función setTimeout.

```typescript
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
```

#### Método `menuUnirseAlGrupo`

La función menuUnirseAlGrupo pide al usuario que introduzca el id de un grupo al que desea unirse. Luego, utiliza el método prompt de la librería inquirer para capturar la entrada del usuario. Una vez que se ha recibido la entrada, se comprueba si el grupo correspondiente al id proporcionado existe en la colección de grupos. Si existe, se añade el usuario actual como participante del grupo mediante el método addParticipante de la colección de grupos. Se muestra un mensaje de confirmación y la función espera 2 segundos antes de volver al menú de grupos mediante la función setTimeout. Si el grupo no existe, se muestra un mensaje de error y la función espera 2 segundos antes de volver al menú de grupos mediante la función setTimeout.

```typescript
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
```

#### Método `createUser`


La función createUser crea un nuevo objeto usuario mediante el constructor de la clase usuario y lo añade a la colección de usuarios mediante el método addUsuario de la colección de usuarios. El constructor de la clase usuario espera cuatro argumentos.

El constructor crea un objeto con las propiedades especificadas y devuelve una instancia de la clase usuario. La función createUser recibe los primeros tres argumentos y crea un nuevo objeto usuario con los mismos. Luego, añade el nuevo usuario a la colección de usuarios mediante el método addUsuario de la colección de usuarios.

```typescript
  public createUser(
    id: string,
    nombre: string,
    actividades: "Bicicleta" | "Correr"
  ) {
    const nuevousuario = new usuario(id, nombre, actividades, [], []);
    this.coleccionUsuarios.addUsuario(nuevousuario);
  }
```

### Conclusiones <a name="conclusiones"></a>
> [Volver al índice](#índice)

La práctica implica diseñar un modelo de datos orientado a objetos para un sistema de información que almacena registros de actividades deportivas. La práctica se realiza en equipo y se utiliza GitHub Classroom para alojar todo el código desarrollado. Además, se deben utilizar módulos como Inquirer.js y Lowdb, se requiere documentación mediante el uso de TypeDoc y se debe adoptar una metodología de desarrollo dirigido por pruebas/comportamiento.

En cuanto a los requisitos del sistema, se especifican los datos que deben ser almacenados para las rutas, usuarios y grupos, así como las estadísticas de entrenamiento. Se deben respetar los principios SOLID de diseño orientado a objetos y se deben utilizar herramientas como Coveralls, Github Actions y Sonar Cloud para el control de calidad del código.

En general, es un buen desafío de programación, ya que involucra una variedad de habilidades y herramientas importantes para el desarrollo de software. El diseño orientado a objetos es esencial en la programación moderna y la práctica es una buena oportunidad para aplicar los principios SOLID en un proyecto real. Además, el uso de herramientas como Inquirer.js y Lowdb puede proporcionar una experiencia práctica en la manipulación de datos y el uso de módulos externos en un proyecto. La inclusión de pruebas unitarias y la adopción de una metodología de desarrollo dirigido por pruebas/comportamiento es otro aspecto importante del desarrollo de software que puede ayudar a garantizar que el código sea robusto y cumpla con los requisitos. 

Concluimos que la realización de esta práctica es una experiencia valiosa para el desarrollo de habilidades y herramientas útiles para el desarrollo de software.

### Referencias <a name="referencias"></a>
> [Volver al índice](#índice)

1. [Entrada de texto](https://www.npmjs.com/package/prompt-sync)
2. [Formato de escape ANSI](https://es.wikipedia.org/wiki/C%C3%B3digo_escape_ANSI#:~:text=Los%20c%C3%B3digos%20de%20escape%20ANSI,color%20o%20moviendo%20el%20cursor.)
3. [Documentación oficial de Node.js](https://nodejs.org/es/docs/)
4. [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
5. [Documentación de Inquirer.js](https://github.com/SBoudrias/Inquirer.js#documentation)
6. [Documentación de Lowdb](https://github.com/typicode/lowdb#usage)
7. [Documentación de TypeDoc](https://typedoc.org/)
8. [Libro "Essential TypeScript: From Beginner to Pro" de Adam FreemanPruebas unitarias con Jest](https://jestjs.io/docs/getting-started)
9. [Coveralls](https://coveralls.io/)
10. [Integración continua con GitHub Actions](https://docs.github.com/es/actions)
11. [Calidad del código con SonarCloud](https://sonarcloud.io/documentation)
