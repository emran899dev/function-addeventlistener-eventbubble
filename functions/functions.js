// Work System ALL

function evenify(num) {
    if (num % 2 == 0) {
        console.log(num,': number is event');
    } else {
        console.log(num*2,': number is odd');
    }
}

// Work System 1

// function evenifyAll(number) {
//     for (let i = 0; i < number.length; i++) {
//         const num = number[i];
//         evenify(num)
    
//     }
// }

// Work System 2

function evenifyAll(number) {
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        if (num % 2 == 0) {
            console.log(num,': number is event');
        } else {
            console.log(num*2,': number is odd');
        }
    
    }
}

let number = [3, 4, 6, 8, 12, 17, 19, 20, 29];
evenifyAll(number)

// Work System 3

// for (let i = 0; i < number.length; i++) {
//     const num = number[i];
    
    // if (num % 2 == 0) {
    //     console.log(num,': number is event');
    // } else {
    //     console.log(num*2,': number is odd');
    // }

//     evenify(num)
    
// }

let friendAge = [16, 17, 18, 19, 20, 21, 23];
evenifyAll(friendAge)

// Work System 4

// for (let i = 0; i < friendAge.length; i++) {
//     const age = friendAge[i];
//     // if (age % 2 == 0) {
//     //     console.log(age,': number is event');
//     // } else {
//     //     console.log(age*2,': number is odd');
//     // }

//     evenify(age)
    
// }
