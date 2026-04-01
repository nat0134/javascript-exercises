const sumAll = function(numA, numB) {
    if (!Number.isFinite(numA) || !Number.isFinite(numB) 
        || numA < 0 || numB < 0
        || !Number.isInteger(numA) || !Number.isInteger(numB)) {
        return "ERROR";
    }
    // create two variables smaller & larger and initialize sum
    let lo = 0;
    let high = 0;
    let sum = 0;
    // if numA < numB then smaller = numA and larger = numB
    // else smaller = numB and larger = numA
    if (numA < numB) {
        lo = numA;
        high = numB;
    } else if (numB < numA) {
        lo = numB;
        high = numA;
    }
    // starting from smaller value to larger value
    for (let i = lo; i <= high; i++) {
    // find all values in between and their sum
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
