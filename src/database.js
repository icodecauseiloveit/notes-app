const mongoose = require('mongoose')

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB = process.env.MONGO_DB

const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

mongoose.connect(mongoURI)
    .catch(()=>{
        console.log('Database connected.')
    })