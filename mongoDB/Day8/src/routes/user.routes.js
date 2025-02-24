const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const jwt = require("jsonwebtoken")


/* /users/register [get] */
router.post('/register',userController.register)
// router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/login',userController.login)
// router.post('/register', userController.registerUserController)


/* /users/profile [get] */
router.get('/profile',(req,res,next)=>{
    // const token = req.cookies.token
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token,"node-auth-secret")
        next()
    }catch(err){
        res.status(401).json({ message: "Unauthorized"})
    }
 },userController.profile
)

module.exports = router