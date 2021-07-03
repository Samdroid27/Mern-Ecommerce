const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user'); 

env.config();

//hello api

app.use(express.json());

// mongo db connection
//
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vivxz.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    }
).then(()=>{
    console.log('Database connected');
});


app.use('/api',userRoutes);

// app.get('/',(request,response,next)=>{
//     response.status(200).json({
//         message: 'Hello from Server'
//     });
// });

// app.post('/data',(request,response,next)=>{
//     response.status(200).json({
//         message: request.body
//     });
// });

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on ${process.env.PORT}`);
});