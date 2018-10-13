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
            var numberToAdd = parseInt(inputs[i]);
			if (numberToAdd <= 1000) {
			result += parseInt(inputs[i]);
		  } 
        }
    
    //þarf ekki að breyta neitt fyrir lið 2 (already ok)
    
		var negativeNumbers = numbers.match(/-\d+/g);
		if (negativeNumbers != null && negativeNumbers.length > 0) {
			throw new Error("negatives not allowed: " + negativeNumbers);
		}
		
    //error message fyrir neikvæðar tölur sem eru settar í string
    
    if (numbers.indexOf('//') == 0) {
			var customDelimiter = numbers.substring(numbers.indexOf('//') + 2, numbers.indexOf('\n'));
			numbers = numbers.substring(numbers.indexOf('\n') + 1);

			// tjekk "//[delimiter]\n" 
        
			var delimiters = customDelimiter.match(/[*]+/);

			if (delimiters != null) {
				for (i = 0; i < delimiters.length; i++) {
					defaultDelimiters.push(delimiters[i]);
				}
			} else {
                defaultDelimiters.push(customDelimiter);
			}
		}
		
    
		return result;


};
 
console.log(add("//;\n1;2")); //2
    
