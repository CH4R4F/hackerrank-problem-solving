function catAndMouse(x, y, z) {
  // write your code here
  const aDist = Math.abs(x - z);
  const bDist = Math.abs(y - z);

  return aDist < bDist ? "Cat A" : aDist > bDist ? "Cat B" : "Mouse C";
}
