const express = require('express');
const { signup } = require('../controllers/user');
const router = express.Router();



router.post('/signin',(request,response)=>{

});

router.post('/signup',signup);

module.exports = router;
