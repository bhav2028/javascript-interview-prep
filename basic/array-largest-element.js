// Find the largest element in an array
function largestElement(arr) {
  if (arr.length == 0) {
    return null;
  }
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(largestElement([3, 5, 7, 2, 8]));
console.log(largestElement([1.5, 2.3, 0.7, 4.8]));
