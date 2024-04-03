

const fs= require('fs/promises');



// creo un objeto 

let person={name:"alberto" , surname:"llorente" , age:20};

// Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.

// aqui ya nos devuelve una promesa
fs.writeFile('./person.json' , JSON.stringify(person))

// capturo la promesa que devuelve 

.then(()=>{
    // hacemos el return de lo que nos devuelve el metodo readFile
    return fs.readFile('./person.json'  );


    
})

.then((resultado)=>{
    console.log(JSON.parse(resultado));
})

.catch((error)=>{

    console.log('error' , error);
})


// declaro la funcion que devuelva la promesa 
// function metoDato(persona){

//     // declaro  el objeto de tipo promesa 
//     let escribodato=new Promise((resolve, reject)=>
//     {
//         // meto los resolve y el reject en caso de error 
//         if(persona){
//             let escrito= fs.writeFile('./person.json' , JSON.stringify(persona) ,()=>{

//                 fs.readFile('./person.json', ((error, data)=> {

//                     console.log( JSON.parse(data));
                
//                   }) )
//             });
//             resolve ('conseguido')
//         }else{
//             let error={}
//              error={mensaje:'no has puesto lo correcto'}
//             reject(error)


//         }

//     })
//     return escribodato;
// };

// metoDato(person)

// .then(conseguido=>{console.log('conseguido')})
// .catch(error => {console.log(error);})
