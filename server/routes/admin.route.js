// 1 Importando el enrutador de Express
import { Router } from 'express';

// 2 Crear una instancia del enrutador
const router = Router();

// 3 Registrar rutas a mi enrutador
// Sirve el formulario para agregar productos
// GET: /admin/add-product
router.get('/add-product',(_, res)=>{
  res.send(`
  <form action="add-product" method="POST">
    <label for="product-name">☕ Nombre de producto</label>
    <input type="text" name="name" id="product-name">
    <button type="submit">Agregar producto</button>
  </form>
  `);
});
// Procesa el formulario para agregar productos
// POST: /admin/add-product
router.post('/add-product',(req, res)=>{
  // Desestructurando el body de la petición
  const { body } = req;
  // Respondiendo en JSON el body
  res.json(body);
});

// Exportando el router de la subruta de admin
export default router;
