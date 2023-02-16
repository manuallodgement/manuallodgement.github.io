const firstDropdown = document.getElementById("first-dropdown");
const secondDropdown = document.getElementById("second-dropdown");
const resultDiv = document.getElementById("result");

function displayResult() {
  const firstOption = firstDropdown.value;
  const secondOption = secondDropdown.value;

  let result = "";

  if (firstOption === "option1" && secondOption === "option4") {
    result = "<b>To register a mortgage you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option1" && secondOption === "option5") {
    result = "<b>To add a new owner to a title you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option1" && secondOption === "option6") {
    result = "<b>To register a caveat you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option2" && secondOption === "option4") {
    result = "<b>To remove a mortgage you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option2" && secondOption === "option5") {
    result = "<b>To remove a registered owner you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option2" && secondOption === "option6") {
    result ="<b>To remove a caveat you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option3" && secondOption === "option4") {
    result ="<b>To transfer a mortgage you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option3" && secondOption === "option5") {
    result = "<b>To transfer a person or title you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  } else if (firstOption === "option3" && secondOption === "option6") {
    result = "<b>To transfer a caveat you'll need the following:</b> <br><br>-(Form 5) <a href='https://www.google.com'>Click here to go to the forms page</a><br>-Statutory declaration for each witness <a href='https://www.google.com'>(Form 48)</a><br>-<a href='https://www.google.com'>Tax statements</a> for each transferor and transferee<br>-<a href='https://www.google.com'>Manual Dealing Lodgement Form</a><br>-Payment of $88.00 - <a href='https://www.google.com'>Payment Details</a>";
  }

  resultDiv.innerHTML = result;
}

firstDropdown.addEventListener("change", displayResult);
secondDropdown.addEventListener("change", displayResult);