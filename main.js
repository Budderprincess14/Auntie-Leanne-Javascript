var birthDay = "9";
var birthMonth = "June";

function birthdayMessage() {
  var currentMonth = prompt("Please enter this month as a name.", "April");
  
  if(currentMonth == birthMonth) {
    currentDay();
  } else {
    return "Please come back in June!";
  }
}

