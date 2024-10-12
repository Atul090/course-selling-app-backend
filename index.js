const express = require('express');
const {createUserRoutes} = require('./routes/user');
const { createCourseRoutes } = require('./routes/course');
const app= express();

//ideal structure
app.use('/api/v1/user', userRouter);  //export a router //using riuter fucntion
app.use('/api/v1/course', courseRouter);

createUserRoutes(app); //exporting a fiunction
createCourseRoutes(app);

app.listen(3000);

