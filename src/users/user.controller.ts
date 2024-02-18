
import { Request, Response } from "express"
import  User  from "./user.model"
export async function getUser(req: Request, res: Response) {
    try {
        const user = await User.findById({_id: req.params.id})
        res.send({ user })

    } catch (error) {
        res.send({ error })
    }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find()
    res.send(users)
  } catch (err) {
    res.status(500).send(err)
  }
  }

  export async function createUser(req: Request, res: Response) {
    try {
      const { name, age, tasks, rewards, points } = req.body
      const user = new User({ name, age, tasks, rewards, points })
      await user.save()
      res.send(user)
    } catch (err) {
      res.send({ err })
    }
  }

  export async function updateUser(req: Request, res: Response) {
    try {
      const updates = req.body
      const mongooseResponse = await User.updateOne({ _id: req.params.id}, updates)
      res.send(mongooseResponse)
    } catch (err) {
      res.status(500).send(err)
    }
  }

  export async function archiveUser(req: Request, res: Response) {
    res.send(req.url)
  }

  export async function deleteUser(req: Request, res: Response) {
    try {
      const userId = req.params.id
      const mongooseResponse = await User.deleteOne({ _id: userId})
      res.send(mongooseResponse)
    } catch (err) {
      res.status(500).send(err)
    }
  }
