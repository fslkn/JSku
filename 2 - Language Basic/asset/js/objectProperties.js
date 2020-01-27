var adi = {
    firstName: 'Faisal',
    lastName: 'Prayugo',
    birthYear: 2003,
    family: ['Solikin', 'Gecol'],
    job: 'Student',
    isMarried: false
};

console.log(adi.firstName);
console.log(adi.lastName);
var x = 'birthYear';
console.log(adi[x]);

adi.job = 'designer';
adi['isMarried'] = true;
console.log(adi);

var prayugo = new Object();
prayugo.firstName = 'Prayugo';
prayugo.birthYear = 2001;
prayugo['lastName'] = 'Gecol';
console.log(prayugo);