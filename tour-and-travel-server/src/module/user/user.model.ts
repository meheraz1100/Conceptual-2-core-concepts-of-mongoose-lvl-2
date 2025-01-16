import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please Provide your name'],
  },
  age: { type: Number, required: [true, 'Please enter your age'] },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
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

const User = model('User', userSchema)
export default User
