import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'

dotenv.config()

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())


app.get('/', (req, res)=>{
    res.json({"message" : "hello from auth"})
}).listen(port, () =>{
    connectDb()
    console.log(`auth started at ${port}`)
    })