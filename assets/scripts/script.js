// Set the Criteria Values as global variables
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = lowercase.toUpperCase();
let numbers = "0123456789";
let spec = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Gather password criteria from the user, then write the password to the #password input
function writePassword() {
  let char_length = prompt("First, select how many characters do you want your Password to have.\n\nPlease choose a number between 8 and 128"); 
  alert("Next, you must select at least one of the following character types to include in your password.\n\nFor each character type, Click \"OK\" for Yes, and \"Cancel\" for No");
  let l_Case = confirm("Do you want to include Lowercase Characters?");
  let u_Case = confirm("Do you want to include Uppercase Characters?");
  let numeric = confirm("Do you want to include Numbers?");
  let special = confirm("Do you want to include Special Characters?");
  

  //Error handling. Message then return on error.

  if (char_length < 8 || char_length > 128){
    alert("Your password must be between 8 and 128 characters in length, please try again.");
    return;
  }

  if (l_Case == false && u_Case == false && numeric == false && special == false){
    alert("Your password must contain at least one of the following...\n\na lowercase character\nan uppercase character\na number\na special character\n\nPlease try again.");
    return;
  }

  //generate the password
  let possible_characters = "";
  if(l_Case == true) possible_characters = possible_characters+lowercase
  if(u_Case == true) possible_characters = possible_characters+uppercase
  if(numeric == true) possible_characters = possible_characters+numbers
  if(special == true) possible_characters = possible_characters+spec

  function makeid() {
    var text;
    var possible_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
    text = possible_characters. charAt(Math. floor(Math. random() * possible_characters. length));
    // possible_characters[Math.floor(Math.random() * possible_choices.length)];
    return text;

  }



  //write the password to the page

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Error Handling


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//allowed special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"