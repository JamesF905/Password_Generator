let button = document.getElementById('generate'); //Store the main generate button in a global variable
let status_title = document.querySelector('h2'); //Store the <H2> tag in a global variable
let possible_characters = ""; //Initialize the possible_characters string
let criteria_selection_status = false;  //Initialize the criteria_selection_status

//set the characterTypes array
let characterTypes = [
    ["Lowercase Letters", "abcdefghijklmnopqrstuvwxyz"],
    ["Uppercase Letters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["Numbers", "0123456789"],
    ["Special Characters", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
];

/* This function runs a foreach loop on the characterTypes array to get user character type selections, 
then uses those selections to edit both the "possible_characters" string, 
and the "criteria_selection_status" array*/
function compilePC(Chartype) {
    let status = confirm("Do you want to include "+Chartype[0]);
    if(status == true){
    criteria_selection_status = true;
    possible_characters += Chartype[1];
  }
}

//This is the main password generation function
function gen_pass(){
    //Get the length of the password
    let pass_length = prompt("First, select how many characters you want your Password to have.\n\nPlease choose a number between 8 and 128");

    //ERROR-HANDLING - if the length doesnt meet the criteria,prompt an error and ask again
    while (pass_length < 8 || pass_length > 128){
        pass_length = prompt("Error\n\nThe length must be between 8 and 128 characters long, Please Try Again");
    }

    //Alert the next criteria
    alert("Next, you must select at least one of the following character types to include in your password.\n\n\nNOTE: Click \"OK\" for Yes, and \"Cancel\" for No");

    //Call the compilePC function to edit the set global variables
    characterTypes.forEach(compilePC);

    //ERROR-HANDLING - If at least one of the Character Types aren't selected, prompt an error and ask them to try again 
    while (criteria_selection_status == false){
        alert("ERROR\n\n You must select at least ONE of the following character types. Please Try Again.");
        characterTypes.forEach(compilePC);
    }

    //Upon validation of all criteria, Generate the Password, and store it in a variable
    let generated_password = "";
    for (let i = 0; i < pass_length; i++){
        generated_password += possible_characters[Math.floor(Math.random() * possible_characters.length)];
    }
    
    //Reset these two global variables
    possible_characters = "";
    criteria_selection_status = false;

    //Update the html to show the new status, the completed password, as well as new options in the button text itself
    status_title.innerHTML = "Success! Here's your new Password.";
    status_title.style.color = "green";
    document.getElementById('password').innerHTML = generated_password;
    button.innerHTML = "Generate Another?"; 
}

//Initialize javascript to run when the main button is clicked
button.addEventListener("click", gen_pass);