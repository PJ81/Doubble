
function shuffleArray(arr: Object[], times: number) {

  for (let w = 0; w < times; w++) {
    let ziel = arr.length - 1, tmp, posA, end = ziel - 1;
    while (end > 0) {
      posA = Math.floor(Math.random() * end);
      tmp = arr[posA];
      arr[posA] = arr[ziel];
      arr[ziel] = tmp;
      end--;
      ziel--;
    }
  }
}

export { shuffleArray };

