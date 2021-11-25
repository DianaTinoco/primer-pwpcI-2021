
// Import el modulo http
import http from 'http';
// 2. Importando el module de routes
import routes from "./routes.js"
// 3. Importando express
// $ nmp i express -S
import Express  from 'express'

// Crear una instancia de Express
const app = Express(); // (req, resp, next)=>{ } request handler

// 1. Insertando Middleware para la lectura de datos
// de un cliente 
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req,_,next)=>{
    console.log(`Se ha realizado la peticion: "${req.method} : ${req.path}"`);
    next();
});


// La posicion en que se encuentran es importante
// Se debe colocar primero ya que el orden de registro
//determina el orden de verificacion 
app.use('/about',(_, res)=>{
    res.send("<h1>Acerca de...</h1>\n Sitio inicial hecho en NodeJs");
});

// Primera prueba
app.use('/add-student-form',(_,res)=>{
    res.send(`
	<form action="/add-student" method="POST">
	<label for="student_name"> Student Name</label>
	<input type="text" name="name" id="student-name">
	<button type="submit">Add student</button>
	</form>
	`);
});

// Ruta que procesa el formulario
app.use('/add-student', (req, res, next) => {
    // Iterando sobre todo el objeto
    for(const prop in req.body){
        console.log(`${prop}: ${req.body[prop]}`);
    }
    console.log(`Metodo: ${req.method}`);

    res.json(req.body);
    // Realizamos un redireccionamiento
	//res.redirect('/');
});

// La ruta raiz entra en todo tipo de peticion
// raiz siempre se va al final 
// Asociacion de dos rutas '/' y '/home'
app.use(['/','/home'],(_, res)=>{
    res.send("<h1>Mi App</h1>\n Bienvenido a este sitio");
});


// Poniendo a escuchar la app de express
app.listen(3000,'192.168.100.6',()=>{
    console.log("Servidor escuchando en http://192.168.100.6:3000")
});