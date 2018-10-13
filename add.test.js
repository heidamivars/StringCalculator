//add.test.js

describe("String Calculator",function(){
	
	var addTest = StringCalculator.stringCalculator;
	
	it("should return 0 for an empty string", function(){
		expect(addTest.add("")).toEqual(0);
	})
	
	it("should return 1 for '1' string", function(){
		expect(addTest.add("1")).toEqual(1);
	})
	
	it("should return 3 for '1,2' string", function(){
		expect(addTest.add("1,2")).toEqual(3);
	})
});