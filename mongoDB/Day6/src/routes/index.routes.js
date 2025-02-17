const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send(`hello world`);
});

router.get('/about', (req,res) => {
    res.send(`about page`);
})

module.exports = router;