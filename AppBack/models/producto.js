const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    activo: Boolean,
    imagen: String
});

module.exports = mongoose.model("Producto", productoSchema);