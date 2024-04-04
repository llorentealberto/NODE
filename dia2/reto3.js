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
async function obtenerDatos(callback ) {

    // en el try creo las propiedades del objeto mediante la pregunta con el await 
    try {
        const nombre = await pregunta('Ingresa tu nombre: ');
        const apellido = await pregunta('Ingresa tu apellido: ');
        const edad = await pregunta('Ingresa tu edad: ');

        // rellenamos el objeto con los datos obtenidos por consola 
        const objeto = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        };

        // Convierto  el objeto a formato JSON
        const objetoJSON = JSON.stringify(objeto);


        callback(objetoJSON)

        
    } catch (error) {
        console.error('Error:', error);
    }
    
}

// creo la Función asíncrona para leer el archivo JSON y mostrar su contenido , con parametros la ruta y el objeto 
async function leerArchivoJSON(ruta, objetoJSON) {
    try {
        // Guardo el objeto JSON en un archivo
        await fs.writeFile(ruta, JSON.stringify(objetoJSON));
       
        // aqui leemos pero le damos el await para que espere a que se haya escrito el archivo , ya que necesitamos la ruta como parametro 
        const contenido = await fs.readFile(ruta);
        
        console.log('Contenido del archivo JSON:', contenido);
    } catch (error) {
        console.error('Error:', error);
    }
};



 



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


let persona={name:'' , surname:'' , age:0}

// creo la funcion 
function readAndWrite(ruta , objeto ){

    // llamamos al metodo writeFile , los parametros los tendremos que poner manualmente 
         fs.writeFile(ruta , JSON.stringify(objeto) )

        // 
         .then(()=>{

            return fs.readFile(ruta);
            
         })
         .then((lectura)=>{

            console.log(JSON.parse(lectura));

            
         })
}


function escribeObjeto(callback){

    pregunta('dime tu edad')

.then((data)=>{

    persona.age=data;

     return pregunta('dime el  nombre')

    })

.then((data)=>{
    persona.name=data;

    return pregunta('dime el apellido')

})

.then((data)=>{
    persona.surname=data;

    return callback(persona)
})





}


module.exports={escribeObjeto ,readAndWrite , leerArchivoJSON , obtenerDatos };

