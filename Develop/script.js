
function initPassword() {
  var usergreet = alert("Welcome to the password generator, click to continue");
  var userInput = prompt("Do you want to create a password?");
  if (userInput === "Yes" || userInput === "y" || userInput === "yes" || userInput === "YES" || userInput === "Y") {
    var password = generatePassword();
    return password;
  } else if (userInput === "No" || userInput === "no" || userInput === "NO" || userInput === "n") {
    alert("Thanks for using Password generator");
  } else {
    alert("Please enter a valid answer (Yes/No)");
    return initPassword();
  }
}

function generatePassword() {
  var passLength = prompt("How long do you want the password to be? (8-128 characters)");
  
  // Validate password length input
  if (isNaN(passLength)) {
    alert("Please enter a valid number");
    return generatePassword();
  }
  if (passLength < 8 || passLength > 128) {
    alert("Password has to be between 8-128 characters long");
    return generatePassword();
  }

  // Confirm character types to include
  var includeUpper = confirm("Do you want to include upper case characters?(OK for yes, cancel for no)");
  var includeLower = confirm("Do you want to include lower case characters? (OK for yes, cancel for no)");
  var includeNumber = confirm("Do you want to include numbers? (OK for yes, cancel for no)");
  var includeSpecial = confirm("Do you want to include special characters? (OK for yes, cancel for no)");
  
  // Validate that at least one character type is selected
  if (!includeLower && !includeUpper && !includeNumber && !includeSpecial) {
    alert("At least one type of character must be selected for the password.");
    return generatePassword();
  }

  // Characters to build password
  var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerC = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specialC = '!@#$%^&*()-_+=[]{}|;:\'",.<>?/';

  var allCharacters = '';
  if (includeUpper) allCharacters += upperC;
  if (includeLower) allCharacters += lowerC;
  if (includeNumber) allCharacters += numbers;
  if (includeSpecial) allCharacters += specialC;

  //Logic to create the password
  var passchar = '';
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    passchar += allCharacters[randomIndex];
  }

  return passchar;
}

// connect #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = initPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//event listener to generate button
generateBtn.addEventListener("click", writePassword);
