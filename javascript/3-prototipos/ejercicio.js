// AÑADIENDO MIEMBROS A LOS GRUPOS Y MOSTRANDO RESUMEN
// Completa el código del prototipo "Grupo"

/*
    1. Utilizando un constructor de objetos "Grupo"
    2. Completa el constructor "Grupo" con las propiedades:
        nombre   -> Nombre del grupo        -> String "..."
        personas -> Arreglo de Personas     -> Array["...", "...", "..."]
    3. Agrega un prototipo llamado `agregarPersona` que sea una función para agregar una persona
    4. Agrega un prototipo llamado `mostrarResumen` utilizando **interpolación** para mostrar el siguiente mensaje:
        "El grupo <propiedad_grupo> tienen <total_personas> miembros"
*/

// Constructor de Objetos "Grupo"
class Grupo{
    
    constructor(nombre,  personas) {
    this.nombre = nombre;
    
    
    this.personas = [...personas];
    }
 /* mostrarResumen() {
    
    console.log("El grupo "+this.nombre +"tiene" +this.personas.length +"miembros");
      }*/
   mostrarResumen() {
    

    console.log(`El grupo ${this.nombre} tiene ${this.personas.length} miembros`);
      }
 agregarPersona(nueva){
        this.personas.push(nueva);
    }
}
const x="Magios";
const y=["Eduardo", "Carla", "Marcos", "Emmanuel", "Samara", "Paulina", "María", "Julio", "Alex", "Pedro", "Guillermo", "Hernán", "Eliot", "Israel", "Lucía"];
const magios = new Grupo(x, y);

magios.mostrarResumen();
magios.agregarPersona("Manuel");
magios.agregarPersona("Irma");
magios.agregarPersona("Carlos");
magios.mostrarResumen();
</script>
