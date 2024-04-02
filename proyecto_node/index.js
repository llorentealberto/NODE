const write=require("./writeAndReadObject");

const read=require("./readConsole");


// llamamos a la funcion con el parametro object que se crea al eecutarse la funcion 
read.readConsole((object)=>{

    // llamamos dentro de la funcion a la escritura , con los parametros de  la ruta y el mismo objeto que hemos pasado antes por parametro 
    write.writeAndRead("./prueba.json", object);
})




