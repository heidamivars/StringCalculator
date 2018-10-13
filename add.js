// add.js

function add(numbers){
    if(typeof numbers === '""' || undefined ){
        return 0; //return 0 if input has no value
    }
    
    var sum = 0;
    do{
        sum = sum + numbers%10;
        numbers = Math.floor(numbers/10)
    } while(numbers);
      return sum;
    
    //reiknar summu inputs en það er ekki hægt að hafa kommuna með hérna... 
    
}

console.log(add("12"));