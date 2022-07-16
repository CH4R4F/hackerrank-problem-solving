function breakingRecords(scores) {
  // Write your code here
  let min = scores[0];
  let max = scores[0];
  let l = scores.length;
  let res = [0, 0];
  // while scores doesn't have too many values, I looped through the array linearly
  for (let i = 1; i < l; i++) {
    if (scores[i] > max) {
      max = scores[i];
      res[0] += 1;
    } else if (scores[i] < min) {
      min = scores[i];
      res[1] += 1;
    }
  }
  return res;
}
