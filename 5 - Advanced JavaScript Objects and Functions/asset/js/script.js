var faisal = {
    name: 'Faisal',
    yearOfBirth: 2003,
    job: 'student'
};

var person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}

person.prototype.lastName = 'Gacol';

var a = new person('Faisal', 2003, 'student');
var b = new person('Adi', 2005, 'student');
var c = new person('Prayugo', 2001, 'student');

a.calculateAge();
b.calculateAge();
c.calculateAge();
console.log(a.lastName);
console.log(b);
console.log(c.lastName);