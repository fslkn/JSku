//////////////////////////////////////////////////////////////////////////////////
// Lecture : let and const

// ES5
var name5 = 'Faisal Adi';
var age5 = 16;
name5 = 'Faisal Prayugo';
console.log(name5);

// ES6
const name6 = 'Faisal Adi';
let age6 = 16;
// name6 = 'Faisal Prayugo';
console.log(name6);
console.log('');

/////////////////////////// FUNCTION() ///////////////////////////////

// ES5
function driverLicense5(passedTest){
    
    if(passedTest){
        console.log(firstName);
        var firstName = 'Faisal';
        var yearOfBirth = 2003;
    }

    console.log(firstName + ', born in '
        + yearOfBirth + ', is now officially allowed to drive a car.');
}

driverLicense5(true);

// ES6
function driverLicense6(passedTest){
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 2003;
    
    if(passedTest){
        firstName = 'Faisal';
    }

    console.log(firstName + ', born in '
        + yearOfBirth + ', is now officially allowed to drive a car.');
}

driverLicense6(true);

// //////////////////////////// var VS let /////////////////////////////////////
// ES5
console.log('ES5 - var');
var i5 = 23;

for ( var i5 = 0; i5 < 3; i5++){
    console.log(i5);
}

console.log(i5);
console.log('ES6 - let');
// ES6
let i6 = 23;

for ( let i6 = 0; i6 < 3; i6++){
    console.log(i6);
}

console.log(i6);


















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Blocks and IIFEs
console.log('');

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a);
// console.log(b);
console.log(c);

// ES5
(function(){
    var c = 3;
})();

// console.log(c);



















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Strings
console.log('');

let firstName = 'Faisal';
let lastName = 'Adi';
const yearOfBirth = 2003;

function calcAge(year){
    return 2020 - year;
}

// ES5
console.log('This is '+firstName+' '+lastName
+'. He was born in '+yearOfBirth+'. Today, he is '
+calcAge(yearOfBirth)+' years old.')

// ES6
console.log(`This is ${firstName} ${lastName}.`
+` He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('f'));
console.log(n.endsWith('di'));
console.log(n.includes(' '));
console.log(`${firstName}  `.repeat(5));




















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Arrow Functions
console.log('');

const years = [2000, 2003, 1977, 2002];

// ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});
console.log('ES5 : '+ages5);

// ES6
let ages6 = years.map(el => 2020 - el);
console.log(`ES6 : ${ages6}`);

ages6 = years.map((el, index) => `Age element ${index + 1}:`
+` ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2020 - el}.`;
});
console.log(ages6);


















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Arrow Functions 2 (this)
console.log('');

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This box number '+self.position+' and it is '+self.color;
            alert(str);
        });
    }
};
// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
};
box6.clickMe();

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
};
box66.clickMe();
*/



function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with '+el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Adi', 'Prayugo', 'Solikin'];
new Person('Faisal').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => 
        `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Fsl').myFriends6(friends);






















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Destructuring
console.log('');
// ES5
var jhon = ['Jhon', 23];
// var name = jhon[0];
// var age = jhon[1];


// ES6
const[name, age] = ['Jhon', 23];
console.log(name);
console.log(age);

const obj = {
    firstNameDestructuring: 'Jhon',
    lastNameDestructuring: 'Bagdanov',
};

const {firstNameDestructuring, lastNameDestructuring} = obj;
console.log(firstNameDestructuring);
console.log('Bukan');
console.log(lastNameDestructuring);

const {firstNameDestructuring: a, lastNameDestructuring: b} = obj;
console.log(a);
console.log('Bukan');
console.log(b);





function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1977);
console.log(age2);
console.log(retirement);


























//////////////////////////////////////////////////////////////////////////////////
// Lecture : Arrays
console.log('');

const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur =>
    cur.style.backgroundColor = 'dodgerblue'
);


// ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;   
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/


// ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I Changed to blue';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));



















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Spread operator
console.log('');

function addFourAges (a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(12, 15, 17, 21);
console.log(sum1);


// ES5 
var ages = [12, 15, 17, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const keluarga1 = ['Aku', 'Kamu', 'Dia'];
const keluarga2 = ['Mereka', 'Kita'];
const keluargaBesar = [...keluarga1, 'Samudra', ...keluarga2];
console.log(keluargaBesar);


const h = document.querySelector('h1');
const boxesS = document.querySelectorAll('.box');
const all = [h, ...boxesS];

Array.from(all).forEach(cur =>
    cur.style.color = 'purple' 
);






















//////////////////////////////////////////////////////////////////////////////////
// Lecture : Rest parameters
console.log('');

// ES5
function isFullAge5(limit){
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);
    argsArr.forEach(function(cur){
        console.log((2020 - cur) >= limit);
    });
}

// isFullAge5(18, 1990, 2003, 2000);

// ES6
function isFullAge6(limit, ...years){
    console.log(years);
    years.forEach(cur =>
        console.log((2020 - cur) >= limit)
    );
}

isFullAge6(18, 2003, 2000, 2021, 1990, 2004);





























//////////////////////////////////////////////////////////////////////////////////
// Lecture : Default parameters
console.log('');

// function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    
//     lastName === undefined ? lastName = 'Prayugo' : lastName;
//     nationality === undefined ? nationality = 'Indonesia' : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// ES6
function SmithPerson(firstName, yearOfBirth,
    lastName = 'Prayugo', nationality = 'Indonesia'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var faisal = new SmithPerson('Faisal', 2003);
var adi = new SmithPerson('Adi', 2000, 'Solikin', 'Indo');

























//////////////////////////////////////////////////////////////////////////////////
// Lecture : Maps
console.log('');

const question = new Map();
question.set('question', 'What is the official name of this JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');
question.set('correct', 3);

console.log(question.get('question'));
// console.log(question.size);

if(question.has(4)){
    // question.delete(4);
    // console.log('This is question[4]');
}
// console.log(question);

// question.forEach((key, value) => 
// console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()){
    if (typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

// let ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));



































//////////////////////////////////////////////////////////////////////////////////
// Lecture : Classes
// console.log('');

// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var faisal5 = new Person5('Faisal', 2003, 'Programmer');

// ES6
// class Person6{
//     constructor(name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey there!');
//     }
// }

// const faisal6 = new Person6('Adi', 2000, 'Designer');
// Person6.greeting();


























//////////////////////////////////////////////////////////////////////////////////
// Lecture : Classes
console.log('');

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var faisalAthlete5 = new Athlete5('Faisal', 2003, 'Swimmer', 3, 9);

faisalAthlete5.calculateAge();
faisalAthlete5.wonMedal(); 




// ES6
class Person6{
    constructor(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const faisalAthlete6 = new Athlete6('Adi', 2000, 'MMA', 5, 4);

faisalAthlete6.wonMedal(); 
faisalAthlete6.calculateAge();