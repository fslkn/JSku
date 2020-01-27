var names = ['Faisal', 'Adi', 'Prayugo'];
var years = new Array(2003, 2005, 2001);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Solikin';
names[names.length] = 'Marry';
console.log(names);

// Different data types
var adi = ['Faisal', 'Adi', 2003, 'Student', 'False'];

adi.push('blue');
adi.unshift('Mr.')
console.log(adi);

adi.pop();
console.log(adi);

adi.shift();
console.log(adi);

adi.pop();
console.log(adi);

console.log(adi.indexOf(2003));

var isDesigner = adi.indexOf('designer') == -1 ?
'Adi is Not a designer' : 'Adi is Designer';
console.log(isDesigner);