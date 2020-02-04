var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
}

var faisal = Object.create(personProto);
faisal.name = 'Faisal';
faisal.yearOfBirth = 2003;
faisal.job = 'student';

var adi = Object.create(personProto, {
    name: { value: 'Adi' },
    yearOfBirth: { value: 2005 },
    job: { value: 'designer' }
})

console.log(faisal);
console.log(adi);