/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

alert("Hello World");
confirm("I love JavaScript");
prompt("Do you want to learn JavaScript?")

2 + 2;
/*
4
*/
2 - 2;
/*
0
*/
2 * 2;
/*
4
*/
2/2;
/*
1
*/
10%3;
/*
1
*/

300/2;
/*
150
*/

typeof(300/2);
/*
number
*/

"Hello"+"World";
/*
HelloWorld
*/

typeof("Hello"+"World")
/*
string
*/

var myFavoriteMovie = prompt("What is your favorite movie?");

alert("My favorite movie is"+" "+myFavoriteMovie);

var randomNumber = Math.random() * 5;
alert(randomNumber)
/*
Exception: ReferenceError: randomNumber is not defined
@Scratchpad/1:58:1
@Scratchpad/1:10:1
@Scratchpad/1:10:1
*/

var answer = prompt("What is the capital of New York?");

if(answer ==="Albany"){
  alert("You are correct");
}
else {
  alert("Sorry" + " " + answer + "Is not correct");
}

var favoriteAnimal = prompt("what is your favorite animal");

if(favoriteAnimal === "cat"){
  alert("cats are awesome");
}
else if (favoriteAnimal === "dog"){
  alert("Dogs are okay.");
}
else {
  alert("Good choice");
}

var randomNumber = Math.round( Math.random() * 15 );
//var randomNumber = 0;

if(randomNumber%3 === 0 && randomNumber != 0){
  if(randomNumber%5 === 0){
    alert("fizzbuzz");
  }
  else {
    alert("fizz");
  }
}
else if (randomNumber%5 === 0 && randomNumber != 0){
    alert("buzz");
}
else {
    console.log(randomNumber);
}

/*
Exception: SyntaxError: expected expression, got '==='
@Scratchpad/1:11:1
@Scratchpad/1:10:1
@Scratchpad/1:10:1
*/
/*
0
*/
/*
4
*/