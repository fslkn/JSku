var adi = {
    firstName: 'Faisal',
    lastName: 'Prayugo',
    birthYear: 2003,
    family: ['Solikin', 'Gecol'],
    job: 'Student',
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

adi.calcAge();
console.log(adi);