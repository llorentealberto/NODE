// importamos el servidor
const app = require('./app');

app.listen(app.get("port"),function(){

    console.log('server listen on port' + app.get('port')) 
})



