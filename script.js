
var characters = 8;
var option = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]
var symbols = ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9]

var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var works = prompts();

  if(works) {
    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

}

function generatePassword() {
    var password = ""
    for (var i = 0; i < characters; i++) {
      var randomPassword = Math.floor(Math.random()) * option.length);
      newPassword = password + option[randomPassword]
    }
    return newPassword
}


function prompts() {
    option = [];

    characters = parseInt(prompt("Password length 8-128 characters"))

    if (isNaN(characters) || characters < 8 || characters > 128) {
        alert("Password does not meet criteria, Please try again.")
        return false;
    }

    if (confirm("Would you like to include uppercase letters in password?")) {
        option = option.concat(upperCase);
    }

    if (confirm("Would you like to include lowercase letters in password?")) {
        option = option.concat(lowerCase);
    }

    if (confirm("Would you like to include symbols letters in password?")) {
        option = option.concat(symbols);
    }

    if (confirm("Would you like to include numbers letters in password?")) {
        option = option.concat(numbers);
    }

    return true;



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]=<>/,."
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());