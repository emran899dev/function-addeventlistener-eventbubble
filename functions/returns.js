// Work System ALL

function evenify(num) {
    let result;
    if (num % 2 == 0) {
        result =  num;
    } else {
        result =  num*2;
    }
    return result;
}
function higer(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++){
    let element = num[i];
    sum = sum + element
    }
    return sum;
}

var result = evenify(5);
var square = result*result
console.log('result',square);

// Work System 1

function evenifyAll(number) {
    let evenArray = []
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        let result = evenify(num);
        evenArray.push(result)
    
    }
    return evenArray; 
}

let number = [3, 4, 6, 8, 12, 17, 19, 20, 29];
let numberEven = evenifyAll(number)
console.log(numberEven);

let sumAll = higer(number);
console.log(sumAll);
