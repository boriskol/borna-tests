console.log("-----------generators----------------");

const mynumbers = [1,2,3,4];
let mytotal = 0;

for(let mynumber of mynumbers){
    mytotal += mynumber;
}

console.log(mytotal);

// generetors is function which can be entered and exit multiple times


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



