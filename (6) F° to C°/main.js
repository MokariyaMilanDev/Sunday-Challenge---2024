var to_input = document.getElementById('to_input');

var fromInput = 0;
var toInput = 0;
var fromFactore = 'c';
var toFactore = 'f';

function convert(){

  function convertCelcius(a) {
    return a * 9 / 5 + 32 + '°F';
  }

  function converFahrenheit(a) {
    return (a - 32) * 5 / 9 + '°C';
  }

  const result = fromFactore == 'c' ? convertCelcius(fromInput) : converFahrenheit(fromInput);
  
 to_input.value = result;
}

function changeInput(element){
  var fromP = element.previousElementSibling;
  var toP = element.parentElement.nextElementSibling.children[0];
  
  if(!element.value==''){
    fromInput = element.value;
  }
  convert();
}

function changeConverter(element) {
  const pre = element.previousElementSibling;
  const next = element.nextElementSibling;
  var fromP = element.parentElement.previousElementSibling.children[0].children[0];
  var toP = element.parentElement.previousElementSibling.children[1].children[0];

  if (fromFactore === 'c') {
    fromFactore = 'f';
    toP.innerHTML = 'Celcius (C°)';
    pre.innerHTML = 'F°';
    
    toFactore = 'c';
    fromP.innerHTML = 'Fahrenheit (F°)';
    next.innerHTML = 'C°';
  } else {
    fromFactore = 'c';
    fromP.innerHTML = 'Celcius (C°)';
    pre.innerHTML = 'C°';
    
    toFactore = 'f';
    toP.innerHTML = 'Fahrenheit (F°)';
    next.innerHTML = 'F°';
  }
  convert();
}

convert();
