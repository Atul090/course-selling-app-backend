const {Router}=require('express');
const {courseModel, purchaseModel}= require('../db');
const { userMiddleware } = require('../middlewares/user');
const courseRouter=Router();

courseRouter.get('/preview', async function(req, res){
    //doent need auth
    // just to preview the contents
    const courses= await courseModel.find({})

    res.json({
        message: " ALL the course ",
        courses
    })
})



courseRouter.post('/purchase', userMiddleware, async function (req, res){
    // expect the user to pay fot the course
    const userId=req.userId;
    const courseId=req.body.courseId;
    // create an entry in the course table
    //avoid users buying the same course
    //check if the user has actually paid the prce
    
    await purchaseModel.create({
        userId: userId,
        courseId: courseId
    })
    res.json({
        message: " you have successfully bought the course "
    })
})


module.exports={
    courseRouter: courseRouter
}