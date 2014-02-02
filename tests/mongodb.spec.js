describe("MongoDB", function() {

	// Test that there is an active MongoDB Connection
	it("is there a server running", function(next){
		var MongoClient = require('mongodb').MongoClient;

		//TODO: use config to generate this url
		var host = 'mongodb://127.0.0.1:27017/LIMS';
		
		MongoClient.connect(host, function(err, db){
			expect(err).toBe(null);
			next();
		});
	});

});