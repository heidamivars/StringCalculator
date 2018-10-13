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
    
		var negativeNumbers = numbers.match(/-\d+/g);
		if (negativeNumbers != null && negativeNumbers.length > 0) {
			throw new Error("negatives not allowed: " + negativeNumbers);
		}
		
    //error message fyrir neikvæðar tölur sem eru settar í string
    

		var regex = new RegExp('[' + defaultDelimiters + ']+', 'g');
		var inputs = numbers.split(regex);
		
    
		return result;


};
 
console.log(add("1, -2, -3")); //error: negatives not allowed: -2, -3
    
