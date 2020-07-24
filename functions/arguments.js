function addNumbers() {
    // console.log(arguments);
    // return num1 + num2;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = num + sum;
        // console.log(sum);
        
    }
    return sum;
}

let result = addNumbers(10, 6, 32, 12, 23, 10);
console.log(result);