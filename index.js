import express from "express"
// import initMongoose from"./db"
import userRouter from "./users/user.controller"
import taskRouter from "./tasks/task.controller"

const app = express()
const port = 3000

app.use('/', (req, res, next) => {
    console.log({ req_method: req.method })
    console.log({ req_body: req.body })
    next()
})

app.use('/users', userRouter)
app.use('/tasks', taskRouter)

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
    // initMongoose()
})
