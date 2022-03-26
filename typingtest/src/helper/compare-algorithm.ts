interface ComparisonResult {
  word: string;
  wordState: string;
}

export const compareAlgorithm = (
  userWord: string,
  targetWord: string
): ComparisonResult => {
  let word = targetWord;
  let wordState = "";

  const hasNullChar = userWord[userWord.length - 1] === "\0";
  const userWordLength = hasNullChar ? userWord.length - 1 : userWord.length;
  const shorterLength = Math.min(userWordLength, targetWord.length);

  let i = 0;

  for (; i < shorterLength; i++) {
    if (userWord[i] === targetWord[i]) {
      wordState += "g";
    } else {
      wordState += "r";
    }
  }
  for (; i < userWordLength; i++) {
    wordState += "e";
    word += userWord[i];
  }

  if (hasNullChar) {
    wordState += "c";
    word += " ";
  }

  for (; i < targetWord.length; i++) {
    wordState += "x";
  }

  return { word, wordState };
};
