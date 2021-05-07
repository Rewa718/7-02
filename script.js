//connect "Positive or negative" button to "comparison" function
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
    // get user input and convert to integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // check if the usersInput is less than 0
  if (userInput < 0) {
     document.getElementById('answer').innerHTML = "Negative"
  }

}