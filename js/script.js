'use strict';
const widthOutput = window.innerWidth;
const heightOutput = window.innerHeight;
// alert(heightOutput);
// alert(widthOutput);

var btn = document.querySelector('.btn');
var span = document.querySelector('span');
var secret = document.querySelector('.secret-img');
var square = document.querySelector('#square');


// Random Function
var getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

btn.addEventListener('click', function() {
	btn.disabled = true;

	secret.classList.remove('glow');

	let timer = setInterval(() => {
		square.style.display = "block";
		square.style.left = getRandom(widthOutput * 0.2, widthOutput * 0.8 - 160) + 'px'; 
    square.style.top = getRandom(0, heightOutput - 200 - 160) + 'px';
  }, 600); // every 0.6 second


  // Подсчет заханченных милф
  var milfCount = 0;
  square.addEventListener('click', function() {

    milfCount++;

    var audio = document.getElementById('shoot').play();

    document.getElementById("shoot").volume = 0.1;
    
    span.textContent = 10 - milfCount;

    if (milfCount === 10) {
    	btn.textContent = 'PLAY AGAIN!';
    	btn.disabled = false;

      complete();
      square.style.display = "none";
      secret.classList.add('glow');

    } else {
      return
    }
  });

  // Остановка временного интервала
  function complete() {
    clearInterval(timer);
    timer = null;
  	span.textContent = 10;
  }
});