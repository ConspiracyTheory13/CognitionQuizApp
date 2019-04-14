'use strict'
$(document).ready(function() {

     $('.startBttn').on("click",(function(event){
     $("#anyString").modal({
     fadeDuration: 100
     });
     }));
     console.log("Modalrunning");
});

     // $( "#dataTable tbody tr" ).on( "click", function() {
     //   console.log( $( this ).text() );
     // });

     //
     // function tallyUserScore{
     //
     // console.log('tallyUserScore is running');
     // }

// function quizFormRender() {
//      $('.startBttn').on(click,(function(event){
//
//      console.log('quizFormRender is working!');
//
//      });
// }

// <div class="quizProgression">
//      <ul role ="Quiz progression">
//           <li>Question: <span class="questionNumber">0</span>/10</li>
//           <li>Score: <span class="score">0</span></li>
//      </ul>
// </div>

// Over all the quiz will need to load the
// quizStart page that contains the beginning
// paragraph and the "start quiz" button

//then onclick of startQuiz, one of the questions
//from my list will load as a form with four mc ansers
//the user will select an answer, when the user hits "submit"
//the program will compare the answer to the correct answer,
//if correct, correctScore will go up one
//if incorrect, incorrectScore will go up one
//load next question

//repeat 9 tiimes under final question,
//then load scoring page and restart button

//candy features;
//pagination instead of forward/backwards bttns
