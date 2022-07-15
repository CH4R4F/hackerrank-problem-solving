function compareTriplets(a, b) {
  // Write your code here
  let result = [0, 0];

  a.forEach((p, i) => {
    if (p > b[i]) {
      result[0]++;
    } else if (p < b[i]) {
      result[1]++;
    }
  });

  return result;
}
