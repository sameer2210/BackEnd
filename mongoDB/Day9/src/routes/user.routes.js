const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const userMiddleware = require("../middlewares/user.middleware")
const jwt = require('jsonwebtoken')

/* /users/register [get] */
router.get('/register', userController.registerViewController)

/* /users/register [post] */
router.post('/register', userController.registerUserController)


router.get('/login', userController.loginViewController)

router.post('/login', userController.loginUserController)

router.get('/feed', userMiddleware.authUser,userController.feedViewController)


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


/* /users/profile [get] */
// router.get('/profile', (req, res) => {
//     const token = req.cookies.token
// })

module.exports = router