const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }

    let repeat = "";
    for (let i = 1; i <= num; i++) {
        repeat += str;
    }
    
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
