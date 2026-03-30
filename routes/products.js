const express = require("express")
const router = express.Router()
let products = require('../data/product')

// route
// index
router.get("/",(req,res)=>{
    let stamp = new Date().toLocaleString()
console.log(`Logged in ${stamp}`)
     console.log( `user asked for products`)
    res.json(products)
})
router.get('/:id',(req,res)=>{
    const productID = Number(req.params.id);
    const requestedProduct = products.find(product => product.id == productID)
    console.log(`requested product is : ${requestedProduct}`)
    res.send(requestedProduct)
})

module.exports = router