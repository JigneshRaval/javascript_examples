# JavaScript Tips & Tricks

## Commas in array literal
REF : https://dmitripavlutin.com/power-up-the-array-creation-in-javascript/

The comma character , is used to separate the elements enumerated in the array literal. Depending on the comma position or the missing element between commas, arrays with different structure are created.

```javascript
// 1. First case: usual array literal
// Dense Array : array literal does not start or end with a comma
let items = ['first', 'second', 'third'];
items; // => ['first', 'second', 'third']

// 2. Second case: a noop comma at the end
// last comma is ignored by JavaScript,
// For this case JavaScript creates a dense array too.
let items = ['first', 'second', 'third', ];
items; // => ['first', 'second', 'third']
```

## sparse array

> The array literal contains commas with no element in between: [... , , ...]. This way items is a sparse array with an empty slot at index 1. Accessing an empty slot items[1] evaluates to undefined.

> Numeric argument creates sparse array
```
let items = new Array(3);
items;        // => [<3 empty slots>]
items.length; // => 3
```

```javascript
// 3. Third case: no element between commas
// The third case happens when between a pair of commas no element is specified or the array literal starts with a comma.
// Such configuration creates a sparse array: a collection whose elements don't have contiguous indexes (in other words the array has holes).

let items = [, 'first', 'second', 'third'];
items;        // => [<1 empty slot>, 'first', 'second', 'third']
items[0];     // => undefined
items[1];     // => 'first'
items.length; // => 4
```

## 10 JavaScript string methods you should know
Ref : https://dev.to/frugencefidel/10-javascript-string-methods-you-should-know-4l76

### 1. startsWith()

Check if string starts with specified character(s).

```javascript
const str = 'JavaScript is amazing';

console.log(str.startsWith('JavaScript')); // true
console.log(str.startsWith('Java')); // true
console.log(str.startsWith('javascript')); // false

// position is optional
// if not specified, the default value is 0

console.log(str.startsWith('Script', 4)); // true
console.log(str.startsWith('SCRIPT', 4)); // false
```

### 2. endsWith()

Check if string ends with specified character(s).

```javascript
const str = 'JavaScript is amazing';

// check if ends with 'amazing'
console.log(str.endsWith('amazing')); // true
console.log(str.endsWith('ing')); // true
console.log(str.endsWith('Amazing')); // false

// length is optional
// if not specified, the default value is length of the string
console.log(str.endsWith('is', 13)); // true
console.log(str.endsWith('i', 13)); // false
console.log(str.endsWith('s', 13)); // true
```

### 3. includes()

Check if string contains specified character(s).
```javascript
const str = 'JavaScript is amazing';

console.log(str.includes('Script')); // true
console.log(str.includes('script')); // false
console.log(str.includes(' ')); // true
console.log(str.includes('array')); // false
```

### 4. slice()

Copy some part of string without modifying the original one.
```javascript
const str = 'JavaScript is amazing';

// Default start index is 0
console.log(str.slice()); // 'JavaScript is amazing'

// start copy at index 4
console.log(str.slice(4)); // 'Script is amazing'

// end copy at index 10(character at this index will not be included)
console.log(str.slice(0, 10)); // 'JavaScript'
```

### 5. toUpperCase()

Convert string into upper case.

```javascript
const str = 'JavaScript is amazing';

console.log(str.toUpperCase()); // 'JAVASCRIPT IS AMAZING'
```

### 6. toLowerCase()

Convert string into lower case.
```javascript
const str = 'JavaScript is amazing';

console.log(str.toLowerCase()); // 'javascript is amazing'
```

### 7. charAt()

Return character at specified position.

```javascript
const str = 'JavaScript is amazing';

console.log(str.charAt()); // 'J'
console.log(str.charAt(11)); // 'i'
console.log(str.charAt(14)); // 'a'
console.log(str.charAt(110)); // ''
```
### 8. split()

Split string into array of substrings.

```javascript
const str = 'JavaScript is amazing';
const strNew = 'JavaScript-is-amazing';

console.log(str.split()); // ["JavaScript is amazing"]

// Separator string used to determine where to make each split
console.log(str.split('S')); // ["Java", "cript is amazing"]
console.log(str.split('is')); // ["JavaScript ", " amazing"]
console.log(str.split(' ')); // ["JavaScript", "is", "amazing"]
console.log(strNew.split('-')); // ["JavaScript", "is", "amazing"]
```

### 9. replace()

Replaces specified value with another value in a string.

```javascript
const str = 'JavaScript is amazing';

console.log(str.replace('JavaScript', 'Node.js')); // 'Node.js is amazing'

// replace() method is case sensitive
// replace will not work
console.log(str.replace('Javascript', 'Node.js')); // 'JavaScript is amazing'

// use regular expression for case insensitive
console.log(str.replace(/Javascript/i, 'Node.js')); // 'Node.js is amazing'

// replace() method replaces only the first match
console.log(str.replace('a', 'A')); // 'JAvaScript is amazing'

// to replace all matches, use regular expression
console.log(str.replace(/a/g, 'A')); // 'JAvAScript is AmAzing'
```

### 10. repeat()

Return new string with specified number of copies of existing string.
```javascript
const str = 'JavaScript';

console.log(str.repeat(3)); // 'JavaScriptJavaScriptJavaScript'
console.log(str.repeat(1)); // 'JavaScript'
console.log(str.repeat(0)); // ''
```

## 10 JavaScript array methods you should know

Ref : https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3

### 1. forEach()

This method can help you to loop over array's items.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(item => {
console.log(item); // output: 1 2 3 4 5 6
});
```

### 2. includes()

This method check if array includes the item passed in the method.
```javascript
const arr = [1, 2, 3, 4, 5, 6];

arr.includes(2); // output: true
arr.includes(7); // output: false
```

### 3. filter()

This method create new array with only elements passed condition inside the provided function.
```javascript
const arr = [1, 2, 3, 4, 5, 6];

// item(s) greater than 3
const filtered = arr.filter(num => num > 3);
console.log(filtered); // output: [4, 5, 6]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]
```

### 4. map()

This method create new array by calling the provided function in every element.
```javascript
const arr = [1, 2, 3, 4, 5, 6];

// add one to every element
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]
```

### 5. reduce()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value - MDN

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21
```

### 6. some()

This method check if at least one of array's item passed the condition. If passed, it return 'true' otherwise 'false'.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

// at least one element is greater than 4?
const largeNum = arr.some(num => num > 4);
console.log(largeNum); // output: true

// at least one element is less than or equal to 0?
const smallNum = arr.some(num => num <= 0);
console.log(smallNum); // output: false
```
### 7. every()

This method check if all array's item passed the condition. If passed, it return 'true' otherwise 'false'.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

// all elements are greater than 4
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false

// all elements are less than 10
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true
```

### 8. sort()

This method used to arrange/sort array's item either ascending or descending order.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];

// sort in descending order
descOrder = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sort in ascending order
ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
```

### 9. Array.from()

This change all thing that are array-like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map, filter and so on.

```javascript
const name = 'frugence';
const nameArray = Array.from(name);

console.log(name);
// output: frugence
console.log(nameArray);
// output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']

// working with DOM

// I assume that you have created unorder list of items in our html file.

const lis = document.querySelectorAll('li');
const lisArray = Array.from(document.querySelectorAll('li'));

// is true array?
console.log(Array.isArray(lis)); // output: false
console.log(Array.isArray(lisArray));  // output: true
```

### 10. Array.of()

This create array from every arguments passed into it.

```javascript
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]
```

## Array.reduce()

Ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

### Sum all the values of an array

```javascript
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// sum is 6
```

### Sum of values in an object array

```javascript
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6
```

### Flatten an array of arrays

```javascript
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

// using ES6 arrow function:

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);
```

### Counting instances of values in an object

```javascript
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Grouping objects by a property

```javascript
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### Bonding arrays contained in an array of objects using the spread operator and initialValue

```javascript
// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Remove duplicate items in array

```javascript
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]
```

### Function composition enabling piping

```javascript
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

## ES6 spread operator

Spread operator generally accepts iterable objects (an array is iterable by default),
it is possible to create custom initialization.

```javascript
// EXAMPLE 1
// =============================
// The array literal ['First', ...source] indicates that 'First' is the first element.
// The rest of elements are taken from source array using the spread operator.

let source = ['second', 'third'];
let items = ['first', ...source];
items; // => ['first', 'second', 'third']

// EXAMPLE 2
// =============================
let odds = [1, 3, 5];
let evens = [4, 6];
let zero = 0;
let negative = -1;
let items = [...odds, zero, ...evens, negative];
items; // => [1, 3, 5, 0, 4, 6, -1]
```

## ES6 generator
https://dmitripavlutin.com/power-up-the-array-creation-in-javascript/

A generator function returns a generator object that is iterable too,
so you can use the generators flexibility to create arrays.

Let's create a generator function that accepts first argument as the elements value and the second argument as the number of elements. Then use it with spread operator and array literal to instantiate a new array:

```javascript
function* elements(element, length) {
  let index = 0;
  while (length > index++) {
    yield element;
  }
}
[...elements(0, 5)];    // => [0, 0, 0, 0, 0]
[...elements('hi', 2)]; // => ['hi', 'hi']
```

Each time elements(element, length) is called, a generator object is created. This generator object is used by the spread operator to initialize the array with elements.

[...elements(0, 5)] is creating an array with five zeros. Respectively [...elements('hi', 2)] creates an array of two 'hi' strings.

## Array constructor

The array in JavaScript is an object. As any object, it has a constructor function Array that allows creating new instances. Let's see this in a sample:

```javascript
// From constructor invocation
let arrayConstr = new Array(1, 5);
arrayConstr;                        // => [1, 5]
typeof arrayConstr;                 // => 'object'
arrayConstr.constructor === Array;  // => true

// From array literal
let arrayLiteral = [1, 5];
arrayLiteral;                       // => [1, 5]
typeof arrayLiteral;                // => 'object'
arrayLiteral.constructor === Array; // => true
```

## Useful static methods

```javascript
// EXAMPLE 1
// Let's use fill() method to initialize an array with 5 zeros:
let zeros = new Array(5).fill(0);
zeros; // => [0, 0, 0, 0, 0]
```

In Example 1, new Array(5) is creating a sparse array with 5 empty slots.
Then fill(0) method fills the empty slots with 0.

```javascript
// EXAMPLE 2
let zeros = Array.from(new Array(5), () => 0);
zeros; // => [0, 0, 0, 0, 0]

// OR

let items = Array.from(new Array(5), (item, index) => index + 1);
items; // => [1, 2, 3, 4, 5]
```

In Example 2, A sparse array with length 5 created using new Array(5) is passed as an argument to Array.from(). The second argument is used as a map function that returns 0.
5 iterations (the array length) are made and the arrow function invocation result on each step is used as the array element value.

## Array.from()

The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

**SYNTAX:** `Array.from(arrayLike[, mapFn[, thisArg]])`

**arrayLike**
An array-like or iterable object to convert to an array.

**mapFn ( Optional )**
Map function to call on every element of the array.

**thisArg (Optional)**
Value to use as this when executing mapFn.

```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

## Array.prototype.some()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

The some() method tests whether at least one element in the array passes the test implemented by the provided function.

`arr.some(callback[, thisArg])`


    callback
        Function to test for each element, taking three arguments:

        currentValue
            The current element being processed in the array.
        index Optional
            The index of the current element being processed in the array.
        arrayOptional
            The array some() was called upon.

    thisArgOptional
        Value to use as this when executing callback.

```javascript
// EXAMPLE 1
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

// Using ES6 Arrow functions
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

### Checking whether a value exists in an array

```javascript
var fruits = ['apple', 'banana', 'mango', 'guava'];

// ES5
function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

// ES6
function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

## Finding an Average with the Reduce Method In JavaScript​

```
const average = euros.reduce((total, amount, index, array) => {
  total + amount
  return total/array.length
}, 0);
```

```javascript
const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) {
    return total/array.length;
  }else {
    return total;
  }
});

average // 39.37

// OR
const euro = [29.76, 41.85, 46.5];

const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);

above30 // [ 41.85, 46.5 ]
```

```javascript
// Count number of items
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
```

## Flattening an array of arrays with the Reduce Method In JavaScript​​

```javascript
// EXAMPLE 1
// =====================
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// EXAMPLE 2
// =====================
const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']},
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color);
  })
  return total;
}, [])

colors //['blue','green','green','black','orange','blue','green','red']

// If we only need unique number then we can check to see of the number already exists in total before we push it.

const uniqueColors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
    if (total.indexOf(color) === -1){
     total.push(color);
    }
  });
  return total;
}, []);

uniqueColors // [ 'blue', 'red', 'green', 'black', 'orange']
```

## Piping with Array Reduce ( Reducing Functions )

A pipeline is a term used for a list of functions that transform some initial value into a final value.

You could write a function that takes an input, and returns (input + 1) * 2 — 1. The problem is that we know we are going to need to increment the amount three times, then double it, then decrement it, and then halve it at some point in the future. We don’t want to have to rewrite our function every time so we going to use reduce to create a pipeline.

```javascript
function increment(input) { return input + 1;}

function decrement(input) { return input — 1; }

function double(input) { return input * 2; }

function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);

result // 3
```

## Creating a Tally with the Reduce Method In JavaScript​

```javascript
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// To tally items in an array our initial value must be an empty object, not an empty array
const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

// OR

const count = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
```

# Array Methods

REF: https://medium.com/@shabeermothi_24117/javascript-array-methods-623f53dcf8bc

JavaScript offers many handy methods to do these functions :

1. Remove an element from the first index of an Array (Array.prototpye.shift()) | JSFiddle

```javascript
// variable 'arr'
var arr = ["Apples", "Oranges", "Mangoes"];

// remove first element "Apples" from 'arr'
arr.shift();

console.log(arr); // ["Oranges", "Mangoes"]
```

2. Add one or more elements to the beginning or first index of an Array (Array.prototype.unshift()) | JSFiddle

```javascript
// variable 'arr'
var arr = ["Apples", "Oranges", "Mangoes"];

// add two new elements to the first index of 'arr'
arr.unshift("Pineapple", "Strawberry");

console.log(arr); // ["Pineapple", "Strawberry", "Apples", "Oranges", "Mangoes"]
```

3. Add an element to the end or last index of an Array (Array.prototype.push()) | JSFiddle

```javascript
// variable 'arr'
var arr = ["Apples", "Oranges", "Mangoes"];

// add an element to the end of 'arr'
arr.push("Pineapple");

console.log(arr); // ["Apples", "Oranges", "Mangoes", "Pineapple"]
```

4. Remove an element from the end or last index of an Array (Array.prototype.pop()) | JSFiddle

```javascript
// variable 'arr'
var arr = ["Apples", "Oranges", "Mangoes"];

// remove an element from last index of 'arr'
arr.pop();

console.log(arr); // ["Apples", "Oranges"]
```

5. Add and/or remove elements from specified index of an Array (Array.prototype.splice()) | JSFiddle

```javascript
// variable ‘arr’
var arr = [“Apples”, “Oranges”, “Mangoes”];

// add an element to the 2nd index of ‘arr’ but don’t remove any elements. Note that the second argument to slice() specifies the number of elements to be removed from the index provided as first argument.
arr.splice(1, 0, “Pineapple”);

console.log(arr); // [“Apples”, “Pineapple”, “Oranges”, “Mangoes”];

// remove an element from the 3rd index of ‘arr’ but don’t add any new elements
arr.splice(2, 1);

console.log(arr); // [“Apples”, “Pineapple”, “Mangoes”];

// remove an element from the 1st index of ‘arr’ and add an element
arr.splice(1, 1, “Strawberry”);

console.log(arr); // [“Apples”, “Strawberry”, “Mangoes”];
```

# JavaScript Arrays Methods & Props — map, filter, find, reduce, concat, etc

REF : https://engineering.headhonchos.com/all-about-javascript-arrays-44d2d36874b9

## Array Methods

## 1. Mutator Methods :

Mutator methods, associated with arrays in javascript, some methods modify the existing array

Array.prototype.push() — push adds one or more elements to the end of an array and returns the updated length of array.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.push('Saturday'); //7
console.log(days); //["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
```

Array.prototype.pop()— pop method removes the last element from an array and returns that removed element.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.pop(); //Friday
console.log(days); //["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
```

Array.prototype.shift()— similar to pop method, shift removes the first element from an array and returns that element.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.shift(); //Sunday
console.log(days); //[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
```

Array.prototype.unshift() — similar to push method, unshift method add one or more elements to the front of an array and returns the updated length of the array.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.unshift('Saturday'); //7
console.log(days); //[ "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
```

Array.prototype.sort() — this method sorts the elements of an array and returns the new sorted array.

```javascript
var numbers = [3,45,5,7,32,56,87,11];
numbers.sort(); //[11, 3, 32, 45, 5, 56, 7, 87]
console.log(numbers);  //[11, 3, 32, 45, 5, 56, 7, 87]
```

Array.prototype.reverse()— this method reverses the order of the elements of an existing array i.e. the first element of array becomes the last, and the last element becomes the first element.

```javascript
var numbers = [3,45,5,7,32,56,87,11];
numbers.reverse(); //[11, 87, 56, 32, 7, 5, 45, 3]
```

Array.prototype.splice() — this method modify the existing array by adding new elements or removing elements from the array. Splice method can take any number of arguments, first is the start index and it is required, second is the delete count i.e. the number of element to delete from the start index, if given 0 then nothing is going to delete, it is optional and rest of the arguments are the elements to be added at given index.

```javascript
Syntax -
array.splice(start, deleteCount, item1, item2, ...)

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

days.splice(2,1); //["Tuesday"]
console.log(days); //["Sunday", "Monday", "Wednesday", "Thursday", "Friday"]

days.splice(2,0,'Tuesday');
console.log(days) //["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
```

## 2. Accessor Methods : Not Modifies Array
Accessor Methods, are used to access values or return some required representation and do not change the existing array(Accessor Methods)

Array.prototype.slice() — slice method can takes two arguments, first is start index and second is end index and returns an array that has only the elements between those two indexes. The start index is required, the end index optional, if end index is not given then extract till end of the array.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.slice(2,4); //["Tuesday", "Wednesday"]
days.slice(3); //["Wednesday", "Thursday", "Friday"]
```

Array.prototype.concat() — this method is used to concatenate or glue arrays together and returns a new array concatenated array.

```javascript
var week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var weekend_days = ['Saturday', 'Sunday'];

week_days.concat(weekend_days); //["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
```

Array.prototype.join()— this method flattened all the elements of the array to a single string. The argument passed to join is glued between array elements while joining to string.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.join('-'); //Sunday-Monday-Tuesday-Wednesday-Thursday-Friday
```

Array.prototype.includes() — return true or false whether an array contains a certain element, which is passed as an argument in the includes function.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.includes('Sunday'); //true
days.includes('sunday'); //false
```

Array.prototype.indexOf()— Returns the index of first (least) occurrence of element within the array which is given, or -1 if none is found. It also take second argument which is optional and specify from where to start.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.indexOf('Tuesday'); //2
days.indexOf('Tuesday', 4); //-1
days.indexOf('March'); //-1
```

Array.prototype.lastIndexOf()— Returns the index of last (greatest) occurrence of element within the array which is given, or -1 if none is found. It also take second argument which is optional and specify from where to start.

```javascript
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.lastIndexOf('Tuesday'); //2
days.lastIndexOf('Tuesday', 4); //2
days.lastIndexOf('March'); //-1
```

## 3. Iteration methods

Array.prototype.filter() — It iterate over the every element of the given array and return a new array having only those element which the provided filtering function returns true.

```javascript
var random_numbers = [2,4,5,6,7,9,34,26,45,39];

random_numbers.filter(function(element){
return element % 2;
});

//[5, 7, 9, 45, 39]
```

Array.prototype.find() — similar to filter method, it also iterate over array and return only the first element of array which return true with the provided conditions or functionality.

```javascript
var random_numbers = [2,4,5,6,7,9,34,26,45,39];

random_numbers.find(function(element){
    return element > 20;
});
//34
```

Array.prototype.forEach() —It iterate and calls a function for each element in the array. This callback function can be called with three parameters, first is element of array, second is index of that element and third is the array being traversed.

```javascript
var random_numbers = [1,2,4,5,6,7];

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
random_numbers.forEach(logArrayElements);
//a[0] = 11
//a[1] = 21
//a[2] = 41
//a[3] = 51
//a[4] = 61
//a[5] = 71
```

Array.prototype.map() — Creates a new array with the results of calling a provided function on every element in this array.

```javascript
var random_numbers = [1,2,4,5,6,7];

var doubledArray = random_numbers.map(function(element){
    return element * 2;
});

console.log(doubledArray); //[2, 4, 8, 10, 12, 14]
```

Array.prototype.reduce()— It traverses the array (from left-to-right) and invokes a callback function on each element. The value returned is the progressively passed from callback to callback, and at the end reduce() returns the cumulative value.

```javascript
Syntax -
array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

var rockets = [
    {country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(total, elem) {
return total + elem.launches; }, 0);

sum // 85
```

Note : map(), reduce(), and filter() as powerful alternatives while transversing elements, finding cumulative values, or driving subsets on some conditions. These help method reduce complexity, work without side effects, and make code more readable and maintainable.
