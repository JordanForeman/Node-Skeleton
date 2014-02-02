var BaseController = require("../controllers/Base");

describe("Base Controller", function(){
	it("should have a method extend which returns a child instance", function(next){
		
		expect(BaseController.extend).toBeDefined();
		
		var childName = "My Child Controller";
		var child = BaseController.extend({name: childName});
		
		expect(child.run).toBeDefined();
		expect(child.name).toBe(childName);
		next();
	});

	it("should be able to create different children", function(next){

		var childA = BaseController.extend({name: "child a", customProperty: 'value'});
		var childB = BaseController.extend({name: "child b"});

		expect(childA.name).not.toBe(childB.name);
		expect(childB.customProperty).not.toBeDefined();
		next();

	});
});