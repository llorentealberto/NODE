const { Router } = require("express");
const router = Router();
const booksCtrl = require("../controller/book.controller");

router.get("/", booksCtrl.getStart);

router.get("/book/:id", booksCtrl.getBook);

router.get("/book", booksCtrl.getBooks);

router.post("/book", booksCtrl.postBook);

router.put("/book/:id", booksCtrl.putBook);

router.delete("/book/:id", booksCtrl.deleteBook);



module.exports = router;