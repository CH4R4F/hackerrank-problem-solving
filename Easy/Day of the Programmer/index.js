function dayOfProgrammer(year) {
  // Write your code here
  let leap = false;
  if (year < 1919) {
    if (!(year % 4)) {
      leap = true;
    }
  } else {
    if (!(year % 400) || (!(year % 4) && year % 100)) {
      leap = true;
    }
  }

  let day = year == 1918 ? 26 : leap ? 12 : 13;
  return `${day}.09.${year}`;
}
