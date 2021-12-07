// 1 Importando el enrutador de Express
import { Router } from 'express';

// 2 Crear una instancia del enrutador
const router = Router();

// Se debe colocar primero ya que el orden de registro
// determina el orden de verificación
router.get('/about',(_,res)=>{
  res.send("<h1>💡 Acerca de...</h1>\n🙋‍♂️ Sitio inicial hecho con NodeJs");
});

// La ruta raíz entra en todo tipo de petición
router.get(['/','/home'],(_, res)=>{
  res.send("<h1>Mi APP</h1>\n🙋‍♂️ Bienvenido a este sitio");
});

export default router;