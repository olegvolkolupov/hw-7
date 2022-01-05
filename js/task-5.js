/*
    Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
    подставляет его текущее значение в span#name-output. 
    Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

let inputRef = document.querySelector('#name-input');
let spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  let inputText = event.target.value;
  if (inputText == '') {
    spanRef.textContent = 'незнакомец';
  } else {
    spanRef.textContent = inputText;
  }
});
