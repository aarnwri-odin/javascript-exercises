const removeFromArray = function(arr, ...args) {
  console.log("arr: " + arr);
  console.log("args: " + args);

  return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
