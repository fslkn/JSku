var faisal = {
    fullName: 'Faisal Adi Prayugo',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            }else if (bill >= 50 && bill < 200){
                percentage = .15;
            }else{
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for ( var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

faisal.calcTips();
faisal.average = calcAverage(faisal.tips);
console.log(faisal); 