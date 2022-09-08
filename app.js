require ('dotenv').config()
const cors      = require('cors')
const express   = require('express')


const app=express()

app.use(cors())
app.use(express.json())

const dbConnect = require('./db')
dbConnect(app)

const productRouter=require('./routes/products')
app.use('/api/v1/products', productRouter)

