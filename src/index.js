import { compose, pipe } from "lodash/fp";
import { produce } from "immer";

let username = "  Razan  ";
let message = "Hello " + username.trim() + " Good Morning";

const trim = (name) => name.trim();
const generateMessage = (message) => (name) => `Hello ${name}, ${message}!`;
const convertToUpper = (name) => name.toUpperCase();

const result = generateMessage(convertToUpper(trim(message)));

//passes the result of the executed function to the next function RTL, this is used insdead of having the complex structure of nested oarantheses
const newFunc = compose(generateMessage, convertToUpper, trim);

// works in the same way as compose but the order of functions passed is the true order of execution
const pipeFucnc = pipe(trim, convertToUpper, generateMessage("Good Morning !"));

const resultCompose = newFunc(message);
const resultPipe = pipeFucnc(username);

console.log(resultPipe);

//currying
function multi(a) {
  return function (b) {
    return a * b;
  };
}
//or
const multiplicate = (a) => (b) => a * b;

const multiply = multi(5)(2);

//immutable objects
const emplyee = {
  name: "Razan",
  age: "23",
  company: { city: "Amman", state: "" },
};
const emplyee2 = Object.assign({}, emplyee, { name: "Razan 2" });
const newEmplyee = {
  ...emplyee,
  name: "Razan Test",
  company: { ...emplyee.company, city: "Irbid" },
};

const newestEmployee = produce(emplyee, (draftState) => {
  (draftState.name = "Ruzz"), (draftState.company.city = "Zarqa");
});
console.log(emplyee);
console.log(emplyee2);
console.log(newEmplyee);
console.log(newestEmployee);

//immutable arrays
const nums = [20, 20, 30, 40];

//add
const addedNumbers = [50, ...nums];
console.log(addedNumbers);

const index = nums.indexOf(30);
const addOnIndex = [...nums.slice(0, index), 33, ...nums.slice(index)];
console.log(addOnIndex);

//update
const updated = nums.map((a) => (a === 40 ? 80 : 10));
console.log(updated);

//remove

const removed = nums.filter((a) => a !== 30);
console.log(removed);

//exersise
//change price to 10 and rating to 4.8
const book = {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$8",
    rating: "4.7",
  },
};

const newBook = {
  ...book,
  book: { ...book.book, price: "$10", rating: "4.8" },
};

console.log("NewBook: ", newBook);

//replace book 2 with book 4

const arrayOfBooks = ["Book1", "Book2", "Book3"];

const indexBook = arrayOfBooks.indexOf("Book2");
const updatedBook = arrayOfBooks.map((book) =>
  book === "Book2" ? "Book4" : book
);

console.log("UpdatedBook: ", updatedBook);
