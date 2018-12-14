/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
/* 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
}); */
describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4234567890123') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4234567890123456') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4234567890123456789') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5134567890123456').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5234567890123456').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5334567890123456').should.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5434567890123456').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5534567890123456').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  var should = chai.should();

  for (var prefix = 644; prefix <= 649; prefix++) {  
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '4567890123456').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix.toString() + '45678901234567').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix.toString() + '456789012345678').should.equal('Discover');
      });    
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '4567890123456789').should.equal('Discover');
      });  
    })(prefix)
  }

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567890123456').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  }); 

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });    
});

describe('Maestro', function() {
  var should = chai.should();
  for (var len = 12; len <= 19; len++) {  
    (function(len) {
      it('has a prefix of 5018 and a length of ' + len + '',function(){
        detectNetwork('5018' + '0'.repeat(len -4)).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + len + '',function(){
        detectNetwork('5020' + '0'.repeat(len -4)).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + len + '',function(){
        detectNetwork('5038' + '0'.repeat(len -4)).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + len + '',function(){
        detectNetwork('6304' + '0'.repeat(len -4)).should.equal('Maestro');
      });
    })(len)
  }
});


describe('should support China UnionPay', function() {
  var should = chai.should();
 
  for (var prefix = 622126; prefix <= 622925; prefix++) {  
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '7890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix.toString() + '78901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix.toString() + '789012345678').should.equal('China UnionPay');
      });    
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '7890123456789').should.equal('China UnionPay');
      });  
    })(prefix)
  } 
  for (var prefix = 624; prefix <= 626; prefix++) {  
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '4567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix.toString() + '45678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix.toString() + '456789012345678').should.equal('China UnionPay');
      });    
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '4567890123456789').should.equal('China UnionPay');
      });  
    })(prefix)
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {  
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix.toString() + '5678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix.toString() + '56789012345678').should.equal('China UnionPay');
      });    
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '567890123456789').should.equal('China UnionPay');
      });  
    })(prefix)
  }
});

describe('should support Switch', function(){
  var should = chai.should();
  var prefixList = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for (var i = 0; i < prefixList.length; i++) {
    var prefix = prefixList[i];
    (function(prefix) {
      var pre = prefix.toString();
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(pre + '0'.repeat(16 - pre.length)).should.equal('Switch');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(pre + '0'.repeat(18 - pre.length)).should.equal('Switch');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(pre + '0'.repeat(19 - pre.length)).should.equal('Switch');
      });  
    })(prefix)
  }

});
