// Import el modulo http
import http from 'http';

// Crear el servidor
// cb (callbaack) es una funcion que se ejecutara 
// ante cualquier peticion de un recurso a nuestro server
// (request, renponse)
const server = http.createServer((req, res) => {
    //informa en la consola del servidor que se resibe una peticion
    console.log("> Se ha recibido una peticion.");

    // Registrar informacion de la peticion
    console.log(`Informacion de la Peticion`)
    console.log(`Url: ${req.url}`)
    console.log(`Request Method: ${req.method}`)

    // Establecer el tipo de contenido que 
    // se entregara al cliente
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    // Envio el contenido 
    res.write("<html>");
    res.write("<head><title>My App</title></head>");
    res.write(`<body><h1>Hello from the server &#128519;</h1><p style="color:red">Recurso solicitado: ${req.url}</p></body>`);
    res.write("</html>");
    // Terminar la conexion
    res.end();
});

// 3. Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
//192.168.100.6:3000
server.listen(3000, '192.168.100.6', () => {
    console.log("Servidor escuchando en http://192.168.100.6:3000")
});


console.log('Hello node');
 