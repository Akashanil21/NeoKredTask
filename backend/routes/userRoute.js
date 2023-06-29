const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const isAuth = require('../utils.js')
const {userRegister, userLogin}  = require('../controllers/userController.js');


const userRouter = express.Router();

userRouter.post("/register", expressAsyncHandler(userRegister));

userRouter.post("/login", expressAsyncHandler(userLogin))

module.exports = userRouter;