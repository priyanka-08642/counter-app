const mainTitle= document.querySelector('#title');
let curvalue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click',() => {
  curvalue++;
  mainTitle.textContent = curvalue;
});

btnDecrement.addEventListener('click',() => {
    curvalue--;
    mainTitle.textContent = curvalue;
});

btnReset.addEventListener('click',() => {
    curvalue = 0;
    mainTitle.textContent = curvalue;
});
  