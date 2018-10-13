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

//Liður 1

it("should return 10 for '1,2,3,4' string", function(){
		expect(addTest.add("1,2,3,4")).toEqual(10);
	})

//Liður 2

it("should return 6 for '1\n2,3' string", function(){
		expect(addTest.add("1\n2,3")).toEqual(6);
	})

//Liður 3


// "negatives not allowed"
it("should throw an exception when numbers contain negative number", function () {
		expect(function () {
			addTest.add("1,-2,-3")
		}).toThrowError("negatives not allowed: -2,-3");
	});

//Liður 4


// Numbers bigger than 1000 should be ignored
	it("should return 2 for '1001,2' string. Numbers bigger than 1000 should be ignored", function () {
		expect(addTest.add("1001,2")).toEqual(2);
	})

//Liður 5


// Support different delimiters
it("should return 3 for '//;\n1;2' string, function () {
		expect(addTest.add("//;\n1;2")).toEqual(3);
	})
    
// Liður 6

