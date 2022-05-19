//Get the length of the password
let pass_length = prompt("First, select how many characters you want your Password to have.\n\nPlease choose a number between 8 and 128");

//ERROR-HANDLING - if the length doesnt meet the criteria,prompt an error and ask again
while (pass_length < 8 || pass_length > 128){
    pass_length = prompt("Error\n\nThe length must be between 8 and 128 characters long, Please Try Again");
}

let possible_characters = ""; //Initialize the possible_characters string
let criteria_selection_status = false;  //Initialize the criteria_selection_status

//set the characterTypes array 
let characterTypes = [
    ["Lowercase Letters", "abcdefghijklmnopqrstuvwxyz"],
    ["Uppercase Letters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["Numbers", "0123456789"],
    ["Special Characters", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
];

alert("Next, you must select at least one of the following character types to include in your password.\n\n\nClick \"OK\" for Yes\n\n\"Cancel\" for No");

/* Run a foreach loop on the characterTypes array to get user character type selections, 
then use those selections to edit both the "possible_characters" string, 
and the "criteria_selection_status" array*/
characterTypes.forEach(compilePC); 

function compilePC(Chartype) {
    let status = confirm("Do you want to include "+Chartype[0]);
    if(status == true){
    criteria_selection_status = true;
    possible_characters += Chartype[1];
  }
}

//ERROR-HANDLING - If at least one of the Character Types arent selected, prompt an error and ask them to try again 
while (criteria_selection_status == false){
    alert("ERROR\n\n You must select at least ONE of the following character types. Please Try Again.");
    characterTypes.forEach(compilePC);
}

//alert(possible_characters);
//alert(criteria_selection_status);

let generated_password = "";
for (let i = 0; i < pass_length; i++){
    generated_password += possible_characters[Math.floor(Math.random() * possible_characters.length)];
}
alert("Here is your new Password\n\n"+generated_password);
document.getElementById('password').innerHTML = generated_password;
document.getElementById('password').style["opacity"] = "1";