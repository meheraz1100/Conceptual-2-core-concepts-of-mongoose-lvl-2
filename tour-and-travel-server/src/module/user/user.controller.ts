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
  } catch {
    res.json({
        status: false,
        message: ""
    })
  }
}

export const userController = {
  createUser,
}
