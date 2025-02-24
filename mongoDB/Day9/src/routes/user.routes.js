const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const jwt = require('jsonwebtoken')

/* /users/register [get] */
router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/register', userController.registerUserController)


/* /users/profile [get]   // protected*/

router.get('/profile',(req,res,next) => {
    try{
        const token = req.cookies.token;
        jwt.verify(token,"node-auth-secret")
        next()
    }catch (err){
        console.log(err)
        res.send('unauthorized')
    }

},userController.profileViewController)

// router.get('/profile',(req,res)=>{
//     const token = req.cookies.token
// })

module.exports = router