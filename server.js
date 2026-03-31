const express = require("express")
const cors = require("cors")
const app = express();

const productsRouter = require('./routes/products')
const orderRouter = require('./routes/orderList')

const PORT = 8080;
// middle ware
app.use(cors({
   origin: '*'
}))
app.use(express.json())

// routes
app.get('/',(req,res)=>{
res.json({message:'youre connected with ecommerce api'});
let stamp = new Date().toLocaleString()
console.log(`Logged in ${stamp}`)
})
app.use('/products',productsRouter)
app.use('/orders', orderRouter)

app.listen(PORT,()=>{
    console.log(`server is connected with http://localhost:${PORT}`)
})
