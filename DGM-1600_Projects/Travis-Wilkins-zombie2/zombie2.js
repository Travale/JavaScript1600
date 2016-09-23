var scenarios = ["You are walking down a road.  You spot a deer.  You chase it because you are hungry.","You are passing through a small town.  You see Willy Wonkas chocolate factory.  You enter to look for deliciously rare candy.","You take a misplaced step.  You roll down a very long hill.  At the bottom of the hill is a cave.  You enter to find food and shelter","Your car breaks down next to a shopping mall.  You go inside to find supplies to fix your car."]

function randomNumber(range) {
    return Math.round( Math.random() * range);
}

alert(scenarios[ randomNumber(scenarios.length -1) ] );

var weaponList = ["Raptor claw axe","ninja spike grenades","brass knuckles","rapier"];

var weapon = weaponList [randomNumber (weaponList.length -1) ];
alert("A zombie zombie is running toward you.  You look for a weapon. You grab a " + weapon + ".");
var liveOrDie = randomNumber(2);

if (liveOrDie === 0 ) {
    alert("The zombie tears your arm off.  You are dead!!!");
} else if (liveOrDie > 0) {
  alert("You kill the zombie with your "+ weapon + ".");
}

 