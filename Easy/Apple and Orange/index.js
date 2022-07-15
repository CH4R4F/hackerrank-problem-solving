function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = apples.reduce((count, d) => {
    if (a + d >= s && a + d <= t) {
      count++;
    }
    return count;
  }, 0);

  let orangesCount = oranges.reduce((count, d) => {
    if (b + d >= s && b + d <= t) {
      count++;
    }
    return count;
  }, 0);

  console.log(applesCount);
  console.log(orangesCount);
}
