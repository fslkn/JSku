function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageFaisal = calculateAge(2003);
var ageAdi = calculateAge(2005);
var agePrayugo = calculateAge(2001);

console.log(ageFaisal, ageAdi, agePrayugo);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0){
        console.log(firstName + ' retires in '
        + retirement + ' years.');
    }else{
        console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(2003, 'Faisal');
yearsUntilRetirement(1950, 'Adi');
yearsUntilRetirement(2001, 'Prayugo');
