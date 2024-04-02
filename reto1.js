
// primer mensaje que se imprime 

console.log('mensaje 1 ');

// el segundo mensaje lo pongo con un retardo de 2 seg  , y dentro de ese setTimeout meto otro mensaje sin ningun retardo 
setTimeout(function(){

    console.log('mensaje2');

    setTimeout(()=>console.log('mensaje3'),);
},2000);



        


       

