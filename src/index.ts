import express from "express"
import { initMongoose } from "./db"
import router from './router'
import bodyParser from "body-parser"


const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/', router)


app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
    initMongoose()
})
