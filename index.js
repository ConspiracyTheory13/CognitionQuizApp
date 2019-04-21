// 'use strict'
$(document).ready(function() {
     let questionNumber = 0;
     let score = 0;

     let questionForm =
               '<div class= "quizProgressionTracker">' +
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


     $('.startBttn').on("click",(function(event){
          $('#answerFormRender').append(questionForm);
          $("#answerFormRender").modal({
                    fadeDuration: 100,
                    closeExisting: false,
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
          });

          nxtButton();
     }));



function nxtButton() {
          //for loop?
          $('#nextBttn').on("click", (function(event) {
               console.log('nextbuttonfires');

                    if (questionNumber < STORE.length) {
                         questionNumber ++;
                         questionForm = `<form id"questionAnswers" role="questionandanswers">'
                             <div class= "quizProgressionTracker">
                                  <ul>
                                       <li>Question: <span class="questionNumber">' + questionNumber + '</span>/10</li>
                                       <li>Correct: <span class="score">0</span></li>
                                       <li>Incorrect: <span class="score">0</span></li>
                                  </ul>
                          </div>
                              <div class="question-${questionNumber}">
                        <h1>${STORE[questionNumber].question}</h1>
                        <form>
                        <fieldset>
                        <label class="answerOption">
                        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
                        <span>${STORE[questionNumber].answers[0]}</span>
                        </label>
                        <label class="answerOption">
                        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
                        <span>${STORE[questionNumber].answers[1]}</span>
                        </label>
                        <label class="answerOption">
                        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
                        <span>${STORE[questionNumber].answers[2]}</span>
                        </label>
                        <label class="answerOption">
                        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
                        <span>${STORE[questionNumber].answers[3]}</span>
                        </label>
                        '<button type="button" class="bttn" id="nextBttn">Next Question!</button>'
                        </fieldset>
                        </form>
                        </div>`;
                        $('#answerForm').html(questionForm);
                    } else {
                        // renderResults();
                        // restartQuiz();
                        // $('.questionNumber').text(10)
                        console.log('else runs');
                    }
          }));
}

//when you click nextBttn..
// the computer must compare user input to correctAnswer,
//then if correctScore, increment correctScore
// if incorrectScore, incre4memnt incorrectScore

let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

// function renderScore   ($("input[name='radio buttons']:checked").val() {
//      if (answers == correctAnswer() {
//           $('.questionAnswerForm').html
//           (`<div class="correctFeedback"><div class="icon">
//           <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
//           Correct!></p><button type=button class="nextButton">Next</button></div>`);
//           correctScore++;
//      } else {
//           incorrectScore++;
//           $('.questionAnswerForm').html
//           (`<div class="incorrectFeedback"><div class="icon">
//           <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
//           Incorrect!></p><button type=button class="nextButton">Next</button></div>`);
//
//      }}

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




});



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
