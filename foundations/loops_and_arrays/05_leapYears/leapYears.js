const leapYears = function(year) {
  const yearDivisibleBy4 = year % 4 === 0;
  const yearDivisibleBy100 = year % 100 === 0;
  const yearDivisibleBy400 = year % 400 === 0;

  // Any year that is NOT divisible by 4 is automatically NOT a leap year
  if (!yearDivisibleBy4) return false

  // Any year that is divisible by 400 is automatically a leap year
  if (yearDivisibleBy400) return true

  // Since we've already determined the result for 400, we may consider 100
  // (years divisible by 100 are not leap years, unless divisible by 400)
  if (yearDivisibleBy100) return false

  // All remaining numbers should be divisible by 4
  return true
};

// Do not edit below this line
module.exports = leapYears;
