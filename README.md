**How does TypeScript help in improving code quality and project maintainability?**
=> Typescript is powerful programming language that can improve code maintainability, more efficient and strong typing system, advance features and readability.

*Strong Typing System*
With TypeScript, you can set what type of data a variable should have — like number, string, or object. This helps find errors before you even run the code. You don’t have to guess what kind of data you’re working with. It shows suggestions and makes coding faster.

*Advance Features*
TypeScript gives you helpful tools like classes, interfaces, and modules. These help keep your code organized. It also has features like generics and decorators that make your code cleaner and easier to reuse.

*Readability*
TypeScript makes your code neat and simple to understand. Whether it's you or someone else, reading the code becomes easier, which helps a lot in big projects.

TypeScript helps you catch mistakes early, write clean code, and manage your project better. If you're using plain JavaScript, give TypeScript a try — it makes life easier for developers!

**What is the use of enums in TypeScript? Provide an example of a numeric and string enum.**

The full form of enums is enumerations. A typescript feature that allow developers to define a set of constants. This are particularly useful when dealing with fixed set of options.

*Numeric Enum Example*

enum Role {
  Admin = 1,
  Editor, 
  Viewer
}
console.log(Role.Editor); output will be 2
typescript auto increases the number for next values.

*String Enum Example

enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
  Loading = "LOADING",
}
console.log(Status.Success); output will be:  "SUCCESS"

Why We should Use Enums?

* Keeps code clean and easy to understand
* Avoids using hard-coded values
* Helps reduce bugs when working with fixed options.
* Enums help avoid typing mistakes when writing conditions.

Enums are like labels for your values. Whether it’s numbers or strings, enums make your code smarter and easier to handle. Try them in your next TypeScript project — you’ll love the clarity!