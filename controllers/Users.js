var BaseController = require("./Base"),
	View = require("../views/Base"),
	User = require("../models/Users");

// TODO:
module.exports = function(app){

	app.get('/users', function(req, res){
		var users = req.db.collection('users').find();
		if (!users) {
			console.log("no users found");
			res.redirect('/');
		} else {
			res.render('users/index', {users : users});
		}
	});

	app.get('/users/:id', function(req, res){
		var u = User.getById(req.params.id);
		if (!u) {
			console.log('no user with that id');
		} else {
			console.log(u);
			res.render('users/single', {user : u});
		}
	});

};


