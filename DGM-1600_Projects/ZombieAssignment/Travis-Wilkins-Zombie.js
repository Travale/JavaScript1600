alert("There are zombies everywhere. You are searching a local walmart for bleach to drink.  A zombie pushes over a shelf and tries to attack!!!");
var weapon = prompt("Your desperately search for a weapon.  What do you choose?  A tazer knife, A sun gun, A spike bat or a boomerang?");
var randomNumber = Math.round(Math.random() * 100);

alert("You attack the zombie with your"+ " " + weapon);

if(randomNumber < 33){ //0-33
    alert("You kill the zombie with merciless strength");
} else if(randomNumber < 66 && randomNumber > 33){
    alert("The zombie kills you gruesomely")
} else if(randomNumber < 100 && randomNumber > 66)
    alert("The zombie is looking for brains, it ignores you");

//run for the exit, search for more supplies, drink bleach

var next = prompt("What do you do now? Run for the exit, search for more supplies, drink bleach.");

alert("You"+" " + next);

