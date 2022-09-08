const productRouter = require('express').Router()
const productController = require('../controllers/products')

productRouter.post('/', productController.postProduct)
productRouter.get('/', productController.getProduct)

module.exports = productRouter