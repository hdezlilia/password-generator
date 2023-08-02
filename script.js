// Assignment Code
var generateBtn = document.querySelector("#generate");

// defining variables
var numbers = ['1','2', '3', '4','5','6','7','8','9','0'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r', 's', 't', 'u', 'v', 'w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S', 'T', 'U', 'V', 'W','X','Y','Z'];
var specialCharacter = ['!','@','#','$','%','^','&','*'];

function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}


// rules when generating number between 8 - 128
function generatePassword() {
  var isValid = false;
  var passwordLength = prompt('Specify the number of characters for your password, min. 8 - max. 128')
  while(!isValid) {
    var passwordNum = parseInt(passwordLength)
    if (passwordNum >= 8 && passwordNum <= 128)
    {
      isValid = true;
    } else {
      passwordLength = prompt('Invalid number, please select a number between 8 & 128.');
    }
  }
// user selects what characters they want for their passsword (prompt)
  var hasSpecialCharacters = confirm('Y/N Special Characters?');
  var hasUpperCase = confirm ('Y/N, Uppercase Letters?');
  var hasLowerCase = confirm ('Y/N, LowerCase Letters?');
  var hasNumbers = confirm ('Y/N, Any Numbers?');

  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
  };

  var possiblePasswordCharacters = [];
  var passsword = [];

  if (passwordOptions.hasSpecialChar) {
    possiblePasswordCharacters = possiblePasswordCharacters.concat(specialCharacter);
  }
  if (passwordOptions.hasLowerCase) {
    possiblePasswordCharacters = possiblePasswordCharacters.concat(hasLowerCase);
  }
  if (passwordOptions.hasUpperCase) {
    possiblePasswordCharacters = possiblePasswordCharacters.concat(hasUpperCase);
  }  
  if (passwordOptions.hasNumbers) {
    possiblePasswordCharacters = possiblePasswordCharacters.concat(hasNumbers);
  }
  console.log(possiblePasswordCharacters)

  for (var i = 0; i < parseInt (passwordLength); i++) {
    var randomCharacter = getRandomCharacter(possiblePasswordCharacters);
    passsword.push(randomCharacter);
  }
  return passsword 
}
// Write password to the #password input
function writePassword () {
  var randomPassword = generatePassword ();
  var passwordText = document.querySelector('#password');

  passwordText.value = randomPassword.join ('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
