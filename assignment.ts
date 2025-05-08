function formatString(input: string, toUpper: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return(input.toUpperCase());
  } 
  return input.toLowerCase();
}

type Items = { title: string; rating: number }[];

function filterByRating(
  items: Items
): Items {
  const filteredBooks: Items = items.filter(
    (item) => item.rating >= 4
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

  constructor(make: string, year: number){
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return (`make: ${this.make} year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(model: string, year: number, make: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return (`Model: ${this.model}`);
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
  if (products.length) {
    const result = products.reduce((max, curr) =>
      curr.price > max.price ? curr : max
    );
    return result;
  }
  return null;
}


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
        resolve(n * n);
      }, 1000);
    });
  } else {
    throw new Error("Negative number not allowed");
  }
}
