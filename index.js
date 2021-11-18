
// Import el modulo http
import fs from 'fs';
import http from 'http';
// 2. Importando el module de routes
import routes from "./routes.js"

// Crear el servidor
// cb (callbaack) es una funcion que se ejecutara 
// ante cualquier peticion de un recurso a nuestro server
// (request, renponse)
const server = http.createServer(routes.requestHandler);

// 3. Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
//192.168.100.6:3000
server.listen(3000, '192.168.100.6', () => {
    console.log("Servidor escuchando en http://192.168.100.6:3000")
}); 