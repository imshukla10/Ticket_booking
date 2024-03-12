const express = require('express')
const bodyParser = require('body-parser')

const db = require('./models/index.js');
const { PORT } = require('./config/serverConfig.js')
const ApiRoutes = require('./routes/index.js')


const setupAndStartServer = () =>{
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes)

    app.listen(PORT,(req,res)=>{
        console.log(`Server started on ${PORT}`)
        if(process.env.SYNC_DC){
            db.sequelize.sync({alter:true})
        }
    })
}

setupAndStartServer()