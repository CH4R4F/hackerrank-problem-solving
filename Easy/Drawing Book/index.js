function pageCount(n, p) {
  // Write your code here
  let turns = Math.floor(p / 2);
  let total = Math.floor(n / 2);

  return Math.min(turns, total - turns);
}
