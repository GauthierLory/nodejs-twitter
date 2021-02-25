const router = require('express').Router();
const { signin, signinForm, logout } = require('../controllers/auth.controller')

router.get('/signin/form', signinForm);
router.post('signin', signin)
router.delete('/logout', logout)

module.exports = router;