const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin')

const app= express();

//ideal structure
app.use('/api/v1/user', userRouter);  //export a router //using riuter fucntion
app.use('api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);


app.listen(3000, ()=>{
    console.log(`running on port ${3000}`)
});
