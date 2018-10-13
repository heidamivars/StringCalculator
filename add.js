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
      return parseInt(sum);
    
    //reiknar summu inputs en það er ekki hægt að hafa kommuna með hérna... 

}

console.log(add("12345")); //þetta höndlar unknown amount of numbers nú þegar en hvernig er hægt að leyfa bara 3 tölur af stærðinni 0,1,2?