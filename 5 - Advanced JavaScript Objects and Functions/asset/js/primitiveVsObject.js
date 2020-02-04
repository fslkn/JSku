// Privitives VS Objects

// Primitives
var a = 25;
var b = 52;
a = 21;
console.log(a);
console.log(b);


// Object
var obj1 = {
    name: 'Faisal',
    age: 16
}
var obj2 = obj1;
obj1.age = 32;
console.log(obj2.age);
console.log(obj1.age);


// Functions
var age = 17;
var obj = {
    name: 'Jonas',
    city: 'Ngalam'
}

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);