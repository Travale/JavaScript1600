//Create a string var;

/*var petName = prompt("What's my pets name?","Type name here.");

switch (petName) {
    case "Rover":
        alert("My dog is named" + petName);
        break;

    case "Sally":
        alert("My friend's dog is named" + petName);
        break;
        
    case "Fluffy":
        alert("A dog named" + petName "bit me once");
        break;

    default:
        alert("That is not my pets name.");
        break;
}*/

var gameLevel = 1;
var password = "mellon"

var userName = prompt("Enter your name");
var passwordCheck;

function CheckPassword(params) {
    switch (gameLevel) {
    case 1:
        passWordCheck = prompt(userName + "Speak friend and enter.")
        if (password == passWordCheck) {
            gameLevel = 2;
        }
        CheckPassword();
        break;

    case 2:
        alert("gameLevel")
        break;

    case 3:
    
        break;
    }

}

CheckPassword ();