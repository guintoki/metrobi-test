function isValidBrackets(s) {
  const stack = [];
  const bracketPairs = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (const char of s) {
    if (char in bracketPairs) {
      if (stack.pop() !== bracketPairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets("{[]}"));
console.log(isValidBrackets("{[}]"));
console.log(isValidBrackets("{(])}"));
