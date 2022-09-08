const Product= require('../models/products')

postProduct = (req, res) => {
    if (!req.body.name){
        res.status(400).json({
            ok:false,
            message: 'el campo nombre del pdto es mandatory',
        })
        return
    }
    //console.log('hola',req.body)
    const newProduct = new Product(req.body)
    newProduct.save()
        .then((result) => res.status(201).json({ok:true}))
        .catch((err) => console.log(err))
}

getProduct = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
                        ok:true,
                        data:products,
                        count: products.length
                        })
    
}

module.exports = {postProduct, getProduct}