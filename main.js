var birthDay = "9";
var birthMonth = "June";

function birthdayMessage() {
  var currentMonth = window.prompt("Please enter this month as a name.", "April");
  
  if(currentMonth == birthMonth) {
    currentDay();
  } else {
    return "Please come back in June!";
  }
  
  function currentDay() {
    var todayDay = Number(window.prompt("Please enter today's date as a number."));
    if(todayDay == birthDay) {
      return "Please go to " + string.link("https://budderprincess14.github.io/Auntie-Leannes-Birthday-Card/") + " for your gift!";
      break;
    } else if (todayDay < birthDay) {
      var remaining = birth - day;
      return "Come back in " + remaining + " days!"
      break;
    } else {
      return "Please come back next year!";
    }
  }
}



const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', birthdayMessage);
}
