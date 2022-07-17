function birthday(s, d, m) {
  // Write your code here
  let t = 0;
  let l = s.length - m; // bcs we will always start in each index end end up in index + m

  for (let i = 0; i <= l; i++) {
    let segment = s.slice(i, i + m);
    let total = segment.reduce((a, b) => a + b);

    if (total == d) t++;
  }

  return t;
}
