var faisal = {
    fullName: 'Faisal Adi',
    mass: 55,
    height: 1.70,
    calcBMI: function(){
        this.bmi = this.mass / (this.height
            *this.height);
            return this.bmi;
    }
}

var solikin = {
    fullName: 'Solikin Gacol',
    mass: 65,
    height: 1.98,
    calcBMI: function(){
        this.bmi = this.mass / (this.height
            *this.height);
            return this.bmi;
    }
}

faisal.calcBMI();
solikin.calcBMI();

console.log(faisal, solikin);

if(faisal.bmi > solikin.bmi){
    console.log(faisal.fullName + ' has a higher BMI of '
    + solikin.bmi);
}else if(faisal.bmi < solikin.bmi){
    console.log(faisal.fullName + ' has a lower BMI of '
    + solikin.bmi);
}else{
    console.log('They have same BMI');
}