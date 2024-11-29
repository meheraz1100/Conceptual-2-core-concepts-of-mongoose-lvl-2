import express, { Request, Response } from 'express'
import userRouter from './module/user/user.route'

const app = express()

// middlewere
app.use(express.json())

app.use("/api/user", userRouter)

// POST : api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live!!!',
  })
})

export default app
