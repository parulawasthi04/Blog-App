import express from 'express';
import mongoose, { connect } from 'mongoose';
import 'dotenv/config' ;
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';


const app = express();

await connectDB();


//middlewares
app.use(cors());
app.use(express.json());

//Home route
app.get('/', (req, res) => {res.send("API is working")})
app.use('/api/admin',adminRouter);
app.use('/api/blog', blogRouter);

// Error handling middleware
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

export default app;