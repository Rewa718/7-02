// connect "Positive or negative" button to "comparison" function
document.getElementById('click').addEventListener('click', comparison)
let entnum = 0

function comparison () {
  // get user input and convert to integer
  const entnum = parseInt(document.getElementById('entnum').value)
  

  // check if the usersInput is less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } if (userInput > 0) {
    document.getElementById('answer').innerHTMl = "Positive"
  }
 