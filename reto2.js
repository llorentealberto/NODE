// llamo a los metodos que hacen falta 

const { error } = require("console");
const fs = require("fs");


// creo el objeto person

let person = {
    name: "Juan",
    surname: "Perez",
    age: 30
};

// creo la primera variable que necesito para el writeFile 
const rutaDelArchivo = "./person.json"
// creo la segunda variable , en este caso necesito el objeto convertido en un string 
const contenidoQueSeDeseaEscribir = JSON.stringify(person);

fs.writeFile(
  rutaDelArchivo,
  contenidoQueSeDeseaEscribir,
  //este tercer parametro es una callback 
  // necesito que se ejecute antes el writefile , porque para el readFile necesito el archivo json ,
  // como writeFile es asincrona , el tercer parametro es una callback , en este caso la funcion readFile 
  ()=>{

    fs.readFile('./person.json', ((error, data)=> {

        console.log( JSON.parse(data));
    
      }) )
  }
 
  


);

