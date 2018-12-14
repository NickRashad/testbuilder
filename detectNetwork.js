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
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var len = cardNumber.length;
  var pre = function(n = 2){
              return Number(cardNumber.slice(0,n));
            };
  var preRange = function(a,b){
    var range = [];
    for (var i = a; i <= b; i++){
      range.push(i);
    }
    return range;
  };
  //Create a function that will take an array of arrays with range values to be find all needed prefixes
  var chinaRanges = [[622126, 622925], [624, 626], [6282, 6288]];
  var chinaPre = [].concat(...chinaRanges.map(val=> {
    var prefix = [];
    for(var i = val[0]; i <= val[1]; i++){
      prefix.push(i);
    }
    return prefix;
  }));

  if(len === 14 && [38, 39].includes(pre())){
    return "Diner\'s Club";

  } else if (len=== 15 && [34, 37].includes(pre())){
  	return "American Express";

  } else if (len=== 16 && [51, 52, 53, 54, 55].includes(pre())){
  	return "MasterCard";

  } else if ([16, 17, 19].includes(len) && 
            ([564182, 633110].includes(pre(6))) || 
              [4903, 4905, 4911, 4936, 6333, 6759].includes(pre(4))){
    return "Switch"; 

  } else if ([13,16,19].includes(len) && 4 === pre(1)){
  	return "Visa";

  } else if ([16,17,18,19].includes(len) && 
            ( preRange(644, 649).includes(pre(3)) || 6011 === pre(4) || 65  === pre(2) )) { 
    return "Discover";

  } else if (len >= 12 && len <= 19 && [5018, 5020, 5038, 6304].includes(pre(4))){
    return "Maestro";

  } else if ([16,17,18,19].includes(len) && ( preRange(624, 626).includes(pre(3)) || 
            preRange(6282, 6288).includes(pre(4)) || preRange(622126, 622925).includes(pre(6)) )){
    return "China UnionPay";

  } else if ([16, 18, 19].includes(len) && 
            ( [564182, 633110].includes(pre(6)) || [4903, 4905, 4911, 4936, 6333, 6759].includes(pre(4)) )){
    return "Switch"; 

  } else {
    return 'CardNumber unsuccessful:'+ cardNumber +', Pre:' + pre + ' Len:' +len;
  }
};
