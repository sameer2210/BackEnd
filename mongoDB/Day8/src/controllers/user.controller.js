const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// module.exports.registerViewController = (req, res) => {
//     res.render('register')
// }


// module.exports.registerUserController = async (req, res) => {
    module.exports.register = async (req, res) => {
     const { username, email, password } = req.body

     const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
     }, "node-auth-secret"
    )

    // res.cookie("token", token)
    res.status(201).json({
        user, token
    })
}

module.exports.login = async(req,res) => {
    const {email, password} = req.body
    const user = await userModel.findOne({
        email
    })
    if(!user){
        return res.status(401).json({message: "Invalid email"})
    }
    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch) {
        return res.status(401).json({message: "Invalid password"})
    }
    const token = jwt.sign({
        id: user._id,
        email: user.email
    },"node-auth-secret")

    res.status(200).json({token,user,message: "Login successful"})
}

module.exports.profile = (req,res) => {
    res.status(200).json({ message: "profile "})
}