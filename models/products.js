//import mongoose from 'mongoose';
const mongoose = require('mongoose');

//define esquema
const productSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        price: Number,
    },
    {timestamp:true}
)

//define modelo USANDO el esquema creado
const Product = mongoose.model('Product',productSchema)

module.exports = Product

