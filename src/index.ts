import express from "express"
import { initMongoose } from "./db"
import router from './router'
import bodyParser from "body-parser"
import cors from 'cors'


const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)


app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
    initMongoose()
})
