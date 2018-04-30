var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element ) { 
  return element .length; 
}); // [8, 6, 7, 9]

elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

materials.map(({ length }) => length); // [8, 6, 7, 9]


console.log("------- arrow functions ---------");

//const add = function(a,b){
    //return a+b;
//}
const add = (a,b) => {
    return a+b;
}

//implicit return of function
const addSomeAsUbove = (a,b) => { return a+b};
//implicit return of function
const addSomeAsUboveA = (a,b) => a+b;
//if we have single argument
const addSomeAsUboveB = a => a*2;

let aa = add(2,4);
let aaa = addSomeAsUboveA(2,4);
console.log(aa+", "+aaa);

const num = [1,2,3];
var b = num.map(function(n){
    return 2 * n;
});
//some as above
var bb = num.map(n => 2 * n);
console.log(bb);


const team = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`;
        }.bind(this));
    }
};

const teamA = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function(){
        var self = this;
        return this.members.map(function(member){
            return `${member} is on team ${self.teamName}`;
        });
    }
};
//this is lexicol this, =>
const teamB = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function(){
        //var self = this;
        return this.members.map((member) =>{
            return `${member} is on team ${this.teamName}`;
        });
    }
};

var bbb = team.teamSummary();
console.log(bbb);
var bbbb = teamA.teamSummary();
console.log(bbbb);
var bbbbB = teamB.teamSummary();
console.log(bbbbB+"B");









