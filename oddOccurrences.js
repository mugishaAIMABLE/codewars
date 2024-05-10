// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// create a new array without duplicates and compare it with the one that doesn't have duplicates

function findOdd(A) {
  if (A.length == 1) {
    return A[0];
  }

  let arr = [];
  for (let i = 0; i < A.length; i++) {
    if (!arr.includes(A[i])) {
      arr.push(A[i]);
    }
  }
  // console.log(arr)
  let counter = 0;
  let newArr = [];
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (arr[i] == A[j]) {
        store.push(arr[i]);
      }
    }
    newArr.push(store);
    store = [];
  }
  for (let i = 0; i < newArr.length; i++) {
    let check = newArr[i];
    if (check.length % 2 != 0) {
      return check[0];
    }
  }
}

console.log(findOdd([0, 1, 0, 1, 0]))
