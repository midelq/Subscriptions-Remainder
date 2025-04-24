import mongoose from 'mongoose'

const userSchema = new mongoose.Schema( {
  name:{

    type:String,
    required:[true,'User Name is required'],
    trim:true,
    minLength:2,
    maxLength:50,
},
  email:{
    type:String,
    required:[true,'User Name is required'],
    trim:true,
    unique:true,
    lowercase:true,
    minLength:2,
    maxLength:50,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email address']
  },
  password:{
    type:String,
    required:[true,'User Password is required'],
    minLength:6,
  }


},{timestamps:true})



const User= mongoose.model('User', userSchema);

export default User;