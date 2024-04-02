const fs = require("fs");

function writeAndRead(path , object){

    // convierto el objeto en un json 
    let json=JSON.stringify(object);

    fs.writeFile(
        // paso por parametros los mismmos que los de la funcion 
        path , 
        json , 
        // aqui he puesto por callback la funcion para escribir 
        ()=>{
            // sigo sin entender muy bien como el data se convierte en el objeto para leerlo ... 
            fs.readFile(path , (err , data)=>{

                if(err){
                    console.error('error al leer: ',err);
                    return;
                }
                console.log('contenido del archivo :' , JSON.parse(data) , 'guardado en : ' , path);
            });
        });}



// creo el archivo ./mi fichero.JSON , ya que no estaba creado 
// writeAndRead('./miFichero.json' , {calle:'segovia' , numero:19});

module.exports={writeAndRead};