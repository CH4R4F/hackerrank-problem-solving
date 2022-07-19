function pickingNumbers(a) {
  // Write your code here
  let max = 0;
  a.forEach((n) => {
    const subarray = a.filter((e) => n - e === 0 || n - e === 1);
    if (subarray.length > max) max = subarray.length;
  });
  return max;
}
