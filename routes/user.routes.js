import { Router } from 'express';
import { getUsers,  } from '../controlers/user,controller.js';
import {getUser} from '../controlers/user,controller.js'

import authorize from '../middlewares/auth.middleware.js'

const userRouter = Router();

// Get all users
userRouter.get('/', getUsers)



// Get user by id
userRouter.get('/:id',authorize,getUser )


// Create a new user
userRouter.post('/', (req, res) => {
  res.send({ title: 'Create new user' });
});

// Update user by id
userRouter.put('/:id', (req, res) => {
  res.send({ title: `Update user with id: ${req.params.id}` });
});

// Delete user by id
userRouter.delete('/:id', (req, res) => {
  res.send({ title: `Delete user with id: ${req.params.id}` });
});

export default userRouter;
