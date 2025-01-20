import express, { Request, Response } from 'express'
import userRouter from './module/user/user.route'
import tourRouter from './module/tour/tour.route'

const app = express()

// middlewere
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)

// POST : api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live!!!',
  })
})

export default app
