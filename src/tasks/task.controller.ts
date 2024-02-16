import { Request, Response } from "express"
import  Task  from "./task.moudel"
export async function getTask(req: Request, res: Response) {
    try {
        const user = await Task.findById({_id: req.params.id})
        res.send({ user })

    } catch (error) {
        res.send({ error })
    }
}

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.find()
    res.send(tasks)
  } catch (err) {
    res.send(err)
  }
  }

  export async function createTask(req: Request, res: Response) {
    try {
      const { title, description, status, points } = req.body
      const task = new Task({ title, description, status, points })
      await task.save()
      res.send({ "successfully created a task": task })
    } catch (err) {
      res.send(err)
    }
  }

  export async function updateTask(req: Request, res: Response) {
    try {
      const updates = req.body
      const mongooseResponse = await Task.updateOne({ _id: req.params.id }, updates)
      res.send({ "successfully updated a task": mongooseResponse })
    } catch (err) {
      res.send(err)
    }
  }

  export async function deleteTask(req: Request, res: Response) {
    try {
      const mongooseResponse = await Task.deleteOne({ _id: req.params.id })
      res.send({ "successfully deleted a task": mongooseResponse })
    } catch (err) {
      res.send(err)
    }
  }
