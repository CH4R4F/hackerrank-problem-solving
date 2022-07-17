function plusMinus(arr) {
  // filter array to
  let [p, n, z] = arr.reduce(
    (res, currentNumber) => {
      if (currentNumber > 0) {
        res[0] += 1;
      } else if (currentNumber < 0) {
        res[1] += 1;
      } else {
        res[2] += 1;
      }
      return res;
    },
    [0, 0, 0]
  ); // we start the initial value of reduce by initializing the count as array [positives, negatives, zeros] and we destruct it to [p, n, z]

  console.log((p / arr.length).toFixed(6));
  console.log((n / arr.length).toFixed(6));
  console.log((z / arr.length).toFixed(6));
}
