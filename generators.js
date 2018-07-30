console.log("-----------generators----------------");

const mynumbers = [1,2,3,4];
let mytotal = 0;
for(let mynumber of mynumbers){
    mytotal += mynumber;
}
console.log(mytotal);

// generetors is function which can be entered and exit multiple times

class MyClass {
  *generator() {}
  * generator() {}
}

const obj = {
  *generator() {}
  * generator() {}
}

function* mynumbersG() {
    //stuff on sidewalk
    // walking down sidewalk
    //going into store with cash
    const stuffFromStore = yield 'cash';
// walking into laundry place
    const cleanClose = yield 'laundry'
    //walking back home
    return [stuffFromStore, cleanClose]
}
//stuff in the store
const gen = mynumbersG();
console.log(gen.next()); //leaving our house
//walked into the store
//purches our stuff
console.log(gen.next('groceries')); //leaving the store with groceries
console.log(gen.next('cleanclose')); 

function* colors(){
    yield 'red';
    yield 'blue';
    yield 'green';
}

//const col = colors();
/*console.log(col.next());
console.log(col.next());
console.log(col.next());
console.log(col.next());
*/
const mycol = [];
for(let color of colors()){
    mycol.push(color)
}
console.log(mycol);


const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};
const engineeringTeam = {
    sixe: 3,
    department : 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    testingTeam: testingTeam    
};

function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGeneretor = testingTeamIterator(team.testingTeam);
    //generetors 
    yield* testingTeamGeneretor
};

function* testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
};

const nams = [];
for (let nam of teamIterator(engineeringTeam)){
    nams.push(nam);
}
console.log(nams);


function *foo(){
    while(true){
        yield Math.random();
    }
}

function *foo(){
    var x = yield 10;
    console.log(x);
}

function *generatorForLoop(num) {
  for (let i = 0; i < num; i += 1) {
    yield console.log(i);
  }
}

const genForLoop = generatorForLoop(5);

genForLoop.next(); // first console.log - 0
genForLoop.next(); // 1
genForLoop.next(); // 2
genForLoop.next(); // 3
genForLoop.next(); // 4

//diference between regular return and yield
function withReturn(a) {
  let b = 5;
  return a + b;
  b = 6; // we will never re-assign b
  return a * b; // and will never return new value
}

withReturn(6); // 11
withReturn(6); // 11


function * withYield(a) {
  let b = 5;
  yield a + b;
  b = 6; // it will be re-assigned after first execution
  yield a * b;
}
const calcSix = withYield(6);
calcSix.next().value; // 11
calcSix.next().value; // 36


function * generator() {
  yield 5;
}

const gen = generator();

gen.next(); // {value: 5, done: false}
gen.next(); // {value: undefined, done: true}
gen.next(); // {value: undefined, done: true} - all other calls will produce the same result

function * generatorA() {
  yield 1;
  return 2;
  yield 3; // we will never reach this yield
}

const gen = generatorA();

gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: true}
gen.next(); // {value: undefined, done: true}

function * anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function * generator(i) {
  yield* anotherGenerator(i);
}

var gen = generator(1);

gen.next().value; // 2
gen.next().value; // 3
gen.next().value; // 4



function * generator(arr) {
  for (const i in arr) {
    yield i;
    yield yield;
    yield(yield);
  }
}

const gen = generator([0,1]);
gen.next();



function * generator(arr) {
  for (const el in arr)
    yield el;
}

const gen = generator([0, 1, 2]);

for (const g of gen) {
  console.log(g); // 0 -> 1 -> 2
}

gen.next(); // {value: undefined, done: true}


function * generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

gen.return(); // {value: undefined, done: true}
gen.return('Heeyyaa'); // {value: "Heeyyaa", done: true}

function * generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

gen.throw('Something bad'); // Error Uncaught Something bad
gen.next(); // {value: undefined, done: true}


function * generator() {
  yield 1;
}
// as Generator is not global variable we have to write something like this
//generator.prototype.__proto__.math = function(e = 0) {
generator.prototype.math = function(e = 0) {
  return e * Math.PI;
}
const gen = generator();
gen.math(1); // 3.141592653589793



//use
function * randomFrom(...arr) {
  while (true)
    yield arr[Math.floor(Math.random() * arr.length)];
}
const getRandom = randomFrom(1, 2, 5, 9, 4);
getRandom.next().value;











