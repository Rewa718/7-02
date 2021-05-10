// connect "Positive or negative" button to "comparison" function
document.getElementById('click').addEventListener('click', comparison)

function comparison () {
  // get user input and convert to integer
  let entnum = parseInt(document.getElementById('entnum').value)

  // check if the usersInput is less than 0
  if (entnum < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = Positive'
  }
}
