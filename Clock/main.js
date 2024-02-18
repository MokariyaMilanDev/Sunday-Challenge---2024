var loading = document.getElementById("loading");
const container = document.getElementById("container");
const Ele_day = document.getElementById("day");
const Ele_hour = document.getElementById("hour");
const Ele_minute = document.getElementById("minute");
const Ele_second = document.getElementById("second");
const Ele_AMPM = document.getElementById("AM_PM");
const Ele_date = document.getElementById("date");

setTimeout((e)=>{
  loading.style.display = 'none';
  container.style.display = 'flex';
}, 1000);

setInterval(()=>{
  set_day();
  set_Hour();
  set_Minute();
  set_Second();
  set_AMPM();
  set_date();
}, 1000);

function set_day(){
  var day = '';
  var index = new Date().getDay();
  switch (index) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      "";
      break;
  }
  Ele_day.innerHTML = day;
}

function set_Hour() {
  var hour = new Date().getHours();
  Ele_hour.innerHTML = `${hour}h`;
}
function set_Minute(){
  var minute = new Date().getMinutes();
  Ele_minute.innerHTML = `${minute}s`;
}
function set_Second() {
  var second = new Date().getSeconds();
  Ele_second.innerHTML = `${second}s`;
}
function set_AMPM() {
  var hour = new Date().getHours();
  var AMPM = hour > 12 ? "PM":"AM";
  Ele_AMPM.innerHTML = AMPM;
}

function set_date(){
  const arrMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  const _month = arrMonth.filter((e,i)=>i==month);

  Ele_date.innerHTML = `${date} ${_month[0]}, ${year}`;
}
