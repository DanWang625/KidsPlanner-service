import { Request, Response } from "express"
import  Reward  from "./reward.moudel"
export async function getReward(req: Request, res: Response) {
    try {
        const user = await Reward.findById(req.params._id)
        res.send({ user })

    } catch (error) {
        res.send({ error })
    }
}
