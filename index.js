function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === complement) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  hasTargetSum([1,4,6,9,5,3],15)
  iterate through each number of the array
    for each of those numbers, identify compliment that adds to the target
    iterate through the rest of the array and check if any number is our compliment
    if so, return tue
    if I get to the end of the array and I haven't found any numbers that add up to my target return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}