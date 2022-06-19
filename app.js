import express from "express";
import UserRoutes from './routes/UserRoutes.js';
import mongoose from "mongoose";

const app = express();

mongoose
	.connect("mongodb://localhost:27017/shop", {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
	})
	.then((con) => {
		console.log('DB Successfully connected');
	});

app.use('/api/v1/users', UserRoutes);


app.listen(3000, () => console.log('Server Running at http://localhost:3000'));