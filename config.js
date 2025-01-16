const JWT_admin_PASSWORD=process.env.JWT_admin_PASSWORD;
const JWT_USER_PASSWORD= process.env.JWT_USER_PASSWORD;

//add all the sensitive info here 
//import from env
//export to all modules

module.exports={
    JWT_USER_PASSWORD,
    JWT_admin_PASSWORD
}