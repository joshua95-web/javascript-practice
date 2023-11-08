/*console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI)); //math.ceil always rounds up
console.log(Math.floor(Math.PI)); //math.floor always rounds down
console.log(Math.min(2, 0.5, 9));


const myName = "Joshua";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("No match");
}

*/

// Ternary Operator
//condition ? ifTrue : ifFalse;

/*let soup = "Chicken Noodle Soup";
//let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup //now we have to check THIS condition - is there soup?
  ? `Yes, we have ${soup} today.`
  : "Sorry, no soup today.";
console.log(soupAccess);
*/

/*let testScore = 90;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}`);
*/

// User Input
/*let name = prompt("Please enter your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter your name.");
}
*/

/*let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";

    } else {
        alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind : - ( maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
*/

// Loops

// While

/*let myNumber = 0;
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
}
*/

// For

/*let name = "Poshua";

for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}
*/

// Mix
/*let name = "Poshua";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "u") break;
  counter++;
}
console.log(counter);
*/

// Functions

// Function Declaration Syntax:

/*function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

console.log(sum(2));
*/

/*const getUsernameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUsernameFromEmail("playerOne@SomeRandomEmail.com"));
*/
/*
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("pOsHuA"));
*/

// Arrays

// const myArray = [];

// Add Elements to an Array

// myArray[0] = "Poshua";
// myArray[1] = 1001;
// myArray[2] = false;

// Refer to an Array

// console.log(myArray);

// Length Property

// console.log(myArray.length);

// Last Element in an Array

// console.log(myArray[myArray.length - 1]);

// Add and Remove Elements to Array

// myArray.push("school");

// console.log(myArray);

// myArray.pop();

// console.log(myArray);

// console.log(myArray);

// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]);

// Splicing

// myArray.splice(1, 0, 42);

// console.log(myArray);
// console.log(myArray[1]);

// const myArray1 = ["A", "B", "C", "D", "E", "F"];

// const newArray = myArray1.slice(2);

// console.log(newArray);

// Reverse

// const myArray = ["A", "B", "C", "D", "E", "F"];

// myArray.reverse();

// console.log(myArray);

// Join and Split

// const newString = myArray.join();

// console.log(newString);

// const newArray = newString.split(",");

// console.log(newString);

// console.log(newArray);

//Concatenation

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// const newArray = myArrayA.concat(myArrayB);

// console.log(newArray);

// spread operator

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// const newArray = [...myArrayA, ...myArrayB];

// console.log(newArray);

// Multi Dimensional Arrays

// const equipShelfA = ["baseball", "football", "volleyball"];
// const equipShelfB = ["basketball", "golf-balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// console.log(equipShelfA[1]);
// //or
// console.log(clothesShelfB[0]);

// const equipDept = [equipShelfA, equipShelfB];
// const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equipDept[0][1]);
// console.log(clothesDept[1][0]);

// const sportsStore = [equipDept, clothesDept];
// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[1][1][0]);

// Objects

// key-value pairs in curly braces

// const myObj = { name: "Poshua" };
// console.log(myObj.name);

// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["coding", "gaming", "reading"],
//   beverage: {
//     morning: "coffee",
//     afternoon: "tea",
//   },
//   action: function () {
//     return `Time for ${this.beverage.morning}!`;
//   },
// };

// console.log(anotherObj.hobbies[1]);

// console.log(anotherObj.beverage.afternoon);

// console.log(anotherObj.beverage.morning);

// console.log(anotherObj.action());

// Object Methods

// const vehicle = {
//   wheels: 4,
//   engine: function () {
//     return "Vrroooom!";
//   },
// };

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck.wheels); // Inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () {
//   return "Whoooosh!";
// };

// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car);
// console.log(tesla.wheels);
// console.log(tesla.engine());
// tesla.engine = function () {
//   return "Shhhh...";
// };

// console.log(tesla.engine());

// const ford = Object.create(car);
// console.log(ford.wheels);
// console.log(ford.engine());

// Object Methods: Keys and Values

// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "John Paul Jones",
//   drums: "John Bonham",
// };

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}`);
// }

// Destructuring Objects

// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "John Paul Jones",
//   drums: "John Bonham",
// };

// const { guitar: myVariable, bass: myBass } = band;
// console.log(myVariable);
// console.log(myBass);

// const { vocals, guitar, bass, drums } = band;
// console.log(guitar);
// console.log(vocals);

// function sings({ vocals }) {
//   return `${vocals} sings!`;
// }
// console.log(sings(band));

// you could also put this

// console.log(`${band.vocals} sings!`);

// Javascript Classes

// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

// class House {
//   constructor(colour) {
//     this.colour = colour;
//   }
//   getFurniture() {
//     return "sofa";
//   }
// }

// const houseObject = new House("blue");
// const houseObject2 = new House("red");

// console.log(houseObject.colour);
// console.log(houseObject.getFurniture());

// console.log(houseObject2.colour);
// console.log(houseObject2.getFurniture());

// class Vehicle {
//   constructor(_wheels) {
//     this.numWheels = _wheels; // 'this' refers to the object that is created with 'let'
//   }
//   get wheels() {
//     return this.numWheels;
//   }
//   set wheels(_wheels) {
//     this.numWheels = _wheels;
//   }
//   static accelerate() {
//     console.log("Accelerating!");
//   }
//   static decelerate() {
//     console.log("Decelerating!");
//   }
//   justAMethod() {
//     console.log("I'm just a method, like a function.");
//   }
// }

// let car = new Vehicle(4);
// let car1 = new Vehicle(4);
// let car2 = new Vehicle(4);
// car.wheels = 7;
// console.log(car.wheels);
// Vehicle.accelerate();

// class Car extends Vehicle {
//   constructor(_wheels, _make, _model, _year) {
//     super(_wheels);
//     this.make = _make;
//     this.model = _model;
//     this.year = _year;
//   }
//   info() {
//     console.log(
//       "The",
//       this.make,
//       this.model,
//       "was made in",
//       this.year,
//       "and has",
//       this.wheels,
//       "wheels."
//     );
//   }
// }

// let ferrari = new Car(4, "Ferrari", "Testarossa", 1985);
// ferrari.info();
// Car.accelerate();

// class Pizza {
//   crust = "original";
//   #sauce = "traditional";
//   #size; //this is a private property, must be declated above constructor
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }
//   hereYouGo() {
//     console.log(
//       `Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
//     );
//   }
// }

// const myPizza = new Pizza("large");
// myPizza.hereYouGo();
// console.log();

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize); //this is the parent class
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   setToppings(topping) {
//     this.toppings.push(topping);
//   }
//   bake() {
//     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//   }
// }

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// Most Informative Example of JavaScript Classes

/*

  Class -> Object

  Instance Properties: what they have

    - name
    - age
    - height

  Instance Methods: what they do

    - talk
    - run
    - jump

    */

/*
class Rectangle {
  // Setup. Constructor is a special method that runs when you create a new instance of a class.
  constructor(_width, _height, _colour) {
    console.log("A new rectangle was created.");

    this.width = _width;
    this.height = _height;
    this.colour = _colour;
  }
  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am ${this.colour}.`
    );
  }
}

let myRectangle1 = new Rectangle(5, 3, "blue"); // this calls the constructor method.
let myRectangle2 = new Rectangle(10, 5, "red"); // this calls the constructor method.

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

myRectangle1.printDescription();
*/

// getters and setters

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestsForArea = 0;
//   }

//   get area() {
//     this.numOfRequestsForArea++;
//     return this.width * this.height;
//   }

//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }

// let square1 = new Square(4);
// square1.area = 25;
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);

// console.log(square1.numOfRequestsForArea);

// static methods

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }
//   static equals(a, b) {
//     return a.width * a.height === b.width * b.height;
//   }

//   static isValidDimensions(width, height) {
//     return width === height;
//   }
// }

// let square1 = new Square(8);
// let square2 = new Square(8);

// console.log(Square.equals(square1, square2));

// console.log(Square.isValidDimensions(6, 5));

// JSON: Javascript Object Notation

// JSON is a text format that is completely language independant
// Meaning JSON is used to send and receive data in many languages

// const myObj = {
//   name: "Poshua",
//   hobbies: ["eat", "sleep", "code"],
//   hello: function () {
//     console.log("Hello!");
//   },
// };
// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();
// console.log(typeof myObj);

// const sendJSON = JSON.stringify(myObj);
// console.log(sendJSON);
// console.log(typeof sendJSON);
// console.log(sendJSON.name);

// const receiveJSON = JSON.parse(sendJSON);
// console.log(receiveJSON);
// console.log(typeof receiveJSON);

// JavaScript Errors and Error Handling
// "use strict";
// const makeError = () => {
//   let i = 1;
//   while (i <= 5) {
//     try {
//       if (i % 2 !== 0) {
//         throw new Error("Odd number");
//       }
//       console.log("Even number!");
//     } catch (error) {
//       console.error(error.stack);
//     } finally {
//       console.log("Finally always runs.");
//       i++;
//     }
//   }
// };

// makeError();

// function customError(message) {
//   this.message = message;
//   this.name = "customError";
//   this.stack = `${this.name}: ${this.message}`;
// }

// DOM: Document Object Model

// const view1 = document.getElementById("view1");
// console.log(view1);
// const view2 = document.querySelector("#view2");
// console.log(view2);
// view1.style.display = "flex";
// view2.style.display = "none";

// const views = document.getElementsByClassName("view");
// console.log(views);
// const sameViews = document.querySelectorAll(".view");
// console.log(sameViews);

// const divs = view1.querySelectorAll("div");
// console.log(divs);
// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs);

// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);
// for (let i = 0; i < evenDivs.length; i++) {
//   evenDivs[i].style.backgroundColor = "darkblue";
// evenDivs[i].style.width = "200px";
// evenDivs[i].style.height = "200px";
// }

// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent = "Hello World!";
// const navbar = document.querySelector("nav");
// navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`;
// console.log(navbar);
// navbar.style.justifyContent = "space-between";

// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.children);
// console.log(evenDivs[0].parentElement.childNodes);
// console.log(evenDivs[0].parentElement.hasChildNodes);
// console.log(evenDivs[0].parentElement.lastChild);
// console.log(evenDivs[0].parentElement.firstElementChild);
// console.log(evenDivs[0].parentElement.nextElementSibling);

view1.style.display = "none";
view3.style.display = "flex";
view3.style.flexDirection = "row";
view3.style.flexWrap = "wrap";
view3.style.margin = "10px";

// while (view2.lastChild) {
//   view2.lastChild.remove();
// }

// const createDivs = (parent, iter) => {
//   const newDiv = document.createElement("div");
//   newDiv.textContent = iter;
// newDiv.style.backgroundColor = "#000";
//   newDiv.style.width = "100px";
//   newDiv.style.height = "100px";
//   newDiv.style.margin = "10px";
//   newDiv.style.display = "flex";
//   newDiv.style.justifyContent = "center";
//   newDiv.style.alignItems = "center";
//   parent.append(newDiv);
// };

// // createDivs(view2, 10);
// for (let i = 1; i <= 12; i++) {
//   createDivs(view2, i);
// }

//JavaScript Event Listeners

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

//Synbtax: addEventListener("click", function, useCapture);

// const doSomething = () => {
//   alert("doing something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

//Anonymous Function

// h2.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.textContent = "Clicked!";
// });

// SUPER USEFUL DOM STUFF

// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "complete") {
//     console.log("DOM fully loaded and parsed");
//     initApp();
//   }
// });

// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener(
//     "click",
//     (event) => {
//       view.classList.toggle("purple");
//       view.classList.toggle("darkblue");
//     },
//     false
//   );
//   div.addEventListener(
//     "click",
//     (event) => {
//       div.classList.toggle("blue");
//       div.classList.toggle("black");
//     },
//     false
//   );
//   h2.addEventListener(
//     "click",
//     (event) => {
//       const myText = event.target.textContent;
//       myText === "My 2nd View"
//         ? (event.target.textContent = "Clicked!")
//         : (event.target.textContent = "My 2nd View");
//     },
//     false
//   );

//   const nav = document.querySelector("nav");
//   nav.addEventListener("mouseover", (event) => {
//     event.target.classList.add("height100");
//   });
//   nav.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("height100");
//   });
// };

// Prevent Default

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
