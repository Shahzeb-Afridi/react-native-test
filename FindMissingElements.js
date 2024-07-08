function findMissingElements(arr) {
  if (arr.length === 0) {
    return [];
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let presence = new Array(max + 1).fill(false);

  for (let i = 0; i < arr.length; i++) {
    presence[arr[i]] = true;
  }

  let missingNumbers = [];
  for (let i = 0; i <= max; i++) {
    if (!presence[i]) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

const array = [2, 4, 8];
const missingNumbers = findMissingElements(array);
console.log(missingNumbers);
