import express from 'express';
import __dirname from './path.js';
import path from 'path';
import handlebars from "express-handlebars";

import searchRouter from './routers/search.router.js';

const app = express();

//Incializamos el motor de plantillas
app.engine("handlebars", handlebars.engine());
//Establecemos la ruta de vistas
app.set("views", path.join(__dirname, 'views'));
//Establecemos el motor de renderizado
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/../public`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/",searchRouter)

const PORT = 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});