import { STORE } './questionLibrary.js';

const state = {
  score: 0,
  incorrectScore: 0,
  questionNumber: 0,
  correctScore: 0,
  currentQuestion: 0
};

const modalGuts = () => {
  const modalGuts = document.getElementById('modalGuts');
  const clone = document.cloneNode(modalGuts.content, true);
  const questionForm = document.querySelector('#questionForm');
  const questionFormClone = document.cloneNode(questionForm.content, true);
  const nextButton = document.querySelector('#nextButton');
  const nextButtonClone = document.cloneNode(nextButton.content, true);
  clone.querySelector("#score").appendChild(state.score);
  clone.querySelector("#questionAnswer").appendChild(questionFormClone);
  clone.querySelector("#nextButton").appendChild(state.score);
  return clone;
}

function startButton() {
  console.log("startBttn fires");
  $("#quizModal").append(modalGuts());
  $("#quizModal").modal({
    fadeDuration: 100,
    closeExisting: false,
    escapeClose: false,
    clickClose: false,
    showClose: false
  });
}

$(document).ready(function() {
  console.log("ready");
  $(".startBttn").on("click", startButton);
});
