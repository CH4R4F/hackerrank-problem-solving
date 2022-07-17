function gradingStudents(grades) {
  // Write your code here
  return grades.map((grad) => {
    let diff = 5 - (grad % 5);
    if (grad < 38) {
      return grad;
    } else if (diff < 3) {
      return grad + diff;
    }

    return grad;
  });
}
