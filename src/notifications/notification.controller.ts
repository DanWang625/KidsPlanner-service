import { Request, Response } from "express"
import  Notification  from "./notification.model"
export async function getNotification(req: Request, res: Response) {
    try {
        const notification = await Notification.findById(req.params.id).populate('user')
        res.send({ notification })

    } catch (error) {
        res.send({ error })
    }
}

export async function getNotifications(req: Request, res: Response) {
    try {
      const notifications = await Notification.find().populate('user')
      res.send(notifications)
    } catch (err) {
      res.send(err)
    }
  }

  export async function createNotification(req: Request, res: Response) {
    try {
      const { message, userId } = req.body
      const notification = new Notification({ message, user: userId})
      await notification.save()
      res.send({ "successfully created a notification": notification })
    } catch (err) {
      res.send(err)
    }
  }

  export async function updateNotification(req: Request, res: Response) {
    try {
      const updates = req.body
      const mongooseResponse = await Notification.updateOne({ _id: req.params.id}, updates)
      res.send({ "successfully updated a notification": mongooseResponse})
    } catch (err) {
      res.send(err)
    }
  }

  export async function deleteNotification(req: Request, res: Response) {
    try {
      const mongooseResponse = await Notification.deleteOne({ _id: req.params.id })
      res.send({ "successfully deleted a notification": mongooseResponse})
    } catch (err) {
      res.send(err)
    }
  }
