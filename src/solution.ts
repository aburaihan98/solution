// Assignment-1

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// formatString("Hello");
// formatString("Hello", true);
// formatString("Hello", false);
// console.log(formatString("Hello"));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item?.rating >= 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book A", rating: 4 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];
// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const res: T[] = [];

  for (const arr of arrays) {
    res.push(...arr);
  }
  return res;
}

// console.log(concatenateArrays<string>(["a", "b"], ["c"]));
// console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue(100));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let highestPriceProduct: Product = products[0];

  products.forEach((product) => {
    if (highestPriceProduct?.price < product.price) {
      highestPriceProduct = product;
    }
  });
  return highestPriceProduct;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

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
