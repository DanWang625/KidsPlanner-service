import { Request, Response } from "express"
import  Reward  from "./reward.moudel"
export async function getReward(req: Request, res: Response) {
    try {
        const user = await Reward.findById( {_id: req.params.id} )
        res.send({ user })

    } catch (error) {
        res.send({ error })
    }
}

export async function getRewards(req: Request, res: Response) {
    try {
      const rewards = await Reward.find()
      res.send(rewards)
    } catch (err) {
      res.send(err)
    }
  }

  export async function createReward(req: Request, res: Response) {
    try {
      const { name, description, costs } = req.body
      const reward = new Reward({ name, description, costs })
      await reward.save()
      res.send({ "successfully created a reward": reward })
    } catch (err) {
      res.send(err)
    }
  }

  export async function updateReward(req: Request, res: Response) {
    try {
      const updates = req.body
      const mongooseResponse = await Reward.updateOne({ _id: req.params.id}, updates)
      res.send({ "successfully updated a reward": mongooseResponse})
    } catch (err) {
      res.send(err)
    }
  }

  export async function deleteReward(req: Request, res: Response) {
    try {
      const mongooseResponse = await Reward.deleteOne({ _id: req.params.id })
      res.send({ "successfully deleted a reward": mongooseResponse})
    } catch (err) {
      res.send(err)
    }
  }
