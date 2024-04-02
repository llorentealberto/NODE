const readline= require('readline');
const fs = require("fs");
const { log } = require('console');
const rl =readline.createInterface({

    input: process.stdin ,
    output: process.stdout
});

// creo el objeto vacio 
let person={}
// meto las question una dentro de la otra para que no se rellene hasta que no esten todas las preguntas hechas 
rl.question('introduce el nombre: ', (nombre)=>{person.nombre=nombre;

    rl.question('introduce apellido: ' , (apellido)=>{person.apellido=apellido;
        
        rl.question('introduce edad : ' , (edad)=>{person.edad=edad;
            
            const rutaDelArchivo = "./person.json"

            const perstoJson=JSON.stringify(person);


            fs.writeFile(
                rutaDelArchivo,
                perstoJson,
                ()=>{

                    rl.on('close',()=>{
                        console.log(person);
                        
                    })
                }
            )
        
        });
    });
    
});