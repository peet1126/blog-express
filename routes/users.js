var router = require('express').Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */


router.get('/', isLoggedIn, usersCtrl.index);

router.post('/blog', isLoggedIn, usersCtrl.addBlog);

router.delete('/blog/:id', isLoggedIn, usersCtrl.deleteBlog);
module.exports = router;


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}