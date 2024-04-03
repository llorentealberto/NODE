const fs = require("fs");
const { log } = require('console');
const promise= require('fs/promises');



// creo un objeto 

let person={name:"alberto" , surname:"llorente" , age:20};

// Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.

function metoDato(persona){

    let escribodato=new Promise((resolve, reject)=>
    {
        if(persona){
            let escrito= fs.writeFile('./person.json' , JSON.stringify(persona) ,()=>{

                fs.readFile('./person.json', ((error, data)=> {

                    console.log( JSON.parse(data));
                
                  }) )
            });
            resolve ('conseguido')
        }else{
            let error={}
             error={mensaje:'no has puesto lo correcto'}
            reject(error)


        }

    })
    return escribodato;
};

metoDato(person)

.then(conseguido=>{console.log('conseguido')})
.catch(error => {console.log(error);})
