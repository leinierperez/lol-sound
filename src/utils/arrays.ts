export function shuffle<T>(arr: T[]) {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randIndex = Math.floor(Math.random() * i);
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randIndex];
    shuffledArray[randIndex] = temp;
  }
  return shuffledArray;
}
