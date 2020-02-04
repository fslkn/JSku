// Immediately Invoked Function Expressions (IIFE)
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(gdlck){
    var score = Math.random() * 10;
    console.log(score >= 5 - gdlck);
})(2);