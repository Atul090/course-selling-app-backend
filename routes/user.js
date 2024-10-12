

function createUserRoutes(app){
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

}


moduile.exports = {
    createUserRoutes
}