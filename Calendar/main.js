const date_all = new Date();

const cal_two = document.getElementById('cal_days_info');
var cal_month = document.getElementById('cal_date_info');

const arr_dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var day = date_all.getDay();
var days = 0;
var date = date_all.getDate();
var month = date_all.getMonth()+1;
var year = date_all.getFullYear();

date_all.setDate(1);
// Set Lip year
function Lip_year(){
  var a;
  year%2 === 0 ? a=29 : a=28;
  return a;
}

// Month and Year settter
function Set_Month() {
  switch (month) {
    case 1:
      cal_month.innerHTML = 'January, ' + year;
      days = 31
      break;
    case 2:
      cal_month.innerHTML = 'February, ' + year;
      days = Lip_year();
      break;
    case 3:
      cal_month.innerHTML = 'March, ' + year;
      days = 31; 
      break;
    case 4:
      cal_month.innerHTML = 'April, ' + year;
      days = 30; 
      break;
    case 5:
      cal_month.innerHTML = 'May, ' + year;
      days = 31; 
      break;
    case 6:
      cal_month.innerHTML = 'June, ' + year;
      days = 30; 
      break;
    case 7:
      cal_month.innerHTML = 'Jully, ' + year;
      days = 31; 
      break;
    case 8:
      cal_month.innerHTML = 'August, ' + year; 
      days = 31;
      break;
    case 9:
      cal_month.innerHTML = 'September, ' + year;
      days = 30;
      break;
    case 10:
      cal_month.innerHTML = 'October, ' + year;
      days = 31;
      break;
    case 11:
      cal_month.innerHTML = 'Navember, ' + year;
      days = 30;
      break;
    case 12:
      cal_month.innerHTML = 'December, ' + year;
      days = 31;
  }
}
Set_Month();


// Days setter
function Set_Date(){
  for (var i = 0; i <= date_all.getDay()-1; i++) {
    var box = document.createElement('div');
    box.innerHTML = '';
    
    cal_two.appendChild(box);
  }
  for (var i = 1; i <= arr_dates[days-1]; i++) {
    var box = document.createElement('div');
    box.innerHTML = arr_dates[i-1];
    box.setAttribute('class', "div");
    cal_two.appendChild(box);
  }
}

Set_Date();

// Set Today
function Set_Today(){
  cal_two.children[date+date_all.getDay()-1].style.background = '#009BFF';
  cal_two.children[date+date_all.getDay()-1].style.boxShadow = '0px 0px 2px 0.1px black';
 
}
Set_Today();
