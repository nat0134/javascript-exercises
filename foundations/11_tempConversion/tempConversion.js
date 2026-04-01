const convertToCelsius = function(fahrenheit) {
  let convertC = (fahrenheit - 32) * (5/9);
  if (!Number.isInteger(convertC)) {
    return Number(convertC.toFixed(1));
  }
  return convertC;
};

const convertToFahrenheit = function(celsius) {
  let convertF = celsius * (9/5) + 32; 
  if (!Number.isInteger(convertF)) {
    return Number(convertF.toFixed(1));
  }
  return convertF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
