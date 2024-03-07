
import { Request, Response } from "express"
import  User  from "./user.model"
import Plan from "../plans/plan.model"
import Notification from "../notifications/notification.model"
import bcrypt from 'bcrypt'

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

  export async function updateUser(req: Request, res: Response) {
    try {
      const updates = req.body
      const mongooseResponse = await User.updateOne({ _id: req.params.id}, updates)
      res.send({ "user was successfully updated": mongooseResponse })
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
      const mongooseResponse = await User.deleteOne({ _id: userId })
      const mongoosePlans = await Plan.deleteMany({ user: userId })
      const mongooseNotificatons = await Notification.deleteMany({ user: userId })
      res.send({ "user was successfully deleted": mongooseResponse })
    } catch (err) {
      res.status(500).send(err)
    }
  }

  export async function loginUser(req: Request, res: Response) {
    try {
      const { name, password } = req.body
      const user = await User.findOne({ name: name })
      if (!user) {
        return res.status(404).send({ success: false, message: "User not found" })
      }
      if (typeof user.password === "string") {
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
          return res.status(401).send("sorry, invalid name or password, please try again")
        }
        return res.status(200).send({ "You successfully logged in": user })
      }
    } catch (err) {
      res.status(500).send({ "An error occured": err })
    }
  }

 export async function registerUser(req: Request, res: Response) {
    try {
      const { name, age, password } = req.body
      const exsitingUser = await User.findOne({ name: name })
      if (exsitingUser) {
        return res.status(400).send("user already exists, please use another name")
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const user = new User({
        name: name,
        age: age,
        password: hashPassword
      })
      await user.save()
      res.send({ "Congrates! You've create your account successfully!": user })
    } catch (err) {
      res.send({ err })
    }
  }
