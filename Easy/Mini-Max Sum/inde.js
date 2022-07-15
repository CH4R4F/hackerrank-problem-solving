function miniMaxSum(arr) {
  // Write your code here
  // the ides is simple .. sort the array from min to max and then take the sum of the first 4 elements and the last 4 elements
  let sorted = arr.sort((a, b) => a - b);
  let min = sorted.slice(0, 4).reduce((a, b) => a + b);
  let max = sorted.slice(-4).reduce((a, b) => a + b);
  console.log(`${min} ${max}`);
}
