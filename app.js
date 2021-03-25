const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
//import routes
const userRoutes = require('./routes/user')


//app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(()=> console.log('DB connected')); 

//route middleware
app.use("/api",userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log(`Sever is running on port ${port}`);
});