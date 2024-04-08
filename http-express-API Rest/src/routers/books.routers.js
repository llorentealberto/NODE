// immportamos todos los modulos que necesitamos
const {Router} = require ("express");
// instanciamos ese modulo 
const router = Router();


//creo el objeto para usar todas las funciones del controller 

const booksContrl=require('../controller/books.controller')


router.get('/book' , booksContrl.getBook);

router.post('/book' , booksContrl.postNewBook);

router.put('/book' ,booksContrl.modificarBook );

router.delete('/book' , booksContrl.deleteBook);


module.exports=router;

