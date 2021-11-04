// Import el modulo http
import http from 'http';

// Crear el servidor
// cb (callbaack) es una funcion que se ejecutara 
// ante cualquier peticion de un recurso a nuestro server
// (request, renponse)
const server = http.createServer((req, res) => {
    console.log("> Se ha recibido una peticion.");
    // Respondemos
    res.write('Hola');
    // Terminar la conexion
    res.end();
});

// 3. Pongo a trabajar el servidor
server.listen(3000, '192.168.100.6', () => {
    console.log("Servidor escuchando en http://192.168.100.6:3000")
});


console.log('Hello node ');
 