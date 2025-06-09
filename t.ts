async function squareAsync(n: number): Promise<number> {
  return new Promise((res, rej) => {
    if (n >= 0) {
      setTimeout(() => {
        res(n * n);
      }, 1000);
    } else {
      rej(new Error("Negative number not allowed"));
    }
  });
}

// squareAsync(4).then((result) => console.log("Square :", result)); // Output after 1s: 16
// squareAsync(-3).catch((result) => console.log(result)); // Output: Error: Negative number not allowed
