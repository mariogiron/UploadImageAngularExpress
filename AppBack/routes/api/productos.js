const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const fs = require('fs');

const Producto = require('../../models/producto');

router.get('/', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

router.post('/', upload.single('imagen'), async (req, res) => {
    // Antes de guardar el producto en la base de datos, modificamos la imagen para situarla donde nos interesa
    const extension = '.' + req.file.mimetype.split('/')[1];
    // Obtengo el nombre de la nueva imagen
    const newName = req.file.filename + extension;
    // Obtengo la ruta donde estará, adjuntándole la extensión
    const newPath = req.file.path + extension;
    // Muevo la imagen para que resiba la extensión
    fs.renameSync(req.file.path, newPath);

    // Modifico el BODY para poder incluir el nombre de la imagen en la BD
    req.body.imagen = newName;

    try {
        const newProducto = await Producto.create(req.body);
        res.json(newProducto);
    } catch (err) {
        res.json(err);
    }

});

module.exports = router;