// Coding Challenge 7

function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ': '+this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
        console.log('Correct answer!');
        scores();
        console.log(' ');
    }else{
        console.log('Wrong answer. Try again :)');
        wrongAns();
        console.log(' ');
    }

}

var q1 = new Question('Is JavaScript the coolest programming language in the world?',
['Yes', 'No'], 0);

var q2 = new Question('What is the name of this course\'s teacher?',
['Faisal', 'Adi', 'Prayugo'], 0);

var q3 = new Question('What does best describe coding?', 
['Boring', 'Hard', 'Fun', 'Tediuos'], 2);


var question = [q1, q2, q3]; 
var scr = 0;

function scores(){
    var score = 1;
    scr += score;
    console.log('Your current POIN : '+scr);
    console.log('--------------------------------------------------------');
}

function wrongAns(){
    console.log('Your current POIN : '+scr);
    console.log('--------------------------------------------------------');
}

nextQuestion();
function nextQuestion(){
    var n = Math.floor( Math.random() * question.length );

    question[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');
    if(answer !== 'exit'){
        question[n].checkAnswer(parseInt( answer ));
        nextQuestion();
        
    }
}