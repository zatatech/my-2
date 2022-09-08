const mongoose = require('mongoose')

const dbConnect = (app)=>{

    mongoose.connect(`${process.env.connString}`)
    .then((response)=>{
 
        app.listen(process.env.PORT,()=>{
            console.log(`listening on port ${process.env.PORT}`)
        })

        console.log('conex BD ok')
    })

}

module.exports = dbConnect