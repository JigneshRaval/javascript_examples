# JavaScript Tips & Tricks : 2

## Compose methods

REF : https://ignaciochavez.com/using-composition-and-array-functions/

```javascript
// Good
pickArtistName(grabBestMusic(grabRock(music)))

// Better
compose(doFirstAction, doSecondAction, doThirdAction, etc...);
```

compose would now apply each function from left to right by passing the result from one function to the next one, and so on.
This way you can re-arrange, replace, remove or insert actions as you wish, making it now easier to read and maintain.

```javascript
// Compose Method
// pass a bunch of functions, return a function
var compose = (...funcs) =>
    (...args) => {
        // traverse the list of functions and apply their result to the next one
        funcs.forEach((f) => {

        // apply needs an array, and passes the right context
        args = [f.apply(this, args)];
    });

    return args[0];
};

// USAGE
// sort function
const sortAscending = x => x.sort( (a, b) => {
    var res = 0;
    res = a.recording.year &lt; b.recording.year ? -1 : 1;
    return res;
});

const takeFirst = x => x.length > 0 && x[0];
const getAlbumName = x => x.album;

const getOldestAlbum = compose(sortAscending, takeFirst, getAlbumName);

getOldestAlbum( music );

// output: Let it be
```

## Destructure nested objects in function params

REF : https://medium.freecodecamp.org/check-out-these-useful-ecmascript-2015-es6-tips-and-tricks-6db105590377

```javascript
var car = {
  model: 'bmw 2018',
  engine: {
    v6: true,
    turbo: true,
    vin: 12345
  }
}

const modelAndVIN = ({model, engine: {vin}}) => {
  console.log(`model: ${model} vin: ${vin}`);
}

modelAndVIN(car); // => model: bmw 2018  vin: 12345
```

## Merge objects

```javascript
let object1 = { a:1, b:2,c:3 }
let object2 = { b:30, c:40, d:50}
let merged = {...object1, ...object2} //spread and re-add into merged

// Property keys in the 2nd object will override property keys in the 1st object.
console.log(merged) // {a:1, b:30, c:40, d:50}
```

# Sets

## De-duping Arrays Using Sets

In ES6 you can easily de-dupe items using Sets, as Sets only allows unique values to be stored.

```javascript
let arr = [1, 1, 2, 2, 3, 3];

let deduped = [...new Set(arr)]

// OUTPUT [1, 2, 3]
```

## Using Array methods

Converting Sets to an Array is as simple as using a spread operator (...). You can use all the Array methods easily on Sets as well!

```javascript
let mySet = new Set([1,2, 3, 4, 5]);

var filtered = [...mySet].filter((x) => x > 3) // [4, 5]
```

# Array destructuring

## Swap Array values

```javascript
let param1 = 1;
let param2 = 2;

//swap and assign param1 & param2 each others values
[param1, param2] = [param2, param1];

console.log(param1) // 2
console.log(param2) // 1
```

## Receive and assign multiple values from a function

In the below example, we are fetching a post at /post and related comments at /comments . Since we are using async / await , the function returns the result in an array. Using array destructuring, we can simply assign the result directly into corresponding variables.

```javascript
async function getFullPost(){
  return await Promise.all([
    fetch('/post'),
    fetch('/comments')
  ]);
}

const [post, comments] = getFullPost();
```
