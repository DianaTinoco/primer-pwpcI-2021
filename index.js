// Import el modulo http
import http from 'http';

// Crear el servidor
// cb (callbaack) es una funcion que se ejecutara 
// ante cualquier peticion de un recurso a nuestro server
// (request, renponse)
const server = http.createServer((req, res) => {
    // obteniendo el recurso solicitado
    let { url, method } = req;

    //informa en la consola del servidor que se resibe una peticion
    console.log(`Se ha solicitado el siguiente recurso: ${method}: ${req}`);

    //filtrar la url
    if(url === '/'){
        // Respuesta ante "Get /"
        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');
        // 2. Escribien la respuesta 
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body><h1>&#9889; Hello from my server &#9889;</h1></body>');
        res.write('</html>');
        // Cerrando conexion
        res.end();

    }else if(url === '/author'){
        // Respuesta ante "Get /"
        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');
        let url_image = 'https://lh3.googleusercontent.com/a-/AOh14Giv5DXwlKU2Sa0OVsWllGyI-5PKiFP9JYWz-1V2Pg=s360-p-rw-no';
        // 2. Escribien la respuesta 
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body>');
        res.write('<h1>&#9889; Author &#9889;</h1>');
        res.write('<p>Diana L Paredes Tinoco - Web Developer</p>');
        res.write(`<img width = "300px" src = "${url_image}" alt = "Foto Diana Tinoco">`);
        res.write('</body>');
        res.write('</html>');
        // Cerrando conexion
        res.end();

    }else{
        //Se registra el Recurso no encontrado
        console.log(`No se ha encontrado el recurso: ${url}`);
        // Recurso no encontrado
        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');
        // 2. Escribiendo la respuesta 
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body><h1>Error: 404 - Recurso no encontrado &#9940;</h1></body>');
        res.write('</html>');
        // Cerrando conexion
        res.end();
    }

});

// 3. Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
//192.168.100.6:3000
server.listen(3000, '192.168.100.6', () => {
    console.log("Servidor escuchando en http://192.168.100.6:3000")
});
