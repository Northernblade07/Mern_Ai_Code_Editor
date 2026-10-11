import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())


app.get('/', (req, res)=>{
    res.json({"message" : "hello from gateway"})
}).listen(port, () => console.log(`Gateway started at ${port}`))