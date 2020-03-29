// Assignment code here
var generatePassword = function() {
  var lengthprompt = window.prompt("how long would you like your password to be? \n Min: 8 \n Max: 128");
  debugger;
    if (lengthprompt < 8 || lengthprompt > 128 || isNaN(lengthprompt) == true) {
      window.alert("please select proper passsword length");
    } else {
      //ask what elements they want then combine.
      charArray.combine();

      //if line is empty
      if (charArray.array === "") {
        alert("Please select at least one thing to include in your randomly generated password. \n Click the button to try again.");
      } 
      else {
        //make a password from array
        var displayPass = '';
        for(var i = 0; i < lengthprompt; i++) {
        displayPass += charArray.array[Math.floor(Math.random() * charArray.array.length)];
        }
        return displayPass;
      };
    };
  return "Try Again"
}

//variables for password.
var charArray = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  symbol: "!#$%&*+,-./:;<=>?@[]^_{|}~",
  array: "",
  combine: function() {
    var lowerCaseConfirm = confirm("Would you like your password to include lower case letters?");
    if (lowerCaseConfirm) {
        this.lower = 'abcdefghijklmnopqrstuvwxyz'
    } else {
        this.lower = "";
    }
    var upperCaseConfirm = confirm("Would you like your password to include upper case letters?");
    if (upperCaseConfirm) {
         this.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    } else {
        this.upper = "";
    }
    var numberConfirm = confirm("Would you like numbers included in your password?");
    if (numberConfirm) {
      this.number = "1234567890";
    } else {
      this.number = "";
    }
    var symbolconfirm = confirm("Would you like symbols to be included in your password?");
    if (symbolconfirm) {
      this.symbol = "!#$%&*+,-./:;<=>?@[]^_{|}~"
    } else {
      this.symbol = ""
    }
    this.array = this.lower.concat(this.upper, this.number, this.symbol);
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

