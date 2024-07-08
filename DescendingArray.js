function quickSortDescending(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSortDescending(left).concat([pivot], quickSortDescending(right));
}

function sortArrayDescending(arr) {
  return quickSortDescending(arr);
}

const array = [4, 3, 7, 9, 12, 65, 23, 2];
const sortedArray = sortArrayDescending(array);
console.log(sortedArray);
