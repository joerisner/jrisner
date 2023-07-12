---
layout: '../../layouts/CheatSheet.astro'
feature: 'JavaScript Arrays'
---

## [Return a single element](#return-a-single-element)

### `.at()`

_Returns the element at the index passed to it. Negative integers count back from the last element in the array._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.at(-1); // 'Winston'
```

### `.find()`

_Returns the first element that satisfies the provided predicate function (or `undefined`)._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston', 'Winnie'];
arr.find((el) => el.startsWith('W')); // 'Winston'
```

## [Return a new array](#return-a-new-array)

### `.map()`

_Returns a new array with the results of calling a provided function on every element in the array._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.map((el) => el.toLowerCase()); // ['nick', 'jess', 'schmidt', 'winston']
```

### `.filter()`

_Returns a new array with all elements that satisfy the provided predicate function._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.filter((el) => el.length > 4); // ['Schmidt', 'Winston']
```

### `.concat()`

_Merges two or more arrays or values into a single array and returns it._

```js
const arr1 = ['Nick', 'Jess', 'Schmidt', 'Winston'];
const arr2 = ['Cici', 'Coach'];
const str = 'Robby';
arr1.concat(arr2, str); // ['Nick', 'Jess', 'Schmidt', 'Winston', 'Cici', 'Coach', 'Robby']
```

### `...`

_The spread operator can also be used to merge arrays._

```js
const arr1 = ['Nick', 'Jess', 'Schmidt', 'Winston'];
const arr2 = ['Cici', 'Coach'];
[...arr1, ...arr2]; // ['Nick', 'Jess', 'Schmidt', 'Winston', 'Cici', 'Coach']
```

## [Return a string](#return-a-string)

### `.join()`

_Concatenates all elements in the array into a single string, separated by commas or by a provided string._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.join(); // 'Nick,Jess,Schmidt,Winston'
arr.join('-'); // 'Nick-Jess-Schmidt-Winston'
```

## [Return a boolean](#return-a-boolean)

### `.includes()`

_Returns true if the provided element is present in the array._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.includes('Winston'); // true
```

### `.some()`

_Returns true if at least one element in the array passes a provided predicate function._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.some((el) => el.startsWith('J')); // true
```

### `.every()`

_Returns true if every element in the array passes a provided predicate function._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.every((el) => typeof el === 'string'); // true
```

## [No return](#no-return)

### `.forEach()`

_Calls a provided function once for each element in the array._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
arr.forEach((el) => console.log(el));
// Nick
// Jess
// Schmidt
// Winston
```

### `for...of`

_Loops over elements in the array, performing some operation on each element (usually calling a function)._

```js
const arr = ['Nick', 'Jess', 'Schmidt', 'Winston'];
for (const el of arr) {
  console.log(el);
}
// Nick
// Jess
// Schmidt
// Winston
```
