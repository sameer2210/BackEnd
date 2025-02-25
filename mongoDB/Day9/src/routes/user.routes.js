const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const jwt = require('jsonwebtoken')

/* /users/register [get] */
router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/register', userController.registerUserController)

router.get('/login', userController.loginViewController)

router.post('/login', userController.loginUserController)


/* /users/profile [get]   // protected*/
router.get('/profile',(req,res,next) => {
    try{
        const token = req.cookies.token;
        jwt.verify(token,"node-auth-secret")
        // next()
        res.render("show")
    }catch (err){
        console.log(err)
        res.send('unauthorized')
    }
},userController.profileViewController)


module.exports = router