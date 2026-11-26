const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) { return "ERROR" };
  if (a < 0 || b < 0) { return "ERROR" };

  // Make sure a < b
  if (b < a) { let c = a; a = b; b = c };

  // Total the range
  let total = 0;
  for (let i = a; i <= b; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
