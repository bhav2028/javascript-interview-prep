// Remove duplicate elements from an array
function removeDuplicates(arr) {
    let uniqueEle = [];
    for (let i =0; i < arr.length; i++) {
        if(!uniqueEle.includes(arr[i])) {
            uniqueEle.push(arr[i])
        }
    }
    return uniqueEle;
}

console.log(removeDuplicates([1,2,3,2,4,5,1,6]));
console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"]));
console.log(removeDuplicates([true, false, true, true, false]));