function mostRepeatedNumber(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let count = {};

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }
  }

  let maxCount = 0;
  let mostRepeated = arr[0];
  for (let num in count) {
    if (count[num] > maxCount) {
      maxCount = count[num];
      mostRepeated = num;
    }
  }

  return `${mostRepeated} is repeated ${maxCount} times`;
}

const array = [7, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 7, 6, 3, 4, 7, 5, 1, 5];
const result = mostRepeatedNumber(array);
console.log(result);
