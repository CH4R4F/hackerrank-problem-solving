// there are many ways to solve it using javascript .. but let's try it without using Date object
function timeConversion(s) {
  // Write your code here
  let format = s.slice(-2);
  let hour = s.slice(0, 2);

  if (format == "PM") {
    if (hour == 12) {
      return s.slice(0, -2);
    } else {
      return `${+hour + 12}${s.slice(2, -2)}`;
    }
  } else {
    if (hour == 12) {
      return `00${s.slice(2, -2)}`;
    } else {
      return s.slice(0, -2);
    }
  }
}
