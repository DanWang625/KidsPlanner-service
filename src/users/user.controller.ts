
import { Request, Response } from "express"
import  User  from "./user.model"
export async function getUser(req: Request, res: Response) {
    try {
        const user = await User.findById(req.params._id)
        res.send({ user })

    } catch (error) {
        res.send({ error })
    }
}
