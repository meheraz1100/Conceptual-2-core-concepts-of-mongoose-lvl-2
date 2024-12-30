// req and res manage

import User from './user.model'

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await User.create(payload)

    res.json({
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

export const userController = {
  createUser,
}
