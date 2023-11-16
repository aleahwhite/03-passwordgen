var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var length = parseInt(prompt("How many characters (8-128) would you like in your new password?"))

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Enter a valid password length between 8-128!!!!");
    return "Invalid length for password :(";
  }


  var hasLowercase = confirm("Do you want lowercase characters in your passwords?")
  var hasUppercase = confirm("Do you want uppercase characters in your password?")
  var hasNumbers = confirm("Do you want numbers in your password?")
  var hasSpecialChars = confirm("Do you want special characters in your passwords")


  var charset = "";


  if (hasLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (hasUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (hasNumbers) {
    charset += "0123456789";
  }

  if (hasSpecialChars) {
    charset += "!@#$&?/-_+=";
  }


  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }


  return password;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
