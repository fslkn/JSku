// The 'this' Practice

// console.log(this);

// calculateAge(2003);

// function calculateAge(year){
//     console.log(2020 - year);
//     console.log(this);
// }

var faisal = {
    name: 'faisal',
    yearOfBirth: 2003,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
};

faisal.calculateAge();

var adi = {
    name: 'Adi',
    yearOfBirth: 2005
};

adi.calculateAge = faisal.calculateAge;
adi.calculateAge();