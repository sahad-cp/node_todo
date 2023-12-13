const express = require('express');
const connectDB = require('./config/db')

connectDB();
const app = express();
const Todo = require('./routes/todo')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/todo",Todo);

app.listen(5000,()=>console.log("running"))