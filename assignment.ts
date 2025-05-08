function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toLowerCase());
  }
  return input;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3 },
  { title: "Book C", rating: 5.0 },
];
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredBooks: { title: string; rating: number }[] = items.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
  return filteredBooks;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const myConcatArr = arrays.reduce((acc, curr) => acc.concat(curr));
  return myConcatArr;
}

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`make: ${this.make} year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(model: string, year: number, make: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const result = products.reduce((max, curr) =>
    curr.price > max.price ? curr : max
  );
  return result;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 80 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);

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
  const checkDay = day === Day.Sunday ? "Weekend" : " Weekday";
  return checkDay;
}

async function squareAsync(n: number): Promise<number> {
  if (n >= 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n ** 2);
      }, 1000);
    });
  } else {
    throw new Error("Negative number not allowed");
  }
}
