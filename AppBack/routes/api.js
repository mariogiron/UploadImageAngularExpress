const router = require('express').Router();

const apiProductosRouter = require('./api/productos');

router.use('/productos', apiProductosRouter);

module.exports = router;