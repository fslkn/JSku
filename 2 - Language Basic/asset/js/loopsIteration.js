for (var i = 1; i<= 20; i+= 2){
    console.log(i);
}

var faisal = ['Faisal', 'Adi', 2003, 'Student', false, 'blue'];
for (var i = 0; i < faisal.length; i++){
    console.log(faisal[i]);
}

var i = 0;
while(i < faisal.length){
    console.log(faisal[i]);
    i++;
}

// Continue and break statement
for (var i = 0; i < faisal.length; i++){
    if(typeof faisal[i] !== 'string') continue;
    console.log(faisal[i]);
}
for (var i = 0; i < faisal.length; i++){
    if(typeof faisal[i] !== 'string') break;
    console.log(faisal[i]);
}

// Looping backwards
for (var i = faisal.length - 1; i >= 0; i--){
    console.log(faisal[i]);
}