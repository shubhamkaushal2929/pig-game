
(function(){
    var score = 0;
    var Question = function(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++)
            console.log(i + ': ' + this.answers[i]);
    }

    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correctAnswer){
            console.log('Correct Answer!');
            score++;
        } else {
            console.log('Wrong Answer. Try again :)');
        }
        this.displayScore();
    }

    Question.prototype.displayScore = function (){
        console.log('Your current score is: ' + score);
        console.log('--------------------------------------');
    }

    var question1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var question2 = new Question('When a user views a page containing a JavaScript program which machine actually e!ecutes the script?',
        ['The User\'s machine running a Web browser', 'The Web Server', 'A central machine deep within Netscape\'s corporate offices'], 0);
    var question3 = new Question('Inside which HTML element do we put the JavaScript?', ['<js>', '<scripting>', '<script>', '<javascript>'], 2);

    var questions = [question1, question2, question3];

    nextQuestion();

    function nextQuestion(){
        var randomQuestion = Math.floor(Math.random() * questions.length);

        questions[randomQuestion].displayQuestion();        

        var questionObj = questions[randomQuestion];

        var userEnteredAnswer = prompt('Please Select the correct answer (just type the number)');

        if(userEnteredAnswer !== 'exit'){
            questions[randomQuestion].checkAnswer(parseInt(userEnteredAnswer));
            nextQuestion(); 
        }  
    }
})();



