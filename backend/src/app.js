import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"
import productRouter from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'
import paymentRouter from './routes/payment.route.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts',cartRouter)
app.use('/api/payments', paymentRouter)
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(status).json({
    success: false,
    message,
    data: err.data,
    error: err.error
  });
});

export default app