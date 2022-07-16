function migratoryBirds(arr) {
  // Write your code here
  let count = {};
  arr.forEach((id) => {
    // the idea is to loop over IDs and count how many times each ID appears, each id is a key in the count object
    let label = `${id}`;
    if (count[label]) {
      count[label] += 1;
    } else {
      count[label] = 1;
    }
  });
  // then convert the count object into array of [id, count] for each key
  // example:
  // {
  //   '1': 2,
  //   '2': 1,
  // }
  // // this will be converted to
  // [ [1, 2], [2, 1] ]

  let countArray = Object.entries(count);

  // then sort the array by count from most frequent to least frequent

  let mostFreq = countArray.sort((a, b) => b[1] - a[1]);

  // filter the sorted array to only include the most frequent IDs (which are the ones equale to the biggest count == index 0), then return only the IDs

  mostFreq = mostFreq.filter((e) => e[1] == mostFreq[0][1]).map((e) => +e[0]);

  // finally return the smallest ID of the most frequent IDs
  return Math.min(...mostFreq);
}
