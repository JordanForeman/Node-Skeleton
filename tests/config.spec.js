describe("Configuration Setup", function(){

	// Load Default (local) config
	it("should load local configurations by default", function(next){
		var config = require('../config')();
		expect(config.mode).toBe('local');
		next();
	});
	
	// Load local config
	it("should load local configurations", function(next){
		var config = require('../config')('local');
		expect(config.mode).toBe('local');
		next();
	});

	// Load staging config
	it("should load staging configurations", function(next){
		var config = require('../config')('staging');
		expect(config.mode).toBe('staging');
		next();
	});

	// Load production config
	it("should load production configurations", function(next){
		var config = require('../config')('production');
		expect(config.mode).toBe('production');
		next();
	});
});