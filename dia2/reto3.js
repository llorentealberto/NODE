// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.

// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.

// importo los modulos necesarios 

const fs= require('fs/promises');
const readline= require('readline');


// declaramos la funcion 
function pregunta(pregunta){
  
    // declaramos la promesa
    return  new Promise((resolve , reject)=>{
        
        // creo la interfaz para preguntar por consola 
        const rl=readline.createInterface({
            input:process.stdin,
            output:process.stdout,
        });

        rl.question(pregunta , (respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    
}

// 
//  creo la Función asíncrona para obtener los datos del objeto y guardarlo en un archivo JSON
async function obtenerDatosYGuardarEnArchivo() {
    try {
        const nombre = await pregunta('Ingresa tu nombre: ');
        const apellido = await pregunta('Ingresa tu apellido: ');
        const edad = await pregunta('Ingresa tu edad: ');

        const objeto = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        };

        // Convierto  el objeto a formato JSON
        const objetoJSON = JSON.stringify(objeto);

        // Guardo el objeto JSON en un archivo
        fs.writeFile('datos.json', objetoJSON);
        console.log('Objeto guardado en datos.json');
    } catch (error) {
        console.error('Error:', error);
    }
}

// creo la Función asíncrona para leer el archivo JSON y mostrar su contenido
async function leerArchivoJSON() {
    try {
        const contenido = fs.readFile('datos.json');
        
        console.log('Contenido del archivo JSON:', contenido);
    } catch (error) {
        console.error('Error:', error);
    }
};

 obtenerDatosYGuardarEnArchivo();

 leerArchivoJSON();



//---------------------------------------------------------------------------------------------------//
//let persona={name:'' , surname:'' , age:0}
// pregunta('dime tu edad')

// .then((data)=>{

//     persona.age=data;

//      return pregunta('dime el  nombre')

//     })

// .then((data)=>{
//     persona.name=data;

//     return pregunta('dime el apellido')

// })

// .then((data)=>{
//     persona.surname=data;

//     return fs.writeFile('./person.json' , JSON.stringify(persona))
// })

// .then(()=>{

//     return fs.readFile('./person.json')
// })

// .then((lectura)=>{

//     console.log(JSON.parse(lectura));

// })

// .catch((error)=>{

//     console.log('error' , error);
// })




