import { STORE } from './questionLibrary.js';

const state = {
  score: 0,
  incorrectScore: 0,
  questionNumber: 0,
  correctScore: 0,
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

const render = ({template, container}) => {
  const tpl = typeof template === 'string'? $(template) : template;
  const root = $(container)
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.append(tpl.cloneNode(true).content);
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

const questions = () => {
  const content = STORE.map(({question, answers}, questionIndex) => `<div class="${['question', (questionIndex === 0) && 'visible'].filter(Boolean).join(' ')}" id='question-${questionIndex}'>
    <p class='question-copy'>${question}</p>
    ${answers.map((answer, answerIndex) => `<input type="radio" class="answerOption" name="question-${questionIndex}" id='${answerIndex}-${answerIndex}' value="${answer}" />
    <label class="label" for="${answerIndex}-${answerIndex}">${answer}</label>  
      `).join('\n')}
      <button type="button" class="nextBttn" value="${questionIndex}">Next Question!</button>
    </div>`).join('\n');
  const template = document.createElement('template');
  template.innerHTML = content;
  return template;  
}
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

//dynamically cr5eate a template
//turning contetnt into the inner HTML of a template element created with js







const startBttn = $('startBttn');
const renderModalGuts = () => {
  render({ template:'modalGutsTemplate', container: 'quizModalContainer'});
  render({ template: questions(), container: 'quizQuestions'});
};
startBttn.addEventListener('click', renderModalGuts);

// const quizModalContainer = document.getElementById('quizModalContainer');
// const modalGutsTemplate = document.getElementById('modalGutsTemplate');
// const startButton = () => {
//   quizModalContainer.append(document.cloneNode(modalGutsTemplate.content, true));
// };
//
//
//
// const modalGuts = () => {
//
//
//   const questionForm = document.querySelector('#questionForm');
//   const questionFormClone = document.cloneNode(questionForm.content, true);
//   const nextButton = document.querySelector('#nextButton');
//   const nextButtonClone = document.cloneNode(nextButton.content, true);
//   clone.querySelector("#score").appendChild(state.score);
//   clone.querySelector("#questionAnswer").appendChild(questionFormClone);
//   clone.querySelector("#nextButton").appendChild(state.score);
//   return clone;
// }
