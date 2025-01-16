import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please Provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  age: { type: Number, required: [true, 'Please enter your age'] },
  email: {
    type: String,
    required: [true, 'Please Provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    message: '{VALUE} is not a valid role',
    requied: true,
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    message: '{VALUE} is not a valid role',
    required: true,
  },
})

const User = model<IUser>('User', userSchema)
export default User
