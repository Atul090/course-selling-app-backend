const express = require('express');
const dotenv=require('dotenv');
const {mongoose}=require('mongoose');

dotenv.config();
    
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin')

const app= express();
app.use(express.json()); //added middle ware for using json in express 

app.use('/api/v1/user', userRouter);  //export a router //using riuter fucntion
app.use('/api/v1/course', courseRouter);
app.use('api/v1/admin', adminRouter);

//add routes for admin
//and super admin 

async function main(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('connect to db'))
    .catch( err => console.log(err));

    app.listen(3000, ()=>{
        console.log(`running on port ${3000}`)
    });

}


main();