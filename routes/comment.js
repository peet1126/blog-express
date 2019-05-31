var router = require('express').Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */




router.post('/comment/:id', isLoggedIn, usersCtrl.comment);


module.exports = router;


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}