const removeFromArray = function(arr, ...theArgs) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < theArgs.length; j++) {
            if (arr[i] === theArgs[j]) {
                arr.splice(i, 1);
            } 
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
