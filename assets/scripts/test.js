let possible_characters = ""; //Initialize the possible characters string
let criteria_selection = [];  //Initialize the criteria selection status array

//set password criterial 
let criteria = [
    ["Lowercase Letters", "abcdefghijklmnopqrstuvwxyz"],
    ["Uppercase Letters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["Numbers", "0123456789"],
    ["Special Characters", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
];

criteria.forEach(compilePC);

function compilePC(Chartype) {
    let status = confirm("Do you want to include "+Chartype[0]);
    criteria_selection.push([Chartype[0], status]);
    if(status == true){
    possible_characters += Chartype[1];
  }
}

alert(possible_characters);
alert(criteria_selection);






function makeid(len) {
    
    /*
    let criteria = {
        lowercase: ["abcdefghijklmnopqrstuvwxyz", confirm("Do you want to include Lowercase Characters?")],
        uppercase: [criteria.lowercase.toUpperCase(), confirm("Do you want to include Uppercase Characters?")],
        numbers: ["0123456789", confirm("Do you want to include Numbers?")],
        spec: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", confirm("Do you want to include Special Characters?")]
      };*/
    // iterate an array or object

    //send confirms right to a form that updates a global



    //let l_Case = ["abcdefghijklmnopqrstuvwxyz", confirm("Do you want to include Lowercase Characters?")];
    //let u_Case = [l_Case[0].toUpperCase(), confirm("Do you want to include Uppercase Characters?")];
    //let numeric = ["0123456789", confirm("Do you want to include Numbers?")];
    //let special = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", confirm("Do you want to include Special Characters?")];
    /*
    let password = "";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = criteria.lowercase.toUpperCase();
    let numbers = "0123456789";
    let special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    */
/*
    console.log(criteria);


    let possible_characters = "";
    if(l_Case[1] == true) possible_characters = possible_characters+lowercase
    if(u_Case[1] == true) possible_characters = possible_characters+uppercase
    if(numeric[1] == true) possible_characters = possible_characters+numbers
    if(special[1] == true) possible_characters = possible_characters+special
    alert(possible_characters);*/
 /*
    for (let i = 0; i < len; i++)
   //password += possible_characters. charAt(Math. floor(Math. random() * possible_characters. length));
   password += possible_characters[Math.floor(Math.random() * possible_characters.length)];
    
    let poop = confirm(password);
    if(poop ==true){ makeid(100);}*/
  }

  makeid(100)

  // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  /*function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  makeid(10); */


  // possible_characters[Math.floor(Math.random() * possible_characters.length)];