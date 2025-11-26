// Calculate the sum of all elements in an array
function sunofArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sunofArray([1, 2, 3, 4, 5]));
console.log(sunofArray([10, 20, 30]));
