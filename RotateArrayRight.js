function rotateArrayRight(arr) {
  if (arr.length === 0) {
    return [];
  }

  let lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}

const array = [1, 6, 4, 8, 9];
const rotatedArray = rotateArrayRight(array);
console.log(rotatedArray);
