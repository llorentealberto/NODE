const readline= require('readline');


function readConsole(callback){

    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    // creo vacio el usuario
    const usuario={};

    rl.question('di cual es el nombre: ', (name)=>{usuario.name=name;
        
        rl.question('di cual es el apellido : ', (apellido)=>{usuario.apellido=apellido
        
            rl.question('di cual es la edad: ' , (edad)=>{usuario.edad=edad
            
                rl.close();

                callback(usuario);
            });
        });
});
}

module.exports={
    readConsole
}
