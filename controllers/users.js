const User = require('../models/user');


module.exports = {
    index,
    addBlog,
    deleteBlog,
    
};




function addBlog(req, res, next) {
    var person = req.user
    console.log(person, req.body);
    person.blogs.push(req.body);
    person.save(() => {
        res.redirect('/users')
    })
    
    // req.user.blogs.push(req.body);
    // console.log(req.user)
    // console.log('was hit')
    // req.user.save(function(err) {
        // res.redirect('/users');
        // });
    };
    
    function index(req, res, next) {
        console.log(req.query)
        let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
        let sortKey = req.query.sort || 'name';
        User.find(modelQuery)
        .sort(sortKey).exec(function(err, users) {
            if (err) return next(err);
            res.render('users/index', { users, 
                name: req.query.name, 
                sortKey,
                user: req.user
            });
        });
    }
    
    
            
    function deleteBlog(req, res, next) {
        console.log('here');
        User.findOne({'blogs._id' : req.params.id}, function(err, user) {
            console.log(req.params.id)
            user.blogs.id(req.params.id).remove();
            user.save(function(err) {
                res.redirect('/users');
            });
        });
    };
            