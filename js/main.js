(function(){
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  var startTime;
  var timeLeft;
  var timeToCountDown = 2 * 60 * 1000 + 55 * 1000;
  var timerId;

  function updateTimer(t){
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-2);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countDown(){
    timerId = setTimeout(function(){
      // var elepsedTime = Date.now() - startTime;
      // timeLeft = timeToCountDown - elepsedTime;
      timeLeft = timeToCountDown - (Date.now() - startTime);
    //  console.log(timeLeft);
    if (timeLeft < 0){
      clearTimeout(timerId);
      timeLeft = 0;
      timeToCountDown = 0;
      updateTimer(timeLeft);
      return;
    }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click' , function(){
    startTime = Date.now();
    countDown();
  });
})();
