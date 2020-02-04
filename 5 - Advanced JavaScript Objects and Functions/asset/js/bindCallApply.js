  var faisal = {
      name: 'Faisal',
      age: 17,
      job: 'Programmer',
      presentation: function(style, timeOfDay){
          if(style === 'formal'){
              console.log('Good ' + timeOfDay
              + ', Ladies and gentlemen! I\'m '
              + this.name + ', I\'m a '
              + this.job + ' and I\'m '
              +this.age + ' years old.');

          }else if(style === 'friendly'){
              console.log('Hey! What\'s up? I\'m '+ this.name
              + ', I\'m a '+ this.job + ' and I\'m '
              + this.age + ' years old. Have a nice '
              + timeOfDay + '.');
          }
      }
  }


var adi = {
    name: 'Adi',
    age: 19,
    job: 'designer'
}

faisal.presentation('formal', 'day');

faisal.presentation.call(adi, 'friendly', 'morning');
faisal.presentation.apply(adi, ['friendly', 'afternoon']);

var faisalFormal = faisal.presentation.bind(faisal, 'formal');
faisalFormal('night');

var adiFriendly = faisal.presentation.bind(adi, 'friendly');
adiFriendly('evening');


var years = [1990, 2001, 1977, 2005, 1978, 1943];

function arrayCalc(arr, fn){
    var arrResult = [];
    for(var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);