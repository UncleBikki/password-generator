
var generateBtn = document.querySelector("#generate");

// function to generate password
function generatePassword() {
// variables for our characters 
 var passlenth;
 var confirmNum;
 var confirmSpecial;
 var confirmTall;
 var confirmSmall;
 var charType;
 var password = "";
 //arrays 
  let special = ["!", "@", "#", "$", "%", "&", "*", "+", "?"]
  let Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  let small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let tall = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]

  //prompt to set password length 8-128
 passlenth = window.prompt("How long would you like your password to be? Choose a number between 8 and 128");
 if (!passlenth) {
   alert("a value is required");

 } else if (passlenth < 8 || passlenth > 128) {
  prompt("You MUST CHOOSE... a value between 8 and 128");

 //prompt for lowercase uppercase numbers or special characters
 } else {
   confirmNum = confirm("Do you want Numbers?");
   confirmSpecial = confirm("Do you want special characters?");
   confirmSmall = confirm("Do you want lowercase letters?");
   confirmTall = confirm("Do you want Upper Case letters?");
 };
 // if they dont choose any character type
 if (!confirmNum && !confirmSpecial && !confirmSmall && !confirmTall) {
   choices = alert("You must choose atleast one character type!");

 }
 // choosing all four character types
 else if (confirmNum && confirmSmall && confirmTall && confirmSpecial) {
   charType = Numbers.concat(special, tall, small,);

 }
 // the different three character type variations
 else if (confirmNum && confirmSmall && confirmTall) {
   charType = Numbers.concat(small, tall);

 }
 else if(confirmNum && confirmTall && confirmSpecial) {
   charType = Numbers.concat(tall, special);

 }
 else if(confirmNum && confirmSmall && confirmSpecial) {
   charType = Numbers.concat(small, special);

 }
 else if(confirmSpecial && confirmSmall && confirmTall) {
   charType = special.concat(small, special);

  }
  // different two character type variations
  else if(confirmNum && confirmSpecial) {
    charType = Numbers.concat(special);
  }

  else if(confirmNum && confirmSmall) {
    charType = Numbers.concat(small);
  }

  else if(confirmNum && confirmTall) {
    charType = Numbers.concat(tall);
  }

  else if(confirmSpecial && confirmSmall) {
    charType = special.concat(small);
  }

  else if(confirmSpecial && confirmTall) {
    charType = special.concat(tall);
  }

  else if(confirmSmall && confirmTall) {
    charType = small.concat(tall);
  }
  //single character types
  else if(confirmNum) {
    charType = Numbers;
  }
  else if(confirmSpecial) {
    charType = special;
  }
  else if(confirmSmall) {
    charType = small;
  }
  else if(confirmTall) {
    charType = tall;
  };
  

  // using math to randomly determine the password
  for (var i= 0; i < passlenth; i++) {
     password +=charType[Math.floor(Math.random() * charType.length)];
   
  }

  // display the password on page
  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
