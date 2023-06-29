const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const isAuth = require('../utils.js')
const authMiddleware = require('../middleware/authMiddleware')
const {userRegister, userLogin, getProfile, userLogout}  = require('../controllers/userController.js');


const userRouter = express.Router();

userRouter.post("/register", expressAsyncHandler(userRegister));

userRouter.post("/login", expressAsyncHandler(userLogin));

userRouter.get("/get-user-by-id",expressAsyncHandler(getProfile));

userRouter.get("/logout", expressAsyncHandler(userLogout))

module.exports = userRouter;