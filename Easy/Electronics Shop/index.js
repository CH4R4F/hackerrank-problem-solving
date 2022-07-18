function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let collection = keyboards[i] + drives[j];
      if (collection > max && collection <= b) {
        max = collection;
      }
    }
  }
  return max;
}
