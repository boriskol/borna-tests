function average(a, b) {
  return a + b / 2;
}

console.log(average(2, 1));


var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});
console.log(items)
// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
console.log(items)




const allEqual = arr => arr.every(val => val === arr[0]);
const allEqual = function(arr){
  return arr.every(function(val){
    return val === arr[0];
  })
}
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true


const any = (arr, fn = Boolean) => arr.some(fn);
const any = function(arr, fn = Boolean){
  return arr.some(fn)
}
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true

const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
const arrayToCSV = function(arr, delimiter = ','){
  return arr.map(function(v){
    return v.map(function(x){
      return `"${x}"`
    }).join(delimiter)
  }).join('\n')
}
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'


const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
const bifurcate = function(arr, filter){
  return arr.reduce(function(acc, val, i){
     return (acc[filter[i] ? 0 : 1].push(val), acc);
  }, [[], []])
}
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]


function compar(x){
  return x[0] === 'b'
}
//const bifurcateBy = (arr, fn) => arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
const bifurcateBy = function(arr, fn){
  return arr.reduce(function(acc, val, i){
    return (acc[fn(val, i) ? 0 : 1].push(val), acc);
  }, [[], []])
}
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
bifurcateBy(['beep', 'boop', 'foo', 'bar'], function(x){return x[0] === 'b'}); // [ ['beep', 'boop', 'bar'], ['foo'] ]
bifurcateBy(['beep', 'boop', 'foo', 'bar'], compar);

const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
/*const chunk = function(arr, size){
  return Array.from(function( {length: Math.ceil(arr.length / size) }, (v, i) ){
      return arr.slice(i * size, i * size + size);
  })
}*/
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

//Removes falsey values from an array.
const compact = arr => arr.filter(Boolean);
const compact = function(arr){
  return arr.filter(Boolean);
}
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]


const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}

//ounts the occurrences of a value in an array.
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const countOccurrences = function(arr, val){
  return arr.reduce(function(a, v){
    return v === val ? a + 1 : a;
  }, 0);
}
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

//eep flattens an array.
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
const deepFlatten = function(arr){
  return [].concat(...arr.map(function(v){
    return (Array.isArray(v) ? deepFlatten(v) : v)
  }))
}
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

//Returns the difference between two arrays.
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
const difference = function(a,b){
  const s = new Set(b);
  return a.filter(function(x){
    return !s.has(x);
  })
}
difference([1, 2, 3,6,7], [1, 2, 4,5,3]); // [3]


//difference by
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(v => fn(v)));
  return a.filter(x => !s.has(fn(x)));
};
const differenceBy = function(a, b, fn){
  var c = b.map(function(v){
    return fn(v)
  })
  const s = new Set(c);
  return a.filter(function(x){
    return !s.has(fn(x));
  })
}
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]


const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
/*const differenceWith = function(arr, val, comp){
  return arr.filter(function(a){
    return val.findIndex(function(b){
      return comp(a, b) === -1;
    })
  })
}*/
//differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => a === b); // [1, 1.2]
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], function(a, b){return a === b}); // [1, 1.2]

const drop = (arr, n = 1) => arr.slice(n);
const drop = function(arr, n = 1){
  return arr.slice(n)
}
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []

//Returns a new array with n elements removed from the right.
const dropRight = (arr, n = 1) => arr.slice(0, -n);
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []


//Removes elements from the end of an array until the passed function returns true. Returns the remaining elements in the array.
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
const dropRightWhile = function(arr, func){
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
}
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

//Removes elements in an array until the passed function returns true. Returns the remaining elements in the array.
//dropWhile
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
const dropWhile = function(arr, func){
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
}
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

//Returns every nth element in an array.
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
const everyNth = function(arr, nth){
  return arr.filter(function(e, i){
    return i % nth === nth - 1
  })
}
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]

//Filters out the non-unique values in an array.
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
const filterNonUnique = function(arr){
  return arr.filter(function(i){
    return arr.indexOf(i) === arr.lastIndexOf(i);
  })
}
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1,3,5]

//Filters out the non-unique values in an array, based on a provided comparator function.
const filterNonUniqueBy = (arr, fn) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
const filterNonUniqueBy = function(arr, fn){
  return arr.filter(function(v, i){
    return arr.every(function(x, j){
      return (i === j) === fn(v, x, i, j)
    })
  });
}
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]

//Returns the last element for which the provided function returns a truthy value.
//The pop() method removes the last element from an array and returns that element.
function compare(n){
  return n % 2 === 1
}
//const findLast = (arr, fn) => arr.filter(fn).pop();
const findLast = function(arr, fn){
  return arr.filter(fn).pop()
}
//findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
//findLast([1, 2, 3, 4], function(n){return n % 2 === 1} ); // 3
findLast([1, 2, 3, 4], compare );


const findLastIndex = (arr, fn) =>
  arr.map((val, i) => [i, val]).filter(([i, val]) => fn(val, i, arr)).pop()[0];
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)

//Flattens an array up to the specified depth.
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
const flatten = function(arr, depth = 1){
  return arr.reduce(function(a, v) {
    return a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v);
  }, [])
}
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

//Executes a provided function once for each array element, starting from the array's last element.
const forEachRight = (arr, callback) =>
  arr.slice(0)
    .reverse()
    .forEach(callback);
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'

//Groups the elements of an array based on the given function.
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
/*const groupBy = function(arr, fn){
  return arr.map(typeof fn === 'function' ? fn : function(val){
    return val[fn].reduce(function(acc, val, i){
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, [])
  }, [])
}*/
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}


//Returns the head of a list.
const head = arr => arr[0];
const head = function(arr){
  return arr[0]
}
head([1, 2, 3]); // 1

//Returns all indices of val in an array. If val never occurs, returns [].
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
const indexOfAll = function(arr, val){
  return arr.reduce(function(acc, el, i){
    return (el === val ? [...acc, i] : acc)
  }, []);
}
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []

//Returns all the elements of an array except the last one.
const initial = arr => arr.slice(0, -1);
const initial = function(arr){
  return arr.slice(0, -1);
}
initial([1, 2, 3]); // [1,2]


//Initializes an array containing the numbers in the specified
//range where start and end are inclusive with their common difference step.
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);
const initializeArrayWithRange = function(end, start = 0, step = 1){
  return Array.from({ length: Math.ceil((end - start + 1) / step) }, function(v, i){
    return i * step + start
  });
}
initializeArrayWithRange(5); // [0,1,2,3,4,5]
initializeArrayWithRange(7, 3); // [3,4,5,6,7]
initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
//Initializes an array containing the numbers in the specified range (in reverse)
//where start and end are inclusive with their common difference step.
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
const initializeArrayWithRangeRight = function(end, start = 0, step = 1){
  return Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(function(v, i, arr) {
    return (arr.length - i - 1) * step + start
  });
}
initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]

//Initializes and fills an array with the specified values.
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
const initializeArrayWithValues = function(n, val = 0){
  return Array(n).fill(val);
}
initializeArrayWithValues(5, 2); // [2,2,2,2,2]

//Create a n-dimensional array with given value.
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));

initializeNDArray(1, 3); // [1,1,1]
initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]

//Returns a list of elements that exist in both arrays.
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
const intersection = function(a, b){
  const s = new Set(b);
  return a.filter(function(x){
    return s.has(x)
  });
}
intersection([1, 2, 3], [4, 3, 2]); // [2,3]

//Returns a list of elements that exist in both arrays,
//after applying the provided function to each array element of both.
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(x => fn(x)));
  return a.filter(x => s.has(fn(x)));
};
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]

//Returns a list of elements that exist in both arrays, using a provided comparator function.
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
const intersectionWith = function(a, b, comp){
  return a.filter(function(x){
    return b.findIndex(function(y){
      return comp(x, y)
    }) !== -1;
  })
}
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]

//Returns 1 if the array is sorted in ascending order,
//-1 if it is sorted in descending order or 0 if it is not sorted.
const isSorted = arr => {
  let direction = -(arr[0] - arr[1]);
  console.log(direction)
  for (let [i, val] of arr.entries()) {

    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    console.log(direction)

    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;

  }
};

isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0

//Joins all elements of an array into a string
//and returns this string. Uses a separator and an end separator.
const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );
join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // "pen,pineapple,apple&pen"
join(['pen', 'pineapple', 'apple', 'pen'], ','); // "pen,pineapple,apple,pen"
join(['pen', 'pineapple', 'apple', 'pen']); // "pen,pineapple,apple,pen"

//Converts an array of objects to a
//comma-separated values (CSV) string that contains only the columns specified.
const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'], ';'); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'


//last
const last = arr => arr[arr.length - 1];
last([1, 2, 3]); // 3

//Takes any number of iterable objects or objects with a length property and returns the longest one.
const longestItem = (...vals) => [...vals].reduce((a, x) => (a.length > x.length ? a : x), []);
const longestItem = function(...vals){
  return [...vals].reduce(function(a, x){
    return a.length > x.length ? a : x
  }, []);
}
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'


//Maps the values of an array to an object using a
//function, where the key-value pairs consist of the original value as the key and the mapped value.
const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
const mapObject = function(arr, fn) {
  return (function(a) {
    return (a = [arr, arr.map(fn)]), a[0].reduce(function(acc, val, ind){
      return ((acc[val] = a[1][ind]), acc)
    }, {})
  })();
}
const squareIt = arr => mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }


//Returns the n maximum elements from the provided array. If n is greater
//than or equal to the provided array's length,
//then return the original array(sorted in descending order).
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
// sort ascd //const maxN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]


//Returns true if the provided predicate function
//returns false for all elements in a collection, false otherwise.
const none = (arr, fn = Boolean) => !arr.some(fn);
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true

//Returns the nth element of an array.
const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
const nthElement = function(arr, n = 0){
  return ( n > 0 ? arr.slice(n, n + 1) : arr.slice(n) )[0];
}
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'

//Groups the elements into two arrays, depending on the provided function's truthiness for each element.
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const partition = function(arr, fn) {
  return arr.reduce(function(acc, val, i, arr) {
    return acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
  },[[], []]);
}
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
partition(users, o => o.active); // [[{ 'user': 'fred', 'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]

//Mutates the original array to filter out the values specified.
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
const pull = function(arr, ...args){
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter(function(v, i){
    return !argState.includes(v)
  });
  arr.length = 0;
  pulled.forEach(function(v){
    return arr.push(v)
  });
  return arr
};
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]

//Mutates the original array to filter out the values at the specified indexes.
const pullAtIndex = (arr, pullArr) => {
  let removed = [];

  let pulled = arr.map((v, i) => (pullArr.includes(i) ? removed.push(v) : v)).filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  //console.log(removed)
  return removed;
};
/*const pullAtIndex = (arr, pullArr) => {
  let removed = [];
  let pulled = arr.map(function(v, i){
    return (pullArr.includes(i) ? removed.push(v) : v)
  }).filter(function(v, i){
    return !pullArr.includes(i)
  });
  arr.length = 0;
  pulled.forEach(function(v){
    arr.push(v)
  });
  return removed;
};*/
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]

//Mutates the original array to filter out the values specified. Returns the removed elements.
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};
const pullAtValue = function(arr, pullArr){
  let removed = [],
  pushToRemove = arr.forEach(function(v, i) {
    //console.log(v)
    return (pullArr.includes(v) ? removed.push(v) : v)
  }),
  mutateTo = arr.filter(function(v, i) {
    //console.log(v)
    return !pullArr.includes(v)
  });
  arr.length = 0;
  mutateTo.forEach(function(v){
    //console.log(`mutateTo ${v}`)
    return arr.push(v)
  });
  //console.log(removed)
  //console.log(mutateTo)
  //console.log(arr)
  return arr//removed;
};
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
console.log(arr)

//Mutates the original array to filter out the values specified, based on a given iterator function.
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]





//
//Filter an array of objects based on a condition while also filtering out unspecified keys.
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
const reducedFilter = function(data, keys, fn){
  return data.filter(fn)
    .map(function(el){
          return keys.reduce(function(acc, key){
            //return acc[key] = el[key];
            if(acc[key] = el[key]){
              //if i return el return entire el object
              return acc;
            }
          }, {})
    });
}
function between(item){
  return item.age >= 33 && item.age <= 48
}
const data = [{id: 1,name: 'john',age: 24},{id: 2,name: 'mike',age: 50},{id: 3,name: 'borna',age: 48},{id: 4,name: 'leanne',age: 33}];
//reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
reducedFilter(data, ['id', 'name'], between); // [{ id: 2, name: 'mike'}]
























const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
var minMax = over(1, 2, 3, 4, 5); // [1,5]




const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();



const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15


const rearg = function(fn, indexes){
  return function(...args){
    return fn(...indexes.map(i => args[i]));
    }
  }
//const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
console.log(rearged('b', 'c', 'a')); // ['a', 'b', 'c']



const spreadOver = function(fn){
  return function(argsArr){
    return fn(...argsArr);
  }
}
//const spreadOver = fn => argsArr => fn(...argsArr);
const arrayMax = spreadOver(Math.max);
console.log(arrayMax([1, 2, 3])); // 3


const unary = fn => val => fn(val);
/*const unary = function(fn){
  return function(val){
    return fn(val);
  }
} */
['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
