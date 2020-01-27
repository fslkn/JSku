var bills = [124, 48, 268];
var bill, tip, total;

function calculator(bill){
    if(bill < 50){
        tip = 20;
    }else if(bill >= 50 && bill < 200){
        tip = 15;
    }else if(bill > 200){
        tip = 10;
    }else{
        console.log('Bill less than $0');
    }

    var totalTip = (tip / 100) * bill;
    total = bill + totalTip

    console.log('If bill : $'+bill);
    console.log('Tip : $'+totalTip);
    console.log('Total : $'+bill+' + $'
    +totalTip+' : $'+total);
    console.log('');
}

calculator(bills[0]);
calculator(bills[1]);
calculator(bills[2]);