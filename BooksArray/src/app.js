const express = require("express");
const app = express();
const bookRouters = require("./routers/book.routers");
const errorHandling = require("./error/errorHandling");
const cors = require("cors");


app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bookRouters);
app.use((req, res, next) => {
  res.status(404).json({
      error: true,
      codigo: 404,
      messaje: "Endpoint doesnt found"
  });
});
app.use(errorHandling);


module.exports = app;