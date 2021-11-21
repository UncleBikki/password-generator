
var generateBtn = document.querySelector("#generate");
// function to generate password
function generatePassword() {
  console.log("Button pressed bitch!")

  //step one prompt the user for the password criteria
  
  //step one-a password length 8-128

  //step one-b prompt user for lowercase uppercase numbers or special characters


  // step 2 validate the input

  // step 3 generate password based on criteria




  // step 4 display the password on page
  return "return the stored password variable"
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
