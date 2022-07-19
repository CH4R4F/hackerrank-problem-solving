function formingMagicSquare(s) {
  // based on algorithms I saw on the internet
  const n = 8;
  let costs = Array(n).fill(0);
  let magic = [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ];

  for (let i = 0; i < n; i++) {
    const isEven = !(i % 2);

    magic.forEach(([a, b, c], j) => {
      costs[i] += Math.abs(s[isEven ? 0 : 2][j] - a);
      costs[i] += Math.abs(s[1][j] - b);
      costs[i] += Math.abs(s[isEven ? 2 : 0][j] - c);
    });

    if (isEven) {
      s = [0, 1, 2].map((j) => [s[2][j], s[1][j], s[0][j]]);
    }
  }

  return Math.min(...costs);
}
