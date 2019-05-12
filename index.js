import { STORE } from './questionLibrary.js';

const state = {
  // score: 0;
  incorrectScore: 0,
  correctScore: 0,
  questionNumber: 0,
  currentQuestion: 0
};

const test = true
const assert = ({
  given,
  should,
  actual,
  expected,
}) => console.log(`Given ${given}: Should ${should}`, actual === expected);

const $ = id => document.getElementById(id);
test && assert({
  given: 'the modal quiz container id',
  should: '$().tagName returns back container with a tag of aside',
  actual: $('quizModalContainer').tagName,
  expected: 'ASIDE',
});

const response = (textFeedback,questionIndex) => {
  const content = `<p>${textFeedback}</p><button type="button" id="nextBttn" class="nextBttn"
   value="${questionIndex}">Next Question!</button>`
  const template = document.createElement('template');
  template.innerHTML = content;
  return template;  
};


const renderFeedback = (event) => {
  const target = event.currentTarget;
  const questionIndex = target.value;
  const selectedAnswer = target.parentElement.querySelector(`input[name='question-${questionIndex}']:checked`).value;
  const correctAnswer = STORE[questionIndex].correctAnswer;
  const answerIsTrue = compareQuestion(selectedAnswer, correctAnswer);
  const textFeedback = feedback(answerIsTrue, correctAnswer);
  incrementScore(answerIsTrue);
  render({ template: response(textFeedback,questionIndex), container: 'quizQuestions'});
  };


const render = ({template, container}) => {
  const tpl = typeof template === 'string'? $(template) : template;
  const root = $(container)
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  root(tpl.cloneNode(true).content);
  const nextBttn = $('nextBttn');
  const answerBttn = $('answerBttn')
  if (nextBttn) nextBttn.addEventListener('click', questions)
  if (answerBttn) answerBttn.addEventListener('click', renderFeedback)
  return root;
};

test && assert({
  given: 'a template and container ids',
  should: 'render template into container',
  actual: render({ template:'modalGutsTemplate', container: 'quizModalContainer'}).innerHTML,
  expected: $('modalGutsTemplate').innerHTML,
});

const cleanup = container => {
  const root = $(container)
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  return root;
}

test && assert({
  given: 'a container id',
  should: 'remove all children in container',
  actual: cleanup('quizModalContainer').firstChild,
  expected: $('quizModalContainer').firstChild,
});

const compareQuestion = (selectedAnswer, correctAnswer) => {
  return selectedAnswer === correctAnswer;
};

const incrementScore = (answerIsTrue) => {
answerIsTrue ? state.correctScore++ : state.incorrectScore++;
// above is an else if statement, the first half before the : is the if, the incorrectScore is the else.
};

const feedback = (answerIsTrue, correctAnswer) => {
const questionCorrect= `Correct~`
const questionIncorrect= `Sorry incorrect! The correct answer is: ${correctAnswer}`; 
return (answerIsTrue ? questionCorrect : questionIncorrect);
};


//currently working on...

  // const submitBttn = $('submitBttn');
  // const reloadBttn = $('reloadBttn');
  // if (submitBttn) subbmitBttn.addEventListener('click', renderQuizFeedback);
  // if (reloadBttn) reloadBttn.addEventListener('click', reloadQuiz);

//renderQuizFeedback needs to contain each variable for grades
// it's one job is to fire on click of submit button, take correctScore, and return score.

// const renderQuizFeedback (correctScore) => {
//   const perfectGrade=`Congratulations! You scored 10/10!`;
//   const goodGrade = `Congratulations! You scored ${correctScore} and ${incorrectScore}` ;
//   const badGrade = `Good try, today you scored ${correctScore} and ${incorrectScore}!`;

//   if (correctScore === 10) {
//     reloadQuiz();
//     return perfectGrade;

//   } else if (correctScore <= 6) {
//     reloadQuiz();
//     return goodGrade;

//   } else {
//     reloadQuiz();
//     return badGrade;
//   }
// }
// 
//reloadQuiz has to render a restart button that reloads
// const reloadQuiz() => {
//   const reloadBttn =`<button type="button" id="reloadBttn" class="reloadBttn"
//    value="">Play again?</button>`
  
// }
// currently working on....

const questions = () => {
  const content = STORE.map(({question, answers}, questionIndex) => `<div class="${['question', (questionIndex === 0) && 'visible'].filter(Boolean).join(' ')}" id='question-${questionIndex}'>
    <p class='question-copy'>${question}</p>
    ${answers.map((answer, answerIndex) => `<input type="radio" class="answerOption" name="question-${questionIndex}" id='${answerIndex}-${answerIndex}' value="${answer}" />
    <label class="label" for="${answerIndex}-${answerIndex}">${answer}</label>  
      `).join('\n')}
      <button type="button" id="answerBttn" class="nextBttn" value="${questionIndex}">Next Question!</button>
    </div>`).join('\n');
  const template = document.createElement('template');
  template.innerHTML = content;
  return template;  
};
test && assert({
  given: 'question function call',
  should: 'first child has class visible',
  actual: questions().content.firstChild.classList.contains('visible'),
  expected: true,
});

test && assert({
  given: 'question function call',
  should: 'last child does not have class visible',
  actual: questions().content.lastChild.classList.contains('visible'),
  expected: false,
});

const startBttn = $('startBttn');
const renderModalGuts = () => {
  render({ template:'modalGutsTemplate', container: 'quizModalContainer'});
  render({ template: questions(), container: 'quizQuestions'});
};

startBttn.addEventListener('click', renderModalGuts);
