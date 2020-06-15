const router = require('express').Router();
const auth = require('./router/Auth/auth');
const components=require("./router/components")

router.use('/user',auth)
router.use('/v1',components)
module.exports = router;