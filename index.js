
// Import el modulo http
import http from 'http';
// 2. Importando el module de routes
import routes from "./routes.js"
// 3. Importando express
// $ nmp i express -S
import Express  from 'express'

// Crear una instancia de Express
const app = Express(); // (req, resp, next)=>{ } request handler

// Registrando el primer middleware
app.use((req, res, next)=>{
    // Registrar un mensaje en el log
    console.log("Estoy en el middleware 1");
    // Dar instruccion de pasar al siguiente middleware
    next()
});

// Regpistrando el segundo middleware
app.use((req, res, next)=>{
    // Registrar un mensaje en el log
    console.log("Estoy en el middleware 2");
    next()
});

app.use((_, res)=>{
    console.log("Estoy en el middleware 3");
    console.log("Emitiendo respuesta a cliente");
    res.send("<h1>Mi respuesta</h1>\n Hola");
});

// Poniendo a escuchar la app de express
app.listen(3000,'192.168.100.6',()=>{
    console.log("Servidor escuchando en http://192.168.100.6:3000")
});

// 2. Crear el servidor tomando como
// manejador de peticiones a express
const server = http.createServer(app);

// 3. Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
//192.168.100.6:3000
server.listen(3000, '192.168.100.6', () => {
    console.log("Servidor escuchando en http://192.168.100.6:3000")
}); 