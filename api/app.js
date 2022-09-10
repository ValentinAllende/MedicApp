const dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./src/routes/index");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://esteban:12345@mediapp.yasrnqu.mongodb.net/test")
  .then((res) => console.log("DB is connected"))
  .catch((error) => console.log(error));
require("./src/models/Admin");

var app = express();

app.use(cors({ origin: "*" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  // Dominio que tengan acceso (ej. 'http://example.com')
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Metodos de solicitud que deseas permitir
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  // Encabecedados que permites (ej. 'X-Requested-With,content-type')
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/", indexRouter);

app.get("/testDeploy", function (req, res, next) {
   res.send("Funcionando");
 });

module.exports = app;
