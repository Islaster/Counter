'use strict';
let num = 0;
document.querySelector('.increase').addEventListener('click',function () {
  const increase = document.querySelector('.increase');
  document.querySelector('.increase').style.color = 'green';
  num++;
  document.querySelector('h2').textContent = num;
  if(num > 0){
    document.querySelector('h2').style.color = 'green';
  }
});
document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('h2').textContent = 0;
  document.querySelector('h2').style.color = 'black';
  document.querySelector('.increase').style.color = 'white';
  document.querySelector('.decrease').style.color = 'white';
});
document.querySelector('.decrease').addEventListener('click', function () {
  num--;
  document.querySelector('.decrease').style.color = 'red';
  document.querySelector('h2').textContent = num;
  if(num < 0){
    document.querySelector('h2').style.color = 'red';
  }
})
