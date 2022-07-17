function diagonalDifference(arr) {
  let rightToLeftDiagonal = 0;
  let leftToRightDiagonal = 0;

  arr.forEach((a, i) => {
    leftToRightDiagonal += a[i];
    rightToLeftDiagonal += a[a.length - 1 - i]; // always start from the end of the subarray and move backwards till the last one
  });

  return Math.abs(rightToLeftDiagonal - leftToRightDiagonal);
}
