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
    //private rutasFavoritas: string []
    //private retosActivos: string []
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

Por último, se exporta la clase "usuario" para que pueda ser utilizada en otros archivos de JavaScript mediante la sintaxis de "require" o "import".


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

Esta clase `X` cumple los principios SOLID con la siguiente justificación:

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

```typescript
export class grupo {

    id: string;
    nombre: string;
    participantes: string[];
    historicoRutas: { fecha: Date; ruta: string, usuarios: string [] }[];
    // Atributo de usuario creador
    constructor(
      id: string,
      nombre: string,
      participantes: string[],
      historicoRutas: { fecha: Date; ruta: string, usuarios: string [] }[],
      
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

    getHistoricoRutas(): { fecha: Date; ruta: string, usuarios: string [] }[] {
        return this.historicoRutas;
    }
  }

  module.exports = {
    grupo
  }
```

La clase grupo también tiene cuatro métodos get que devuelven los valores de los atributos id, nombre, participantes y historicoRutas, respectivamente. Además, se exporta la clase grupo como un módulo, lo que permite que otros archivos de código fuente puedan importar y utilizar la clase grupo.

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

Esta clase `X` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase grupo tiene una única responsabilidad, que es representar la entidad de un grupo y proporcionar métodos para obtener su información.

- **Open/Closed Principle (OCP)**: La clase grupo está abierta para su extensión ya que se pueden agregar nuevos métodos, pero está cerrada para su modificación ya que la implementación actual no se modifica.

- **Liskov Substitution Principle (LSP)**: La clase grupo cumple con este principio ya que se comporta como se espera de una clase de grupo, y sus subtipos no alteran el comportamiento de los métodos.

- **Interface Segregation Principle (ISP)**: La clase grupo no tiene interfaz, por lo que no se aplica este principio.

- **Dependency Inversion Principle (DIP)**: La clase grupo depende solo de tipos abstractos y no de implementaciones concretas, lo que permite que se puedan intercambiar diferentes implementaciones sin afectar su funcionalidad.


> El código define una clase llamada "ruta" que representa una ruta en un sistema de seguimiento de actividades físicas. 

#### Clase ruta:  // REVISADO HASTA AQUÍ

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

A continuación tenemos los tests que se han diseñado para esta clase. En la primera línea se importa la clase ruta desde su ruta relativa. Luego se importan los módulos mocha y chai, que son librerías para facilitar la escritura de pruebas en JavaScript.

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

it('Metodos: getUsuariosRealizandoReto(): string []', () => { expect(reto1.getUsuariosRealizandoReto()).to.be.eql(['USU1']); });: Este test comprueba que el método "getUsuariosRealizandoReto()" de "reto1" devuelve un arreglo con el valor ['USU1'].

Al ejecutar estos tests, si todos pasan correctamente, se puede afirmar que los métodos de la clase "reto" funcionan correctamente y que la implementación es válida para los propósitos deseados. En caso contrario, si alguno de los tests falla, se debe revisar la implementación del código y corregir los errores encontrados para garantizar el correcto funcionamiento de la clase.

#### Cumplimiento de los principios SOLID en la clase reto:

Esta clase `reto` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase tiene una única responsabilidad, que es representar un "reto" y proporcionar métodos de acceso a sus propiedades.

- **Open/Closed Principle (OCP)**: La clase está abierta a extensiones (se pueden agregar nuevos métodos o propiedades si es necesario) pero cerrada a modificaciones (los métodos existentes no necesitan ser modificados).

- **Liskov Substitution Principle (LSP)**: La clase "reto" es sustituible por cualquier subclase que herede de ella y cumpla con las mismas funcionalidades.

- **Interface Segregation Principle (ISP)**: La clase "reto" no tiene interfaces separadas, pero proporciona métodos de acceso específicos para cada propiedad, lo que permite a los usuarios acceder a los datos de forma cohesiva y sin acceder a los datos innecesarios.

- **Dependency Inversion Principle (DIP)**: La clase "reto" no cumple con el principio de inversión de dependencia (DIP), ya que no se basa en abstracciones, sino que depende directamente de tipos concretos para sus propiedades. En caso de que se necesite utilizar diferentes tipos para estas propiedades, podría ser necesario modificar la implementación de la clase "reto".


### Colecciones de datos <a name="colecciones"></a> // REVISAR A PARTIR DE AQUÍ
> [Volver al índice](#índice)

> A continuación se detallan las colecciones de datos que se utilizarán en la aplicación.

#### Colección de usuarios:

Este es un módulo escrito en TypeScript para la colección de usuarios en una aplicación de seguimiento de actividad física. El módulo se encarga de definir una clase usuarioCollection que se encarga de almacenar y manejar una colección de usuarios y la guarda en una base de datos lowdb en formato JSON.

```typescript
import { usuario } from '../types/usuarios'
import { usuarioSchema } from '../schemas/usuarioSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { rutaCollection } from './rutaCollection';
import { retoCollection } from './retoCollection';
/**
 * Usuarios:
Alfabéticamente por nombre del usuario, ascendente y descendente.
Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
 */

export class usuarioCollection {

private coleccionUsuarios: usuario[];
private database: lowdb.LowdbSync<usuarioSchema>;


constructor(public coleccion: usuario []) {
    this.database = lowdb(new FileSync('src/databases/db_usuarios.json'));
    if (this.database.has("usuario").value()) {
        const dbItems = this.database.get("usuario").value();
        dbItems.forEach(item => this.coleccion.push(new usuario(item.id, item.nombre, item.actividades, item.amigos, item.historicoRutas)));
    }
    this.coleccionUsuarios = coleccion;
}

public getColeccionUsuarios(): usuario[] {
    return this.coleccionUsuarios;

}

public getHistoricoRutas(id: string): { fecha: Date, ruta: string }[] | undefined {
    const usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id)
    return usuario ? usuario.getHistoricoRutas() : undefined;

}

public addUsuario(usuario: usuario) {
    this.coleccionUsuarios.push(usuario);
    const dbUsuario = {
        id: usuario.getId(),
        nombre: usuario.getNombre(),
        actividades: usuario.getActividades(),
        amigos: usuario.getAmigos(),
        historicoRutas: usuario.getHistoricoRutas()
    }
    this.database.get("usuario").push(dbUsuario).write();
}

public removeUsuario(id: string) {
    const usuarioAEliminar = this.coleccionUsuarios.find(usuario => usuario.getId() === id);
    if (usuarioAEliminar) {
        this.coleccionUsuarios = this.coleccionUsuarios.filter(usuario => usuario.getId() !== id);
        this.database.get("usuario").remove({ id: id }).write();
    }
}

// Estadísticas de entrenamiento: Cantidad de km y desnivel total acumulados en la semana, mes y año.

public getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number } {
    const usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id);
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
        historicoRutas?.forEach(historico => {
            const historicoFecha = new Date(historico.fecha);
            if (historicoFecha >= fechaInicio && historicoFecha <= fechaActual) {
                const ruta = coleccionRutas.getColeccionRutas().find(ruta => ruta.getId() === historico.ruta);
                if (ruta) {
                    km += ruta.getLongitudRuta()
                    desnivel += ruta.getDesnivelMedio()

                }
            }
        });
        return { km: km, desnivel: desnivel };
    }
    return { km: 0, desnivel: 0 };
}

public getRutaFavorita(coleccionRutas: rutaCollection ,id_usuario: string): string | string [] | undefined {
    // Retornar solo las 3 primeras
    const usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id_usuario);
    if (usuario) {
        const historicoRutas = usuario.getHistoricoRutas();
        const rutasFavoritas: { ruta: string, veces: number }[] = [];
        historicoRutas?.forEach(historico => {
            const ruta = rutasFavoritas.find(ruta => ruta.ruta === historico.ruta);
            if (ruta) {
                ruta.veces++;
            } else {
                rutasFavoritas.push({ ruta: historico.ruta, veces: 1 });
            }
        }
        );
        rutasFavoritas.sort((a, b) => b.veces - a.veces);
        // Retornar las 3 rutas favoritas
        const rutasFavoritasRetorno: string [] = [];
        const nFavoritas = rutasFavoritas.length > 3 ? 3 : rutasFavoritas.length;
        for (let i = 0; i < nFavoritas; i++) {
            rutasFavoritasRetorno.push(rutasFavoritas[i].ruta);
        }
        return rutasFavoritasRetorno;
    }
    return undefined;
}

public getRetosActivos(coleccionRetos: retoCollection ,id_usuario: string): string[] {
    const retosActivos: string[] = [];
    const retos = coleccionRetos.getColeccionRetos();
    retos ? retos.forEach(reto => {
        if (reto.getUsuariosRealizandoReto().includes(id_usuario)) {
            retosActivos.push(reto.getId());
        }
    }
    ) : undefined;
    return retosActivos;
}

}
```

Algunos puntos destacados del código:

- Se importan las dependencias necesarias (lowdb y FileSync) y algunos tipos personalizados (usuario y usuarioSchema).
- La clase usuarioCollection tiene un constructor que acepta una colección de usuarios y un método para obtener la colección de usuarios. Además, tiene métodos para agregar, eliminar y obtener estadísticas de entrenamiento y rutas favoritas para un usuario en particular. También hay un método para obtener retos activos para un usuario.
- La colección de usuarios se almacena en una base de datos db_usuarios.json utilizando lowdb.
- Al crear una nueva instancia de usuarioCollection, se comprueba si hay usuarios existentes en la base de datos. Si los hay, se agregan a la colección de usuarios.
- El método getEstadisticasEntrenamiento calcula la cantidad de kilómetros y el desnivel total acumulados en una semana, mes o año determinados para un usuario en particular. Se basa en la colección de rutas proporcionada como argumento y en el historial de rutas del usuario.
- El método getRutaFavorita devuelve las rutas favoritas de un usuario en función de su historial de rutas. Las rutas se clasifican según la cantidad de veces que se han realizado y se devuelve una lista de las 3 rutas más populares.
- El método getRetosActivos devuelve una lista de los retos activos en los que está actualmente inscrito un usuario. Esto se basa en la colección de retos proporcionada como argumento y en los retos que el usuario ha completado.

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
import { grupo } from '../types/grupos'
import { grupoSchema } from '../schemas/grupoSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

import { rutaCollection } from '../collections/rutaCollection'

export class grupoCollection {

private coleccionGrupos: grupo[];
private database: lowdb.LowdbSync<grupoSchema>;


constructor(public coleccion: grupo []) {
    this.database = lowdb(new FileSync('src/databases/db_grupos.json'));
    if (this.database.has("grupo").value()) {
        const dbItems = this.database.get("grupo").value();
        dbItems.forEach(item => this.coleccion.push(new grupo(item.id, item.nombre, item.participantes, item.historicoRutas)));
    }
    this.coleccionGrupos = coleccion;
}

public getColeccionGrupos(): grupo [] {
    return this.coleccionGrupos;
}

public addGrupo(grupo: grupo) {
    this.coleccionGrupos.push(grupo);
    const dbGrupo = {
        id: grupo.getId(),
        nombre: grupo.getNombre(),
        participantes: grupo.getParticipantes(),
        historicoRutas: grupo.getHistoricoRutas()
    }
    this.database.get("grupo").push(dbGrupo).write();
}

public removeGrupo(id: string) {
    const grupoAEliminar = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupoAEliminar) {
        this.coleccionGrupos = this.coleccionGrupos.filter(grupo => grupo.getId() !== id);
        this.database.get("grupo").remove({ id: id }).write();
    }
}

public getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number } {
    const grupo = this.coleccionGrupos.find(grupo => grupo.getId() === id);
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
        historicoRutas?.forEach(historico => {
            const historicoFecha = new Date(historico.fecha);
            if (historicoFecha >= fechaInicio && historicoFecha <= fechaActual) {
                const ruta = coleccionRutas.getColeccionRutas().find(ruta => ruta.getId() === historico.ruta);
                if (ruta) {
                    km += ruta.getLongitudRuta()
                    desnivel += ruta.getDesnivelMedio()
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

public getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[] {
    const grupo = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupo) {
        const historicoRutas = grupo.getHistoricoRutas();
        const usuarios = grupo.getParticipantes()
        const clasificacion: {usuario: string, valor: number}[] = [];
        usuarios?.forEach(usuario => {
            let km = 0;
            let desnivel = 0;
            historicoRutas?.forEach(historico => {
                if (historico.usuarios.includes(usuario)) {
                    const ruta = coleccionRutas.getColeccionRutas().find(ruta => ruta.getId() === historico.ruta);
                    if (ruta) {
                        km += ruta.getLongitudRuta()
                        desnivel += ruta.getDesnivelMedio()
                    }
                }
            });
            clasificacion.push({usuario: usuario, valor: tipo === "km" ? km : desnivel});
        });
        clasificacion.sort((a, b) => b.valor - a.valor);
        return clasificacion;
    }
    return [];
}

// Rutas favoritas del grupo: Rutas que los usuarios del grupo han realizado con mayor frecuencia en sus salidas conjuntas.
public getRutasFavoritas(coleccionRutas: rutaCollection ,id: string): {ruta: string, frecuencia: number}[] {
    const grupo = this.coleccionGrupos.find(grupo => grupo.getId() === id);
    if (grupo) {
        const historicoRutas = grupo.getHistoricoRutas();
        const rutas: {ruta: string, frecuencia: number}[] = [];
        historicoRutas?.forEach(historico => {
            const ruta = rutas.find(ruta => ruta.ruta === historico.ruta);
            if (ruta) {
                ruta.frecuencia++;
            } else {
                rutas.push({ruta: historico.ruta, frecuencia: 1});
            }
        });
        rutas.sort((a, b) => b.frecuencia - a.frecuencia);
        // Solo devolvemos las 3 primeras
        return rutas.slice(0, 3);
    }
    return [];
}
}
```

Los métodos de la clase incluyen:

- getColeccionGrupos(): devuelve la colección de objetos grupo almacenados en la clase.
- addGrupo(grupo): agrega un objeto grupo a la colección y lo almacena en la base de datos.
- removeGrupo(id): elimina un objeto grupo de la colección y de la base de datos según su identificador
- getEstadisticasEntrenamiento(coleccionRutas, id, tiempo): devuelve un objeto que contiene las estadísticas de entrenamiento para un grupo específico en un período de tiempo específico. Las estadísticas incluyen la cantidad de kilómetros recorridos y el desnivel acumulado en todas las rutas que el grupo ha realizado durante el período de tiempo.
- getClasificacionUsuarios(coleccionRutas, id, tipo): devuelve una lista de usuarios del grupo clasificados por la cantidad de kilómetros recorridos o el desnivel acumulado en todas las rutas que han realizado en el grupo.
- getRutasFavoritas(coleccionRutas, id): devuelve una lista de las rutas favoritas del grupo según la frecuencia con la que los usuarios del grupo las han realizado en sus salidas conjuntas.

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

- it('Metodos: getColeccionGrupos(): grupo []', () => {...}): Este test verifica que el método getColeccionGrupos() de la clase grupoCollection devuelva un arreglo de objetos tipo grupo. Se espera que la longitud de este arreglo sea igual a 3. Para ello, se utiliza la función expect del paquete chai, que comprueba que el valor actual sea igual al valor esperado utilizando la función to.be.eql().

- it('Metodos: addGrupo(grupo: grupo)', () => {...}): En este test se comprueba que el método addGrupo(grupo: grupo) de la clase grupoCollection añada un objeto grupo al arreglo de grupos. Primero se crea un nuevo objeto grupo y se añade a la colección de grupos mediante la función addGrupo(). Luego se comprueba que la longitud del arreglo sea igual a 4.

- it('Metodos: removeGrupo(id: string)', () => {...}): En este test se verifica que el método removeGrupo(id: string) de la clase grupoCollection elimine un objeto grupo del arreglo de grupos. Para ello, se elimina el objeto grupo1 que se había añadido en el test anterior, y se comprueba que la longitud del arreglo sea igual a 3.

- it('Metodo: getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number }', () => {...}): En este test se comprueba que el método getEstadisticasEntrenamiento(coleccionRutas: rutaCollection ,id: string, tiempo: "semana" | "mes" | "año"): {km: number, desnivel: number } de la clase grupoCollection devuelva un objeto con las estadísticas de entrenamiento de un grupo. Para ello, se utiliza un objeto rutaCollection que se pasa como argumento al método, se especifica el id del grupo y el intervalo de tiempo en el que se desea obtener las estadísticas. Se espera que el objeto devuelto tenga un valor de kilómetros y de desnivel, y se utiliza la función to.be.eql() de chai para comprobar que los valores sean iguales a los esperados.

- it('Metodo: getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[]', () => {...}): En este test se verifica que el método getClasificacionUsuarios(coleccionRutas: rutaCollection ,id: string, tipo: "km" | "desnivel"): {usuario: string, valor: number}[] de la clase grupoCollection devuelva un arreglo de objetos con la clasificación de usuarios de un grupo en función del tipo de entrenamiento. Se utiliza un objeto rutaCollection que se pasa como argumento al método, se especifica el id del grupo y el tipo de entrenamiento (kilómetros o desnivel). Se espera que el arreglo devuelto contenga objetos con el nombre del usuario y el valor del tipo de entrenamiento especificado. Se utiliza la función to.be.eql() de chai

#### Colección de rutas:

El siguiente código define una clase rutaCollection que gestiona una colección de rutas y la guarda en una base de datos lowdb en formato JSON.

```typescript
import { ruta } from "../types/rutas";
import { rutaSchema } from "../schemas/rutaSchema";
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

  constructor(public coleccion: ruta[]) {
    this.database = lowdb(new FileSync("src/databases/db_rutas.json"));
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
            item.usuariosFinalizados,
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
      usuariosFinalizados: ruta.getUsuariosFinalizados(),
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

  public addUserToRuta(user_id: string, ruta_id: string) {
    const rutaAEditar = this.coleccionRutas.find(
      (ruta) => ruta.getId() === ruta_id
    );
    if (rutaAEditar) {
      // comprobar que en la ruta no esté ya el usuario
      if (rutaAEditar.getUsuariosFinalizados().includes(user_id)) {
        console.log("El usuario ya está en la ruta");
      } else {
        rutaAEditar.addUsuarioFinalizado(user_id);
        this.database
          .get("ruta")
          .find({ id: ruta_id })
          .assign({ usuariosFinalizados: rutaAEditar.getUsuariosFinalizados() })
          .write();
      }
    }
  }

  //Alfabéticamente por nombre de la ruta, ascendente y descendente.
  public getRutasAlfabetico(orden: boolean) : ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
    } else {
      return this.coleccionRutas.sort((a, b) => b.getNombre().localeCompare(a.getNombre()));
    }
  }

  //Cantidad de usuarios que realizan las rutas, ascendente y descendente.
  public getRutasCantidadUsuarios(orden: boolean) : ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) => a.getUsuariosFinalizados().length - b.getUsuariosFinalizados().length);
    } else {
      return this.coleccionRutas.sort((a, b) => b.getUsuariosFinalizados().length - a.getUsuariosFinalizados().length);
    }
  }
  // Por la calificación media de la ruta, ascendente y descendente.

  public getRutasCalificacionMedia(orden: boolean) : ruta[] {
    if (orden) {
      return this.coleccionRutas.sort((a, b) => a.getCalificacionMedia() - b.getCalificacionMedia());
    } else {
      return this.coleccionRutas.sort((a, b) => b.getCalificacionMedia() - a.getCalificacionMedia());
    }
  }

  //Ordenar por actividad: correr o ciclismo.

  public getRutasActividad(actividad: string) : ruta[] {
    // comprobamos que la actividad es ciclismo o correr
    if (actividad === "Bicicleta" || actividad === "Correr") {
    return this.coleccionRutas.filter((ruta) => ruta.getTipoActividad() === actividad);
    } else {
      return []
    }
  }

  public getInfoRuta(id: string): void {
    const ruta = this.coleccionRutas.find((ruta) => ruta.getId() === id);
    if (ruta) {
      console.log("Nombre: " + ruta.getNombre());
      console.log("Coordenadas inicio: " + ruta.getCoordenadasInicio());
      console.log("Coordenadas final: " + ruta.getCoordenadasFinal());
      console.log("Longitud de la ruta: " + ruta.getLongitudRuta());
      console.log("Desnivel medio: " + ruta.getDesnivelMedio());
      console.log("Usuarios finalizados: " + ruta.getUsuariosFinalizados());
      console.log("Tipo de actividad: " + ruta.getTipoActividad());
      console.log("Calificación media: " + ruta.getCalificacionMedia());
    } else {
      console.log("No existe la ruta");
    }
  }
}

```

En el constructor, se carga la base de datos si existe y se crean las rutas a partir de los datos guardados. También se inicializa la variable coleccionRutas con la colección de rutas proporcionada.

La clase rutaCollection proporciona métodos para añadir y eliminar rutas, añadir usuarios a rutas y ordenar la colección de rutas según diferentes criterios, tales como el nombre, la cantidad de usuarios que han realizado la ruta, la calificación media y el tipo de actividad.

Los métodos getRutasAlfabetico, getRutasCantidadUsuarios y getRutasCalificacionMedia ordenan la colección de rutas según el criterio especificado, de manera ascendente o descendente.

El método getRutasActividad filtra la colección de rutas para mostrar sólo aquellas que tienen la actividad especificada.

En resumen, esta clase proporciona una gestión de colección de rutas con funciones para añadir, eliminar y ordenar las rutas según diferentes criterios. Además, utiliza una base de datos lowdb para almacenar la información de las rutas.

El método, getInfoRuta es una función que recibe un parámetro 'id' que es un identificador de una ruta en una colección de rutas. El objetivo de este método es obtener información específica sobre la ruta que corresponde al 'id' proporcionado. Para ello, se utiliza el método 'find' que recorre la colección de rutas y busca la ruta que tenga el 'id' correspondiente. Si se encuentra la ruta, se imprimirán en la consola diversas propiedades de la misma, como su nombre, coordenadas de inicio y finalización, longitud, desnivel medio, cantidad de usuarios que han finalizado la ruta, tipo de actividad y calificación media. Si no se encuentra la ruta correspondiente al 'id' proporcionado, se imprime en la consola el mensaje "No existe la ruta".

#### Tests de la colección de rutas:  // Revisar anterior apartado

```typescript

```

#### Colección de retos:

```typescript

```

#### Tests de la colección de retos:

```typescript

```

### Schemas <a name="schemas"></a>
> [Volver al índice](#índice)

> A continuación se detallan las colecciones de datos que se utilizarán en la aplicación.

#### Schema de usuarios:

```typescript

```

#### Schema de grupos:

```typescript

```

#### Schema de rutas:

```typescript

```

#### Schema de retos:

```typescript

```

### Base de datos <a name="database"></a>
> [Volver al índice](#índice)

> A continuación se detallan los archivos de bases de datos que se utilizarán en la aplicación.

#### Base de datos JSON de usuarios:

```typescript

```

#### Base de datos JSON de grupos:

```typescript

```

#### Base de datos JSON de rutas:

```typescript

```

#### Base de datos JSON de retos:

```typescript

```

### Programa principal <a name="principal"></a>
> [Volver al índice](#índice)

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
