/*
    Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
    Создай переменную counterValue в которой будет хранится текущее значение счетчика.
    Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

let decrBtnRef = document.querySelector("button[data-action='decrement']");
let incrBtnRef = document.querySelector("button[data-action='increment']");
let spanRef = document.querySelector('#value');

let counterValue = 0;

function increment() {
  counterValue++;
  spanRef.textContent = counterValue;
}

function decrement() {
  counterValue--;
  spanRef.textContent = counterValue;
}

incrBtnRef.addEventListener('click', increment);
decrBtnRef.addEventListener('click', decrement);
// window.addEventListener("keydown", (event) => {
//     if(event.key === "-") decrement();
//     if(event.key === "+") increment();
// });
