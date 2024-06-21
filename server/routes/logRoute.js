const express = require('express');
// const { addOrder, updateOrderStatus, viewOrders } = require('../controllers/orderController');

const logRouter = express.Router();

userRouter.post("/add", addLog)
userRouter.get("/list", listLog)

module.exports = { orderRouter }