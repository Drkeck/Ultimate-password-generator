// Assignment code here
var generatepassword = function() {
  var lengthprompt = window.prompt("how long would you like your password to be? \n Min: 8 \n Max: 128");
  lengthprompt = parseInt(lengthprompt)
  if (lengthprompt <= 7 || lengthprompt >= 129 || lengthprompt === null || lengthprompt === "") {
    window.alert("please select proper passsword length");
    return generatepassword();
  }

  var lowerCaseConfirm = window.confirm("Would you like your password to include lower case letters?");
  if (lowerCaseConfirm) {
    
  } else {
    charArray.lower = "";
  }
  var upperCaseConfirm = window.confrim("Would you like your password to include upper case letters?");
  if (upperCaseConfirm) {
    
  } else{
    charArray.upper = "";
  }
  var numberConfirm = window.confirm("would you like your password to include numbers?");
  if (numberConfirm) {

  } else {
    charArray.number = ""
  }
  var symbolConfirm = window.confirm("would you like your password to include symbols?");
  if (symbolConfirm) {

  }else {
    charArray.symbol = ""
  }

}

//variables for password.
var charArray = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  symbol: "!#$%&*+,-./:;<=>?@[]^_{|}~",
  combine: function() {
    array = this.lower.concat(this.upper, this.number, this.symbol);
    return array;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

