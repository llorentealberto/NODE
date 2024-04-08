const book = require("../models/book");


// let libro = null;

let libro1 = new book("Harry Potter1","Tapa blanda","JK Rowling",24,"https://lafrikileria.com/blog/wp-content/uploads/2023/05/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg",1,4);
let libro2 = new book("Harry Potter2","Tapa blanda","JK Rowling",24,"https://lafrikileria.com/blog/wp-content/uploads/2023/05/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg",2,5);
let libro3 = new book("Harry Potter3","Tapa blanda","JK Rowling",24,"https://lafrikileria.com/blog/wp-content/uploads/2023/05/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg",3,6);
let libro4 = new book("Harry Potter4","Tapa blanda","JK Rowling",24,"https://lafrikileria.com/blog/wp-content/uploads/2023/05/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg",4,7);

let libros = [libro1, libro2, libro3, libro4];

// funcion para que lance el mensaje de inicio si hay error o no 
function getStart(request, response) {
    let respuesta = { error: false, codigo: 200, mensaje: "Punto de inicio" };
    response.send(respuesta);
  }

function getBook(request, response) {
  let respuesta;
  let id = request.params.id;
  let libroExiste = libros.some((libro) => libro.id_book == id);

  if (id && libroExiste) {

      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Libro encontrado',
        data: libros.find((libro) => libro.id_book == id),
      };
  }else{
      respuesta = {
        error: true,
        codigo: 200,
        message: 'El Libro no existe'
      }
  }
  response.send(respuesta);
}

function getBooks(request, response){
  let respuesta;

  if(libros.length>0){
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Lista de Libros',
      data: libros
    };
  }else{
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: 'No hay libros en la Librería'
    };
  }

  response.send(respuesta);
}


function postBook(request, response){
    let respuesta;
    let libroExiste = libros.some((libro) => libro.id_book == request.body.id_book);
    if(!libroExiste){
      libros.push(request.body);

      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Libro creado',
        data: libros
      };
    }else{
      respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Libro ya existe'
      };
    }
    response.send(respuesta);
}

function putBook(request, response){
  let respuesta;
  let id = request.params.id;
  let libroExiste = libros.some((libro) => libro.id_book == id);

  if(libroExiste){
    let i = libros.indexOf(libros.find((libro) => libro.id_book == id));

    libros[i].id_book = request.body.id_book;
    libros[i].id_user = request.body.id_user;
    libros[i].title = request.body.title;
    libros[i].type = request.body.type;
    libros[i].author = request.body.author;
    libros[i].price = request.body.price;
    libros[i].photo = request.body.photo;
    
    respuesta = {
      error: false,
      codigo: 200,
      message: 'Libro Modificado',
      data: libros[i]
    };
  }else{
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: 'El Libro no existe'
    }
  }

  response.send(respuesta);
}

function deleteBook(request, response){
  let respuesta;
  let id = request.params.id;
  let libroExiste = libros.some((libro) => libro.id_book == id);

  if(libroExiste){
    libros.splice(libros.indexOf(libros.find((libro) => libro.id_book == id)),1);

    respuesta = {
      error: false,
      codigo: 200,
      message: 'Libro eliminado',
      data: libros,
    };
  }else{
    respuesta = {
      error: true,
      codigo: 200,
      message: 'El Libro no existe'
    };
  }
  response.send(respuesta);
}


module.exports = { getStart, getBook, getBooks, postBook, putBook, deleteBook};