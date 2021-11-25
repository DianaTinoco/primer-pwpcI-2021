
// Import el modulo http
import http from 'http';
// 2. Importando el module de routes
import routes from "./routes.js"
// 3. Importando express
// $ nmp i express -S
import Express  from 'express'

// Crear una instancia de Express
const app = Express(); // (req, resp, next)=>{ } request handler

// La posicion en que se encuentran es importante
// Se debe colocar primero ya que el orden de registro
//determina el orden de verificacion 
app.use('/about',(_, res)=>{
    console.log('Se ha realizado la peticion "/about"');
    res.send("<h1>Acerca de...</h1>\n Sitio inicial hecho en NodeJs");
});

app.use('/',(_, res)=>{
    console.log('Se ha realizado la petici on: "/"');
    res.send("<h1>Mi App</h1>\n Bienvenido a este sitio");
});

// Poniendo a escuchar la app de express
app.listen(3000,'192.168.100.6',()=>{
    console.log("Servidor escuchando en http://192.168.100.6:3000")
});