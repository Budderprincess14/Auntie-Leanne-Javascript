var birthDay = "9";
var birthMonth = "June";

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', birthdayMessage);
}

function birthdayMessage() {
  var currentMonth = prompt("Please enter this month as a name.", "April");
  
  if(currentMonth == birthMonth) {
    currentDay();
  } else {
    return "Please come back in June!";
  }
}

