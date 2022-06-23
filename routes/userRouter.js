const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

//Register a user
router.post('/register', userCtrl.registerUser )

//login a user
router.post('/login', userCtrl.loginUser )

//verify token
router.get('/verify', userCtrl.verifiedToken)



module.exports = router