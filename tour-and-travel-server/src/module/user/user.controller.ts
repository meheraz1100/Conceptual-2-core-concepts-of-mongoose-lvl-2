// req and res manage
import { Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await userService.createUser(payload)

    res.json({
      status: true,
      message: 'User Created Successfully',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser()

    res.send({
      status: true,
      message: 'Users getting successfully!!',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong!!',
      error,
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser()

    res.send({
      status: true,
      message: 'User getting successfully!!',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong!!',
      error,
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.updateUser()

    res.send({
      status: true,
      message: 'User getting successfully!!',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong!!',
      error,
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.deleteUser()

    res.send({
      status: true,
      message: 'User getting successfully!!',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong!!',
      error,
    })
  }
}

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
