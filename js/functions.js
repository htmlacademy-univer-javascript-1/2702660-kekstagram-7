function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

function isPalindrome(string) {
  const cleanString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = cleanString.length - 1; i >= 0; i--) {
    reversedString += cleanString[i];
  }
  if (cleanString === reversedString) {
    return true;
  }
  return false;
}

checkStringLength();
isPalindrome();
