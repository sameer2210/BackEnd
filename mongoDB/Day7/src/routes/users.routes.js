const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller");

/* /users/register */

router.post('/register', userController.registerUserController);

/* /users/login */

router.post('/login', userController.loginUserController);


/* /users/profile [GET] */

router.get('/profile', userController.profileUserController);



module.exports = router