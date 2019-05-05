// 'use strict'
$(document).ready(function() {
  let questionNumber = 0;
  let score = 0;
  let incorrectScore = 0;
  let correctScore = 0;
  let currentQuestion = 0;

  $(".startBttn").on("click", function(event) {
    let modalGuts = `
      <section id="score">
      </section>
      <section id="questionanswer">
      </section>
      <section id="nextButton">
      </section>`;

    $("#quiz-modal").append(modalGuts);
    $("#quiz-modal").modal({
      fadeDuration: 100,
      closeExisting: false,
      escapeClose: false,
      clickClose: false,
      showClose: false
    });
    let nextButton =
      '<button type="button" class="bttn" id="nextBttn">Next Question!</button>';
    $("#nextButton").append(nextButton);
    renderQuestion();
    nxtButton();
  });

  function nxtButton() {
    $("#nextBttn").on("click", function(event) {
      let userInput = $("input[name=answer]:checked").val();
      renderScoring(questionNumber, userInput);
      console.log("nextbuttonfires");
      if (questionNumber < STORE.length) {
        questionNumber++;

        renderQuestion();
      } else {
        renderResults();
        restartQuiz();
        $(".questionNumber").text(10);
      }
    });
  }

  function renderQuestion() {
    let questionForm =
      '<div class= "quizProgressionTracker">' +
      "<ul>" +
      '<li>Question: <span class="questionNumber">' +
      questionNumber +
      "</span>/10</li>" +
      "</ul>" +
      "</div>" +
      '<form role="questionandanswers">' +
      "<h1>" +
      STORE[questionNumber].question +
      "</h1>" +
      '<input type="radio" class= "answerOption" name="answer" value="0" checked>' +
      STORE[questionNumber].answers[0] +
      "<br>" +
      '<input type="radio" class= "answerOption" name="answer" value="1">' +
      STORE[questionNumber].answers[1] +
      "<br>" +
      '<input type="radio" class= "answerOption" name="answer" value="2">' +
      STORE[questionNumber].answers[2] +
      "<br>" +
      '<input type="radio" class= "answerOption" name="answer" value="3">' +
      STORE[questionNumber].answers[3] +
      "<br>" +
      "</form>";
    $("#questionanswer").html(questionForm);
  }

  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

  let questionCorrect = `<div class="correctFeedback"><div class="scoreIcon">
     <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${
       STORE[questionNumber].alt
     }"/></div><p>
     Correct!></p><button type=button id= "nextBttn" class="nextButton">Next</button></div>`;

  let questionIncorrect = `<div class="incorrectFeedback"><div class="scoreIcon">
    <img src="https://media.giphy.com/media/l44QzsOLXxcrigdgI/giphy-downsized.gif"}" alt="${
      STORE[questionNumber].alt
    }"/></div><p>
    Sorry, incorrect! The correct answer is ${
      STORE[currentQuestion].correctAnswer
    } </p><button type=button id= "nextBttn" class="nextButton">Next</button></div>`;

  // working around this bit of code
  //issue. It seems that in your nxtButton() function, it should try to render the content first, once the content is rendered,
  //then it will register the event to the new "Next Question!" button. At the moment, nxtButton() is just register a button.
  // I think that is not the right sequence. It should 1) create the content (new question), 2) then register the event to the button.
  function renderScoring(currentQuestion, selectedAnswer) {
    let userAnswer = $(".answerOption").val();
    console.log("renderscoring fires");
    console.log("selectedAnswerIndex" + selectedAnswer);
    console.log(
      "selectedAnswer =" + STORE[currentQuestion].answers[selectedAnswer]
    );
    console.log("correctAnswer =" + STORE[currentQuestion].correctAnswer);

    $("#scoreBttn").on("submit", function(event) {
      if (
        STORE[currentQuestion].answers[selectedAnswer] ==
        STORE[currentQuestion].correctAnswer
      ) {
        console.log("comparison if running");
        correctScore++;
        questionNumber++;
        $("#answerFormRender").html(`${questionCorrect}`);
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
    });
  }
  //working around on this bit of code
});
