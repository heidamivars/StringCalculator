// add.js

if(typeof StringCalculator == 'undefined') {
	StringCalculator = {}; //Undefined þegar string er tómur
}

function add(numbers){
    		var result = 0;
		
		if(0 === numbers.length)
			return result;   //returnar 0 þegar string er tómur
			
		var inputs = numbers.split(/[\n,]+/);  //svo kommur sé ok og fleiri truflanir
		
		for (var i = 0; i < inputs.length; i++) {
			result += parseInt(inputs[i]);
		} 
    
    //þarf ekki að breyta neitt fyrir lið 2 (already ok)
		
		return result;


};
 
console.log(add("1\n2,3")); //6
    
