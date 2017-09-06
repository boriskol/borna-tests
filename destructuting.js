console.log("------- destructuting ---------");

var expense = {
    type: 'Business',
    amount: '$45 USD'
};
//ES5
//var type = expense.type;
//var amount = expense.amount;

//ES6
//const { type } = expense;
//const { amount } = expense;
//const { type, amount } = expense;
console.log({ amount } = expense.amount);
console.log({ type, amount } = expense);
console.log({ type, amount } = expense);

var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};
/*
function fileSummary(file){
    return `Th file ${file.name}.${file.extension} is of size ${file.size}`;
}*/
//dec es6
function fileSummary({ name, extension, size }, { color }) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
};


var vvv = fileSummary(savedFiled, { color: 'red' });
console.log(vvv);

const companies = [
    'Google',
    'Face',
    'Uber',
    'lola'
];

const [nameS, nameSS, ...rest] = companies;
console.log(nameS + ", " + nameSS + ", " + rest);


const companiesS = [
    { nameS: 'bor', locationS: 'usa' },
    { nameS: 'ava', locationS: 'ger' },
    { nameS: 'lot', locationS: 'cro' }
];

const [{locationS}] = companiesS;
console.log(locationS);


const Google = {
    locationZ: ['usa','ger', 'cro', 'it']
}

const {locationZ: [ locationQ, ...restQ ]} = Google;
console.log(locationQ+", "+restQ);


const points = [
    [4,5],
    [10,1],
    [0,40]
];

let mmm = points.map(([x,y]) =>{
   // return {x:x, y:y};
    return {x, y};
});
console.log(mmm);

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject,time,teacher])=>{
    return {subject, time, teacher}
});
console.log(classesAsObject);