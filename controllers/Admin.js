var BaseController = require("./Base"),
	View = require("../views/Base");

//TODO: refactor
var viewMap = {
	"/admin": {
		slug: "/admin",
		view: "admin"
	},
	"/admin/login": {
		slug: "/admin/login",
		view: "admin-login"
	}
};

module.exports = BaseController.extend({

	name: "Admin",

	run: function(req, res, next) {
		if (!this.authorize(req)){
			var v = new View(res, 'admin-login');
			v.render({
				title: 'Please Login'
			});
		}

		var v = new View(res, 'admin');
		v.render({
			title: 'Administration',
			content: 'Welcome to the control panel'
		});
	},

	authorize: function(req) {
		return (
			req.session &&
			req.session.lims &&
			req.session.lims === true
		) || (
			req.body &&
			req.body.username === this.username &&
			req.body.password === this.password
		)
	},

	template: function(req) {
		return viewMap[req.url].view;
	}

});