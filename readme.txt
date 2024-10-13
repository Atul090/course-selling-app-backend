Course Selling Apllication backend analysis

## create index.js
## add express and json web tokens
## add routing for user login, signup, create a course, purchse a couse, monitr a course -> view
## create a route skeleton
## add middlewares for user and admin auth
## add database
## define schema for user, admin, course, purchase
## use routing for ease



first build backend then frontend
set up mongo database
design the schema structure and the logic



step 1>
create index and basic routes
step 2> 
add routers and handle req efficiently
step 3>
add user course and admin rooutes
step 4>
create a schema
> user
>admin
>course
>purchases


 SCHEMA DESIGN:

 user schema --
    _id > default object _id
    email
    first name
    lastname
    password

admin schema:
    _id
    email
    first name
    passsword
    lastname

Course schema:
    _id
    title
    price
    iamge url
    description

purchase schema:
    _id
    courseID - linekd to course id in course schema
    userID - linekd to user id in user scheamm


13th oct
// only start if database is up
// added main fuction

create middlewares`

use express.json();
//helps in parsing the incomming json requests andis based on bodu parser middleware

if the user exits geenrate a tokens  // SIGNIN PROCESS  
have a saperate kwt password for user and admin sinins 


TO: DO:  -----

USER ROUTER
plain text password should not be stored in the database
hash the passsword and then check with th passsword provided by used and using 
Bcrypt library


ADMIN ROUTER