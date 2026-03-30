const express = require("express")
const router = express.Router()
let orderList = require('../data/orderList')

// route
// index
router.get("/",(req,res)=>{
    let stamp = new Date().toLocaleString()
console.log(`Logged in ${stamp}`)
     console.log( `user asked for Order List`)
    res.json(orderList)
})
router.get('/:orderId',(req,res)=>{
    const orderID = req.params.orderId;
    const requestedOrder = orderList.find(order => order.order_id == orderID )
    console.log(`requested Order is : ${requestedOrder}`)
    res.send(requestedOrder)
})

module.exports = router