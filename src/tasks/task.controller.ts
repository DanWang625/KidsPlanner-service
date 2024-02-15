import { Request, Response } from "express"
import  Task  from "./task.moudel"
export async function getTask(req: Request, res: Response) {
    try {
        const user = await Task.findById(req.params._id)
        res.send({ user })

    } catch (error) {
        res.send({ error })
    }
}
