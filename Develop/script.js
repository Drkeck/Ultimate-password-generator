// Assignment code here
var generatePassword = function() {
  var lengthprompt = window.prompt("how long would you like your password to be? \n Min: 8 \n Max: 128");
    if (lengthprompt === "" || lengthprompt === null) {
      window.alert("please input a number");
      generatePassword();
    }
  lengthprompt = parseInt(lengthprompt);
  if (lengthprompt <= 7 || lengthprompt >= 129) {
    window.alert("please select proper passsword length");
    generatePassword();
  }
  // confirm lower case
  charArray.confirmL();

  //confrim upper case
  charArray.confrimU();

  //confrim numbers
  charArray.confirmN();

  //confirm symbols
  charArray.confirmS();

  //combine all arrays
  charArray.combine();

  //if line is empty
  if (charArray.array === "") {
    alert("Please select at least one thing to include in your randomly generated password. \n Click the button to try again.");
    generatePassword();
  } 
  else {
    //make a password from array
    var displayPass = '';
    for(var i = 0; i < lengthprompt; i++) {
    displayPass += charArray.array[Math.floor(Math.random() * charArray.array.length)];
    }
    return displayPass;
  }
}

//variables for password.
var charArray = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  symbol: "!#$%&*+,-./:;<=>?@[]^_{|}~",
  array: "",
  combine: function() {
    this.array = this.lower.concat(this.upper, this.number, this.symbol);
  },
  confirmL: function() {
      var lowerCaseConfirm = confirm("Would you like your password to include lower case letters?");
      if (lowerCaseConfirm) {
         this.lower = 'abcdefghijklmnopqrstuvwxyz'
      } else {
          this.lower = "";
      }
  },
  confrimU: function() {
      var upperCaseConfirm = confirm("Would you like your password to include upper case letters?");
      if (upperCaseConfirm) {
          this.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      } else {
          this.upper = "";
      }
  },
  confirmN: function() {
      var numberConfirm = confirm("Would you like numbers included in your password?");
      if (numberConfirm) {
        this.number = "1234567890";
      } else {
        this.number = "";
      }
  },
  confirmS: function() {
    var symbolconfirm = confirm("Would you like symbols to be included in your password?");
    if (symbolconfirm) {
      this.symbol = "!#$%&*+,-./:;<=>?@[]^_{|}~"
    } else {
      this.symbol = ""
    }
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

