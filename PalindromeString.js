function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

const str1 = "doctor";
const str2 = "madam";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
