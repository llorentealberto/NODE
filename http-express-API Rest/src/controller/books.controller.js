// importo la clase book 
const book = require("../models/book");

// instancio  un book 
let libro = new book("Harry Potter","Tapa blanda","JK Rowling",24,"https://lafrikileria.com/blog/wp-content/uploads/2023/05/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg",2,3);


function getStart(request, response) {
    let respuesta = { error: false, codigo: 200, mensaje: "Punto de inicio" };
    response.send(respuesta);
  }
    
function getBook(request, response)
{
    let respuesta;
    if (libro != null) 
        respuesta = {error:false , codigo:200 , data:libro}
    else
        respuesta = {error: true, codigo: 200, mensaje: "El book no existe"}
    
    response.send(respuesta);   
}

function postNewBook(request , response)
{
    let respuesta;
    
    if (libro===null){
    libro = {
        id_book: request.body.id_book,
        id_user: request.body.id_user,
        title: request.body.title,
        type: request.body.type,
        author: request.body.author,
        price: request.body.price,
        photo: request.body.photo,
      };

      respuesta={error:false , codigo:200 , mmensaje:'libro creado' , data:libro};
    }else {
        respuesta={error:true , codigo:200 , mmensaje:'el libro ya existe '}
    }
    response.send(respuesta);
}

function modificarBook(request, response){
    let respuesta;
    if(libro != null ){
      libro.id_book = request.body.id_book;
      libro.id_user = request.body.id_user;
      libro.title = request.body.title;
      libro.type = request.body.type;
      libro.author = request.body.author;
      libro.price = request.body.price;
      libro.photo = request.body.photo;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Libro actualizado',
        data: libro
      }
    }else{
      respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'El libro no existe',
        data: libro
      }
    }
  
    response.send(respuesta);
  }

  function deleteBook(request, response){
    let respuesta;
    if(libro != null){
      libro = null;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Libro eliminado'
      }
    }else{
      respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'El libro no existe',
        data: libro
      }
    }
  
    response.send(respuesta);
  }











module.exports={getBook , postNewBook , modificarBook , deleteBook};