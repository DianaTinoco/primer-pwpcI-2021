import fs from 'fs';

const requestHandler = (req, res) => {
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
    
} else if(url === '/message' && method === "POST"){
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
    /*EjecutaOperacion(ARGS1, ARG3, cb)
      Modelo Asincrono
      Suma2Numeros(1,2,cb)

      1. let res = suma2Numeros(1,2);
      2. console.log(res) // undefined
    */
    // Funcionando de manera asincrona 
    //3. Registrando un manejador de fin de recepcion de datos
    req.on("end", () => {
      // Buffer: permite crear memorias compactadas 
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //Guardando el mensaje en un archivo
      fs.writeFile('message.txt', message, (err)=>{
        //verificacion si hubo error
        if(err){
          console.log("> No se pudo grabar el arcchivo");
          res.statusCode = 500; // Internal Server Error
          res.headersSent("Content-Type", "text/html");
          res.write("ERROR WHEN LOADING FILE");
          return res.end();
        }
      
      fs.writeFileSync('message.txt', message);
      //Establecer el status code de redireccionamiento
      res.statusCode = 302;
      //Establecer la ruta de direccionamiento 
      res.setHeader('Location','/');
      //Finalizo coneccion
      return res.end();
      });
        
    });
} else if(url === '/author'){
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

} else{
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

};

// Exportar el requestHandler
export default {
    requestHandler
};