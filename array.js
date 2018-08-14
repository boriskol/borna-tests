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










const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
/*const over = function(...fns){
  return function(...args){
    return fns.map(function(fn){
      return fn.apply(null, args)
    }) 
  }
}*/
//const minMax = over(Math.min, Math.max);
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






































