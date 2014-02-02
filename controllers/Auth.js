var BaseController = require("./Base"),
	View = require("../views/Base"),
	passport = require('passport'),
	User = require("../models/Users");

module.exports = function (app) {

	app.get('/login', function(req, res){
		var view = new View(res, 'login');
		view.render({ title: 'Login', user: req.user });
		console.log('Login Pageview');
	});

	app.post('/login', passport.authenticate('local'), function(req, res){
	    res.redirect('/');
	});

	app.get('/register', function(req, res){
		var view = new View(res, 'register');
		console.log('Register Pageview');
		view.render({ title: 'Register' });
	});

	app.post('/register', function(req, res){
		User.register(new User({ email: req.body.email }), req.body.password, function(err, account){
			if (err) {
				console.log('error registering');
				console.log(err);
				return res.render('register', {account: account});
			}

			res.redirect('/');
		})
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

};
