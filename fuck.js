when you click nextBttn..
the computer must compare user input to correctAnswer,
then if correctScore, increment correctScore
if incorrectScore, incre4memnt incorrectScore

let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

function renderScore   ($("input[name='radio buttons']:checked").val() {
     if (answers == correctAnswer() {
          $('.questionAnswerForm').html
          (`<div class="correctFeedback"><div class="icon">
          <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
          Correct!></p><button type=button class="nextButton">Next</button></div>`);
          correctScore++;
     } else {
          incorrectScore++;
          $('.questionAnswerForm').html
          (`<div class="incorrectFeedback"><div class="icon">
          <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
          Incorrect!></p><button type=button class="nextButton">Next</button></div>`);

     }}


     renderResults();

function restartQuiz () {
     $('#restartBttn').on("click", (function(event) {

//you haven't built a restartbttn yet btw, don't forget
location.reload();
}

function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}



function callQuestion () {
     $('.questionAnswerForm').html(buildQuestion());

}

     function renderQuiz () {
       startQuiz();
       renderQuestion();
       userSelectAnswer();
       renderNextQuestion();
     }

     $(renderQuiz);



               }
// function startbttn:
when jQuery calls questionForm, I need it to move a question and it's answers
from my const STORE in the file questionlibrary.js. The question needs to be
appended into h1, and the answers need to be appended into each radio button.


function nextQuestion:
call another question from STORE.questionLibrary.js
This question cannot be the same question from store, additionally this function
must render a previous question button.
on submit, repeat function tallyUserScore

reiterate 4 or 9 times(depends on how many questions I want) using function
callQuestion

on load of final question, reload submit button that will tallyUserFinalScore then
use an if else loop, for scores above half go to one screen, for scores below half go
to another. Regardless of score- a restart button is neccessary.

     $().append()

'modal:before-open';

     $( "#dataTable tbody tr" ).on( "click", function() {
       console.log( $( this ).text() );
     });

<div class="quizProgression">

</div>

Over all the quiz will need to load the
quizStart page that contains the beginning
paragraph and the "start quiz" button

load next question

repeat 9 tiimes under final question,
then load scoring page and restart button

candy features;
pagination instead of forward/backwards bttns

// 'use strict'
$(document).ready(function() {
     let questionNumber = 0;
     let score = 0;
     let incorrectScore = 0;
     let correctScore = 0;

     let questionForm =
               '<div class= "uizProgressionTracker">' +
                    '<ul>' +
                         '<li>Question: <span class="questionNumber">' + questionNumber + '</span>/10</li>' +
                    '</ul>' +
               '</div>' +
               '<form role="questionandanswers">' +
               '<h1>' + STORE[questionNumber].question + '</h1>' +
               '<input type="radio" class= "answerOption" name="answer" value="" checked>' + STORE[questionNumber].answers[0] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[1] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[2] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[3] + '<br>' +
               '</form>'+
               '<button type="button" class="bttn" id="nextBttn">Next Question!</button>';

});

     $('.startBttn').on("click",(function(event){
          $('#answerFormRender').append(questionForm);
          $("#answerFormRender").modal({
                    fadeDuration: 100,
                    closeExisting: false,
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
          });
          $('#nextBttn').on("click", (function(event) {
               nxtButton();
          }));
     }));




function nxtButton() {
          //for loop?
          // $('#nextBttn').on("click", (function(event) {
               console.log('nextbuttonfires');

                             // renderResults();
                        // restartQuiz();
                        // $('.questionNumber').text(10)
                        console.log('else runs');
                    }
          });



//when you click nextBttn..
// the computer must compare user input to correctAnswer,
//then if correctScore, increment correctScore
// if incorrectScore, incre4memnt incorrectScore

let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

let questionCorrect = `<div class="correctFeedback"><div class="icon">
<img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
Correct!></p><button type=button class="nextButton">Next</button></div>`;

let questionIncorrect = `<div class="incorrectFeedback"><div class="icon">
<img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
Incorrect!></p><button type=button class="nextButton">Next</button></div>`;

function renderScore (currentQuestion, selectedAnswer) {
     if (STORE[currentQuestion].answers[selectedAnswer] == STORE[currentQuestion].correctAnswer) {
          $("#answerFormRender").after(".questionCorrect");
          $("#answerFormRender"). modal( {
                    fadeDuration: 100,
                    closeExisting: false,
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
               });
     } else {
          $('.questionIncorrect').html
     }

     // renderResults();

// function restartQuiz () {
//      $('#restartBttn').on("click", (function(event) {

// //you haven't built a restartbttn yet btw, don't forget
// location.reload();
// }

// function restartQuiz () {
//   $('main').on('click', '.restartButton', function (event) {
//     location.reload();
//   });
// }


//
// function callQuestion () {
//      $('.questionAnswerForm').html(buildQuestion());
//
// }

     // function renderQuiz () {
     //   startQuiz();
     //   renderQuestion();
     //   userSelectAnswer();
     //   renderNextQuestion();
     // }
     //
     // $(renderQuiz);








//                }
// // function startbttn:
//when jQuery calls questionForm, I need it to move a question and it's answers
//from my const STORE in the file questionlibrary.js. The question needs to be
// appended into h1, and the answers need to be appended into each radio button.


// function nextQuestion:
// call another question from STORE.questionLibrary.js
// This question cannot be the same question from store, additionally this function
// must render a previous question button.
// on submit, repeat function tallyUserScore

// reiterate 4 or 9 times(depends on how many questions I want) using function
//callQuestion

//on load of final question, reload submit button that will tallyUserFinalScore then
//use an if else loop, for scores above half go to one screen, for scores below half go
//to another. Regardless of score- a restart button is neccessary.

     // $().append()

// 'modal:before-open';

     // $( "#dataTable tbody tr" ).on( "click", function() {
     //   console.log( $( thttps://repl.it/@Conspiracyx13/UnevenDelectableBsddaemonhis ).text() );
     // });

// <div class="quizProgression">

// </div>

// Over all the quiz will need to load the
// quizStart page that contains the beginning
// paragraph and the "start quiz" button

//load next question

//repeat 9 tiimes under final question,
//then load scoring page and restart button

//candy features;
//pagination instead of forward/backwards bttns

// function advanceQuestionNumber () {
//      questionNumber ++;
//      $('.questionNumber').text(questionNumber+1);
// }

// function updateScore() {
//      score++;
// }
// function userAnswerFeedbackCorrect () {
//   l













// }
//
// //user feedback for wrong answer
// function userAnswerFeedbackWrong () {
//   let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
//   // let iconImage = `${STORE[questionNumber].icon}`;
//   $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
// }
