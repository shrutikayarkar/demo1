var express = require("express");
var router = express.Router();

router.use('/', require('./index')); 
router.use('/about', require('./about'));
router.use('/contact', require('./contact'));
router.use('/help', require('./help'));
router.use('/signup', require('./signup'));
router.use('/admin', require('./admin'));


module.exports=router;