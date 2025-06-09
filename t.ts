enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// console.log(getDayType(Day.Monday)); // Output: "Weekday"
// console.log(getDayType(Day.Sunday)); // Output: "Weekend"

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
