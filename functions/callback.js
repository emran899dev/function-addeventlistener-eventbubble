// // work system is 1;

function explainCallback(name, age, cb) {

    console.log('Hello', name);
    console.log('Age', age);
    cb()
}

function washHand() {
    console.log('wash hand with soap');
}
function takeShower() {
    console.log('Take shower');
}

explainCallback('emranNazir', 20,washHand);
explainCallback('abdullha', 21, takeShower);

// work system is 2;

function calculation(a, b, callback) {
    let x = a + b;
    let y = a - b;
    var result = callback(x, y);
    return result;
}
function sum(x, y) {
    return x + y;
}



let result1 = calculation(10, 5, sum);
let result2 = calculation(10, 5,function (x, y) {
    return x - y;
});
console.log(result1,result2);