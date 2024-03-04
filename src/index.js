const express = require('express')
const bodyParser = require('body-parser')


const { PORT } = require('./config/serverConfig.js')
const CityRepository = require('./repository/city-repository.js')


const setupAndStartServer = () =>{
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,(req,res)=>{
        console.log(`Server started on ${PORT}`)
        const repo = new CityRepository()
        repo.createCity({name:" Delhi"})
    })
}

setupAndStartServer()