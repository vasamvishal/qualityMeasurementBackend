var express = require('express');
var router = express.Router();
let controller=require('../controller/controller');
router.get('/convert',controller.conversion)
module.exports=router;