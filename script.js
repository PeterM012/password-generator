// Set values for Prompt box when ask "How many character?"
var characters = 8;
var option = [];

// Arrays for each var in Prompt Function
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!","@","#","$","%","^","&","*","_","+","=","?","~"]

// Function to show New Password Generated
function writePassword() {
  var works = prompts();

// If Prompts are successfully answered they will produce the desired password  
  if(works) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }

}

// "For Loop" using the Map Floor and Math random to generate a whole Number for Password
function generatePassword() {
    var password = ""
    for (var i = 0; i < characters; i++) {
      var randomPassword = Math.floor(Math.random() * option.length);
      password = password + option[randomPassword]
    }
    return password
}

//New Function for Prompt messages displayed when Generate button is "Clicked"
function prompts() {
    characters = parseInt(prompt("Password length 8-128 characters"))


    // If statement showing that only number can be used and must be between 8-128 nothing less or more
    if (isNaN(characters) || characters < 8 || characters > 128) {
        alert("Password does not meet criteria, Please try again.")
        return false;
    }
    //I used Con.cat to consolidate my 4 arrays for my For Loop in order to avoid 
    //If selected yes the Password will include Uppercase Letters
    if (confirm("Would you like to include uppercase letters in password?")) {
        option = option.concat(upperCase);
    }
    //If selected yes the Password will include Lowercase Letters
    if (confirm("Would you like to include lowercase letters in password?")) {
        option = option.concat(lowerCase);
    }
    //If selected yes the Password will include Numbers
    if (confirm("Would you like to include numbers letters in password?")) {
        option = option.concat(numbers);
    }   
    //If selected yes the Password will include Symbols
    if (confirm("Would you like to include symbols letters in password?")) {
        option = option.concat(symbols);
    }

    return true;
 }

    //This is locating a specific word on the HTML page using Query
    var generateBtn = document.querySelector("#generate");
    //This is stating that if the button is clicked to call function writePassword
    generateBtn.addEventListener("click", writePassword);
    




 
