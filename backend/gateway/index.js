import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import proxy from 'express-http-proxy'

dotenv.config()

const port = process.env.PORT || 8000
const frontendurl = process.env.FRONTEND_URL
const app = express()
app.use(cors({
    origin: frontendurl, credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/auth" ,proxy(process.env.AUTH_SERVICE))

app.get('/', (req, res)=>{
    res.json({"message" : "hello from gateway"})
}).listen(port, () => console.log(`Gateway started at ${port}`))