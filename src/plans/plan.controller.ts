import { Request, Response } from "express"
import  Plan  from "./plan.model"
export async function getPlan(req: Request, res: Response) {
    try {
        const plan = await Plan.findById(req.params.id)
        res.send({ plan})

    } catch (error) {
        res.send({ error })
    }
}

export async function getPlans(req: Request, res: Response) {
    try {
      const plans = await Plan.find().populate('user')
      res.send(plans)
    } catch (err) {
      res.send(err)
    }
  }

  export async function createPlan(req: Request, res: Response) {
    try {
      const { title, description, tasks, userId } = req.body
      const plan = new Plan({ title, description, tasks, user: userId })
      await plan.save()
      res.send({ "successfully created a plan": plan })
    } catch (err) {
      res.send(err)
    }
  }

  export async function updatePlan(req: Request, res: Response) {
    try {
      const updates = req.body
      const mongooseResponse = await Plan.updateOne({ _id: req.params.id}, updates)
      res.send({ "successfully updated a plan": mongooseResponse})
    } catch (err) {
      res.send(err)
    }
  }

  export async function deletePlan(req: Request, res: Response) {
    try {
      const mongooseResponse = await Plan.deleteOne({ _id: req.params.id })
      res.send({ "successfully deleted a plan": mongooseResponse})
    } catch (err) {
      res.send(err)
    }
  }
