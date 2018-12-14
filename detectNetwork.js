// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var len = cardNumber.length;
  var pre = cardNumber.slice(0,2); 

  if(len === 14 && ['38','39'].includes(pre)){
    return "Diner\'s Club";
  } else if (len=== 15 && ['34','37'].includes(pre)){
  	return "American Express";
  } else if (len=== 16 && ['51','52','53','54','55'].includes(pre)){
  	return "MasterCard";
  } else if ([13,16,19].includes(len) && cardNumber.slice(0,1) === '4'){
  	return "Visa";
  } else if ([16,17,18,19].includes(len) && (cardNumber.slice(0,4) === '6011' || ['644','645','646','647','648','649'].includes(cardNumber.slice(0,3)) || ['65'].includes(pre))){
    return "Discover";
  } else if (len >= 12 && len <= 19 && ['5018', '5020', '5038', '6304'].includes(cardNumber.slice(0,4))){
    return "Maestro";
  } else {
    return 'CardNumber unsuccessful, Pre:' + pre + ' Len:' +len;
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};