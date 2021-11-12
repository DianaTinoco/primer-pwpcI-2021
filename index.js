// Import el modulo http
import { fstat } from 'fs';
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
        res.write(`
        <html>
          <head>
            <title>Enter message</title>
          </head>
          <body>
            <h1>Send Message</h1>
            <form action ="/message" method = "POST">
               <input type="text" name="message">
               <button type="submit">send</button>
            </form>
          </body>
        </html>
        `);
        // Cerrando conexion
        res.end();
    
    }else if(url === '/message' && method === "POST"){
       // 1. Se crea una variable para guardar los datos de entrada
       let body = [];
       // 2. Registrar un manejador para la entrada de datos
       req.on("data", (chuck) => { //manejador de EVENTOS
        //2.1 Registrando los trozos que llegan al backend
        console.log(chuck);
        // 2.2 Acumulo los datos de entrada
        body.push(chuck);
        //2.3 Proteccion en caso de recepcion masiva de datos ANTI HACK
        if(body.length > 1e6) req.socket.destroy();
    });
    //3. Registrando un manejador de fin de recepcion de datos
    req.on("end", () => {
        // Buffer: permite crear memorias compactadas 
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        res.write(`
        <html>
          <head>
            <title>Enter message</title>
          </head>
          <body>
            <h1>Received Message</h1>
            <p>Thank you!!!</p>
            <p>The message we recived was this: ${message}</p>
          </body>
        </html>
          `);
          //Finalizo coneccion
          return res.end();
        });
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