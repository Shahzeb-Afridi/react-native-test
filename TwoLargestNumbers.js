function sumOfTwoLargestNumbers(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }

  return max1 + max2;
}

const array = [3, 7, 34, 11, 19];
const result = sumOfTwoLargestNumbers(array);
console.log(result);
