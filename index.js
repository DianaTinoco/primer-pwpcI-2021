// Import el modulo http
import http from 'http';

// Crear el servidor
// cb (callbaack) es una funcion que se ejecutara 
// ante cualquier peticion de un recurso a nuestro server
// (request, renponse)
const server = http.createServer((req, res) => {
    console.log("> Se ha recibido una peticion.");
    // logeando el objeto req: peticion
    console.log(`Informacion de la Peticion`)
    console.log(`url: ${req.url}`)
    console.log(`Request Method: ${req.method}`)
    console.log(`Plataforma del Cliente: ${req.headers["sec-ch-ua-plataform"]}`)
    // Respondemos
    res.write('Respuesta del Servidor.');
    // Terminar la conexion
    res.end();
});

// 3. Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
//192.168.100.6:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en http://localhost:3000")
});


console.log('Hello node ');
 