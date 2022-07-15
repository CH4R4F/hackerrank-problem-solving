// well .. the numbers in the array are big but still in range of javascript safe integer so no need to use BigInt
function aVeryBigSum(ar) {
  // Write your code here
  return ar.reduce((x, y) => x + y);
}
