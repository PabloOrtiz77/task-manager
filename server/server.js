require("dotenv").config(); //para tener acceso a mis variables de entorno
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //este es para poder trabajar con react
require("./config/config");

const app = express();
const port = 8000;

//midlewares
app.use(cookieParser()); //Permite hacer las lecturas de las cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Routes
//Ruta Usuarios
const userRutes = require("./routes/user.routes");
app.use("/api/user", userRutes);

app.listen(port, () => console.log(`server run on port ${port}`));
