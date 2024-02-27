import express from 'express'

import {
  getUser,
  registerUser,
  updateUser,
  deleteUser,
  getUsers,
  loginUser,
} from './users/user.controller'

// import {
//   getTask,
//   getTasks,
//   createTask,
//   updateTask,
//   deleteTask,
// } from './tasks/task.controller'

// import {
//   getReward,
//   getRewards,
//   createReward,
//   updateReward,
//   deleteReward,
// } from './rewards/reward.controller'
import {
  getPlan,
  getPlans,
  createPlan,
  updatePlan,
  deletePlan
} from './plans/plan.controller'
import {
  getNotification,
  getNotifications,
  createNotification,
  deleteNotification
} from './notifications/notification.controller'

const router = express.Router()

router.use((req, res, next) => {
    console.log(`
      ${req.method} - ${req.url} ${new Date()}
    `)
    if (req.method === 'POST') {
      console.log('request body: ')
      console.log(JSON.stringify(req.body, null, 2))
    }
    next()
  })

  // User routes
  router.route('/register').post(registerUser)
  router.route('/login').post(loginUser)
  router.route('/users').get(getUsers)

  router.route('/users/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

  // // Task routes
  // router.route('/tasks')
  //   .get(getTasks)
  //   .post(createTask)

  // router.route('/tasks/:id')
  //   .get(getTask)
  //   .put(updateTask)
  //   .delete(deleteTask)

  // Reward routes
  // router.route('/rewards')
  //   .get(getRewards)
  //   .post(createReward)

  // router.route('/rewards/:id')
  //   .get(getReward)
  //   .put(updateReward)
  //   .delete(deleteReward)

  // Plan routes
  router.route('/plans')
    .get(getPlans)
    .post(createPlan)

  router.route('/plans/:id')
    .get(getPlan)
    .put(updatePlan)
    .delete(deletePlan);

  // Notification routes
  router.route('/notifications')
    .get(getNotifications)
    .post(createNotification)

  router.route('/notifications/:id')
    .get(getNotification)
    .put(createNotification)
    .delete(deleteNotification);


export default router
