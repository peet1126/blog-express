var router = require('express').Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */


router.get('/', usersCtrl.index);
router.post('/:id/story', usersCtrl.new);


module.exports = router;
