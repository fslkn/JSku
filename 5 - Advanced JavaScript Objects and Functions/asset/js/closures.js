// Closures
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);

    }
}

var retirementUS = retirement(65);
var retirementGermany = retirement(68);
var retirementIceland = retirement(62);

retirementUS(2003);
retirementGermany(2003);
retirementIceland(2003);

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }

    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, '+ name + '?');
        }

    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
        
    }
}

interviewQuestion('designer')('Faisal');