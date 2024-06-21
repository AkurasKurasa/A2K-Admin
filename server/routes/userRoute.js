const express = require('express');
// const { addOrder, updateOrderStatus, viewOrders } = require('../controllers/orderController');

const userRouter = express.Router();

userRouter.post("/login", loginUser)
userRouter.post("/logout", logoutUser)
userRouter.post("/add", addUser)
userRouter.post("/remove", removeUser)

module.exports = { orderRouter }