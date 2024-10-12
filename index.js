const express = require('express');

const app= express();

app.post('/user/signup', function (req, res){
    res.json({
        message: "sign up endpoint"
    })
})


app.post('/user/signin', function(req,res){
    res.json({
        message: "sign in endpoint"
    })
})

app.get('/user/purchases', function(req,res){
    res.json({
        message: "what are the courses purched by user"
    })
})

app.get('/courses', function(req, res){
    res.json({
        message: "all couses endpoint"
    })
})

app.post('/user/purchase', function (req, res){
    res.json({
        message: " when a user wishes to purchase a course "
    })
})


app.listen(3000);
