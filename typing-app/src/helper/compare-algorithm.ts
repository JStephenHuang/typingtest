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

  let shorterLength = Math.min(userWord.length, targetWord.length);
  let i = 0;
  for (; i < shorterLength; i++) {
    if (userWord[i] === targetWord[i]) {
      wordState += "g";
    } else {
      wordState += "r";
    }
  }

  for (; i < targetWord.length; i++) {
    wordState += "x";
  }

  for (; i < userWord.length; i++) {
    wordState += "e";
    word += userWord[i];
  }

  return { word, wordState };
};
