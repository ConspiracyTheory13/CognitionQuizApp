// 'use strict'
$(document).ready(function() {
     let questionNumber = 0;
     let score = 0;
     let incorrectScore= 0;
     let correctScore = 0;
     let currentQuestion = 0;


     let questionForm =
               '<div class= "quizProgressionTracker">' +
                    '<ul>' +
                         '<li>Question: <span class="questionNumber">' + questionNumber + '</span>/10</li>' +
                    '</ul>' +
               '</div>' +
               '<form role="questionandanswers">' +
               '<h1>' + STORE[questionNumber].question + '</h1>' +
               '<input type="radio" class= "answerOption" name="answer" value="0" checked>' + STORE[questionNumber].answers[0] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="1">' + STORE[questionNumber].answers[1] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="2">' + STORE[questionNumber].answers[2] + '<br>' +
               '<input type="radio" class= "answerOption" name="answer" value="3">' + STORE[questionNumber].answers[3] + '<br>' +
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
               let userInput = $("input[name=answer]:checked").val();
               renderScoring(questionNumber, userInput);
               console.log('nextbuttonfires');
               if (questionNumber < STORE.length) {
                    questionNumber ++;
                    questionForm = `<form id"questionAnswers" role="questionandanswers">
                             <div class= "quizProgressionTracker">
                                  <ul>
                                       <li>Question: <span class="questionNumber"> ${questionNumber} </span>/10</li>
                                       <li>Correct: <span class="score"> ${correctScore} </span></li>
                                       <li>Incorrect: <span class="score">  ${incorrectScore}  </span></li>
                                  </ul>
                          </div>
                              <div class="question-${questionNumber}">
                        <h1>${STORE[questionNumber].question}</h1>
                        <form>
                        <fieldset>
                        <label class="answerOption">
                        <input type="radio" value="0" name="answer" required checked>
                        <span>${STORE[questionNumber].answers[0]}</span>
                        </label> <br>
                        <label class="answerOption">
                        <input type="radio" value="1" name="answer" required>
                        <span>${STORE[questionNumber].answers[1]}</span>
                        </label> <br>
                        <label class="answerOption">
                        <input type="radio" value="2" name="answer" required>
                        <span>${STORE[questionNumber].answers[2]}</span>
                        </label> <br>
                        <label class="answerOption">
                        <input type="radio" value="3" name="answer" required>
                        <span>${STORE[questionNumber].answers[3]}</span>
                        </label> <br>
                        <button type="button" class="bttn" id="nextBttn">Next Question!</button>
                        </fieldset>
                        </form>
                        </div>`;
                    $("#answerFormRender").html(questionForm);
                    nxtButton();

               } else {
                    renderResults();
                    restartQuiz();
                    $('.questionNumber').text(10);
               }
          }));
}
     let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

     let questionCorrect = `<div class="correctFeedback"><div class="scoreIcon">
     <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
     Correct!></p><button type=button id= "nextBttn" class="nextButton">Next</button></div>`;

    let questionIncorrect = `<div class="incorrectFeedback"><div class="scoreIcon">
    <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
    Sorry, incorrect! The correct answer is ${STORE[currentQuestion].correctAnswer} </p><button type=button id= "nextBttn" class="nextButton">Next</button></div>`;

// working around this bit of code
//issue. It seems that in your nxtButton() function, it should try to render the content first, once the content is rendered,
//then it will register the event to the new "Next Question!" button. At the moment, nxtButton() is just register a button.
// I think that is not the right sequence. It should 1) create the content (new question), 2) then register the event to the button.
    function renderScoring (currentQuestion, selectedAnswer) {
         let userAnswer = $('.answerOption').val();
         console.log('renderscoring fires');
         console.log('selectedAnswerIndex' + selectedAnswer);
         console.log('selectedAnswer =' + STORE[currentQuestion].answers[selectedAnswer]);
         console.log('correctAnswer =' + STORE[currentQuestion].correctAnswer);

          $('#scoreBttn').on('submit', (function(event) {
             if (STORE[currentQuestion].answers[selectedAnswer] == STORE[currentQuestion].correctAnswer) {
                  console.log("comparison if running");
                  correctScore ++;
                  questionNumber++;
                  $('#answerFormRender').html(`${questionCorrect}`);
                  $("#answerFormRender").modal({
                         fadeDuration: 100,
                         closeExisting: false,
                         escapeClose: false,
                         clickClose: false,
                         showClose: false
               });

               } else {
               console.log("renderScoring elsefires");
               $("#answerFormRender").html(`${questionIncorrect}`);
               incorrectScore++;
               questionNumber++;


               // $(".questionIncorrect").html
     }
}));

    }
//working around on this bit of code
});

//when you click nextBttn..
// the computer must compare user input to correctAnswer,
//then if correctScore, increment correctScore
// if incorrectScore, incre4memnt incorrectScore

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
     //   console.log( $( this ).text() );
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

// // 'use strict'
// $(document).ready(function() {
//      let questionNumber = 0;
//      let score = 0;
//      let incorrectScore = 0;
//      let correctScore = 0;
//
//      let questionForm =
//                '<div class= "quizProgressionTracker">' +
//                     '<ul>' +
//                          '<li>Question: <span class="questionNumber">' + questionNumber + '</span>/10</li>' +
//                     '</ul>' +
//                '</div>' +
//                '<form role="questionandanswers">' +
//                '<h1>' + STORE[questionNumber].question + '</h1>' +
//                '<input type="radio" class= "answerOption" name="answer" value="" checked>' + STORE[questionNumber].answers[0] + '<br>' +
//                '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[1] + '<br>' +
//                '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[2] + '<br>' +
//                '<input type="radio" class= "answerOption" name="answer" value="">' + STORE[questionNumber].answers[3] + '<br>' +
//                '</form>'+
//                '<button type="button" class="bttn" id="nextBttn">Next Question!</button>';
//
// });
//
//      $('.startBttn').on("click",(function(event){
//           $('#answerFormRender').append(questionForm);
//           $("#answerFormRender").modal({
//                     fadeDuration: 100,
//                     closeExisting: false,
//                     escapeClose: false,
//                     clickClose: false,
//                     showClose: false
//           });
//           $('#nextBttn').on("click", (function(event) {
//                nxtButton();
//           }));
//      }));
//
//
//
//
// function nxtButton() {
//           //for loop?
//           // $('#nextBttn').on("click", (function(event) {
//                console.log('nextbuttonfires');
//
//                     if (questionNumber < STORE.length) {
//                          let userInput = $("input[name=answer]:checked").val();
//                          renderScore(questionNumber, userInput);
//                          questionNumber ++;
//                          questionForm = `<form id"questionAnswers" role="questionandanswers">'
//                              <div class= "quizProgressionTracker">
//                                   <ul>
//                                        <li>Question: <span class="questionNumber">'` + questionNumber + `'</span>/10</li>
//                                        <li>Correct: <span class="score">` + correctScore + `</span></li>
//                                        <li>Incorrect: <span class="score">` + incorrectScore + `</span></li>
//                                   <correctScore++;/ul>
//                           </div>
//                               <div class="question-${questionNumber}">
//                         <h1>${STORE[questionNumber].question}</h1>
//                         <form>
//                         <fieldset>
//                         <label class="answerOption">
//                         <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
//                         <span>${STORE[questionNumber].answers[0]}</span>
//                         </label> <br>
//                         <label class="answerOption">
//                         <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
//                         <span>${STORE[questionNumber].answers[1]}</span>
//                         </label> <br>
//                         <label class="answerOption">
//                         <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
//                         <span>${STORE[questionNumber].answers[2]}</span>
//                         </label> <br>
//                         <label class="answerOption">
//                         <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
//                         <span>${STORE[questionNumber].answers[3]}</span>
//                         </label> <br>
//                         '<button type="button" class="bttn" id="nextBttn">Next Question!</button>'
//                         </fieldset>
//                         </form>
//                         </div>`;
//                         $('#answerFormRender').html(questionForm);
//                         $('#nextBttn').on("click", (function(event) {
//                              nxtButton();
//                         }));
//                     } else {
//                         // renderResults();
//                         // restartQuiz();
//                         // $('.questionNumber').text(10)
//                         console.log('else runs');
//                     }
//           });
//
//
//
// //when you click nextBttn..
// // the computer must compare user input to correctAnswer,
// //then if correctScore, increment correctScore
// // if incorrectScore, incre4memnt incorrectScore
//
// let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
//
// let questionCorrect = `<div class="correctFeedback"><div class="icon">
// <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
// Correct!></p><button type=button class="nextButton">Next</button></div>`;
//
// let questionIncorrect = `<div class="incorrectFeedback"><div class="icon">
// <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${STORE[questionNumber].alt}"/></div><p>
// Incorrect!></p><button type=button class="nextButton">Next</button></div>`;
//
// function renderScore (currentQuestion, selectedAnswer) {
//      if (STORE[currentQuestion].answers[selectedAnswer] == STORE[currentQuestion].correctAnswer) {
//           $("#answerFormRender").after(".questionCorrect");
//           $("#answerFormRender"). modal( {
//                     fadeDuration: 100,
//                     closeExisting: false,
//                     escapeClose: false,
//                     clickClose: false,
//                     showClose: false
//                });
//      } else {
//           $('.questionIncorrect').html
//      }
//
//      // renderResults();
//
// // function restartQuiz () {
// //      $('#restartBttn').on("click", (function(event) {
//
// // //you haven't built a restartbttn yet btw, don't forget
// // location.reload();
// // }
//
// // function restartQuiz () {
// //   $('main').on('click', '.restartButton', function (event) {
// //     location.reload();
// //   });
// // }
//
//
// //
// // function callQuestion () {
// //      $('.questionAnswerForm').html(buildQuestion());
// //
// // }
//
//      // function renderQuiz () {
//      //   startQuiz();
//      //   renderQuestion();
//      //   userSelectAnswer();
//      //   renderNextQuestion();
//      // }
//      //
//      // $(renderQuiz);
//
//
//
//
//
//
//
//
// //                }
// // // function startbttn:
// //when jQuery calls questionForm, I need it to move a question and it's answers
// //from my const STORE in the file questionlibrary.js. The question needs to be
// // appended into h1, and the answers need to be appended into each radio button.
//
//
// // function nextQuestion:
// // call another question from STORE.questionLibrary.js
// // This question cannot be the same question from store, additionally this function
// // must render a previous question button.
// // on submit, repeat function tallyUserScore
//
// // reiterate 4 or 9 times(depends on how many questions I want) using function
// //callQuestion
//
// //on load of final question, reload submit button that will tallyUserFinalScore then
// //use an if else loop, for scores above half go to one screen, for scores below half go
// //to another. Regardless of score- a restart button is neccessary.
//
//      // $().append()
//
// // 'modal:before-open';
//
//      // $( "#dataTable tbody tr" ).on( "click", function() {
//      //   console.log( $( thttps://repl.it/@Conspiracyx13/UnevenDelectableBsddaemonhis ).text() );
//      // });
//
// // <div class="quizProgression">
//
// // </div>
//
// // Over all the quiz will need to load the
// // quizStart page that contains the beginning
// // paragraph and the "start quiz" button
//
// //load next question
//
// //repeat 9 tiimes under final question,
// //then load scoring page and restart button
//
// //candy features;
// //pagination instead of forward/backwards bttns
