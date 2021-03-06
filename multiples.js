/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  // do your work here
  for (var num = 1; num < n; num++) {
    if(num % 3 === 0 || num % 5 === 0){
      sum += num;
    }
  }

  return sum;
};
