
function shuffleArray(arr: Object[], times: number) {
  let a: number;
  for (let w = 0; w < times; w++) {
    for (let x = arr.length - 1; x > 0; x--) {
      a = Math.floor(Math.random() * x);
      let t = arr[a];
      arr[a] = arr[x];
      arr[x] = t;
    }
  }
}

export { shuffleArray };
