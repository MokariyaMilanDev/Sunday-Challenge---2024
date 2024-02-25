const __main = document.getElementById("--main");
const Ele__hour = document.getElementById("--hour");
const Ele__minute = document.getElementById("--minute");
const Ele__second = document.getElementById("--second");
var _start = false;
var __hour = 0;
var __minute = 0;
var __second = 0;
var interval;
var isStop = false;


function createButton(imgURL, fun, name) {
  var button = document.createElement("button");
  button.setAttribute("onclick", fun);
  button.setAttribute("id", name);
  var img = document.createElement("img");
  img.src = imgURL;
  button.appendChild(img);

  return button;
}

function checkMinute() {
  if (__second > 59) {
    __second = 0;
    __minute += 1;
  }
}
function checkHour() {
  if (__minute > 59) {
    __minute = 0;
    __hour += 1;
  }
}
function cehckDay() {
  if (__hour > 23) {
  }
}

function counter() {
  interval = setInterval((e) => {
    function x(time, element) {
      if (time >= 10) {
        element.innerHTML = `${time}`;
      } else {
        element.innerHTML = `0${time}`;
      }
    }

    __second += 1;

    x(__second, Ele__second);
    x(__minute, Ele__minute);
    x(__hour, Ele__hour);

    checkMinute();
    checkHour();
    cehckDay();
  }, 1000);
}

function start(element) {
  var section = element.parentElement;
  counter();
  element.setAttribute("onclick", "stop(this)");
  element.children[0].src = "[imageURL]";
}

function stop(element) {
  var section = element.parentElement;

  if (isStop) {
  } else {
  }

  var restart = createButton("[imageURL]","restart(this)","restart");
  var reset = createButton("[imageURL]", "reset(this)", "reset");

  section.appendChild(restart);
  section.appendChild(reset);

  section.children[0].remove();

  clearInterval(interval);
  isStop = true;
}

function restart(element) {
  var section = element.parentElement;
  element.nextElementSibling.remove();
  counter();
  element.setAttribute("onclick", "stop(this)");
  element.children[0].src = "[imageURL]";
}

function reset(element) {
  var section = element.parentElement;
  element.remove();
  section.children[0].remove();

  var start = createButton("[imageURL]", "start(this)", 'start');
  section.appendChild(start);

  __hour = 0;
  __minute = 0;
  __second = 0;
  Ele__second.innerHTML = "00";
  Ele__minute.innerHTML = "00";
  Ele__hour.innerHTML = "00";
  clearInterval(interval);
}
