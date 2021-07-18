'use strict';
let count = 0;
const decreaseQs = document.querySelector('.decrease');
const increaseQs = document.querySelector('.increase');
const value = document.querySelector('h2');
decreaseQs.addEventListener('click', function () {
  count--;
  if(count < 0){
    value.style.color = 'red'
  }
  if(decreaseQs.style.color === 'white'){
    decreaseQs.style.color = 'red';
  }else{
    decreaseQs.style.color = 'white';
  }

  value.textContent = count;
});
increaseQs.addEventListener('click', function () {
  count++;
  if(count > 0){
    value.style.color = 'green';
  }
  if(increaseQs.style.color === 'white'){
    increaseQs.style.color = 'green';
  }else{
    increaseQs.style.color = 'white';
  }
  value.textContent = count;
});
document.querySelector('.reset').addEventListener('click',function () {
  value.textContent = 0;
  count = 0;
  value.style.color = 'black';
  decreaseQs.style.color = 'white';
  increaseQs.style.color = 'white';
});
