const removeFromArray = function(arr, ...theArgs) {
    return arr.filter(item => !theArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
