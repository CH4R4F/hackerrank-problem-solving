function countingValleys(steps, path) {
  // Write your code here
  let counter = 0;
  let valleyCount = 0;

  for (let i = 0; i < steps; i++) {
    path[i] == "D" ? counter++ : counter--;

    if (path[i] == "U" && counter == 0) {
      valleyCount++;
    }
  }

  return valleyCount;
}
