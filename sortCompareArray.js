function splitter(arr) {
  let arr1 = [];
  let firstIndex = 0;
  let splittedArr = [];
  let sumsArr = [];
  for (let i = 0; i < arr.length; i++) {
    //sorting all elements of an array according to where zeros are then pushing them into a new array
    if (arr[i] == 0) {
      let holder = arr.slice(firstIndex, i + 1);
      let sorted = holder.sort((a, b) => a - b).splice(1);
      // console.log(sorted)
      sorted.push(0);
      firstIndex = i + 1;
      splittedArr.push(sorted);
    }
    //end of creting a new array
  }
  for (let i = 0; i < splittedArr.length; i++) {
    let sum = splittedArr[i].reduce((acc, curr) => acc + curr, 0);
    sumsArr.push({ sum, index: i });
  }
  // Sort sumsArr based on sum value in ascending order
  sumsArr.sort((a, b) => a.sum - b.sum);

  // Create the final sorted array based on the sorted sumsArr
  let result = [];
  for (let i = 0; i < sumsArr.length; i++) {
    result = [...result, ...splittedArr[sumsArr[i].index]];

  }
  return result;
}

splitter([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0]);
