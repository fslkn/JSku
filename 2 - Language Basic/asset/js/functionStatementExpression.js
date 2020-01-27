var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'student':
            return firstName + ' try to code';
        default:
            return firstName + ' noting do something';
    }
}
console.log(whatDoYouDo('student', 'Faisal'));
console.log(whatDoYouDo('teacher', 'Adi'));
console.log(whatDoYouDo('nothing', 'Prayugo'));
