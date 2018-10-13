// add.js

function add(numbers){
    if(typeof numbers === 'null'){
        return 0; //return 0 if input has no value
    }
    return numbers.length; //return lenght of string
}

console.log(add(""));