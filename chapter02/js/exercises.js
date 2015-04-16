/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return (0/0)/* your answer here */ ;

};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  var dog; dog = false;// Write a statement that is not undefined.

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  var god = 'hello';// Write a statement that declares a variable.

  return 'hello'; // Return that variable.

};

// Variables 2
Exer.variables2 = function () {

  var steer;// Write a statement that declares a variable.

  steer = 5; // Write a statement to assign a number value to your variable.

  return steer;// Return the variable.

};

// Variables 3
Exer.variables3 = function () {

  var mood = "happy";
  console.log(mood);// Write a statement that declares a variable and initializes it to a string.

  return "happy" ;// Return the variable.
};

// Variables 4
Exer.variables4 = function ( n ) {

 return n;  // Return the parameter.

};

// Variables 5
Exer.variables5 = function ( n ) {

var t = n;// Declare a new variable and initialize it to the value of `n`.

  return t;// Return the new variable.

};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  var apples = 3;// (declare a variable named `apples` and initialize it to `3`)

  apples = apples + stacys;// Stacy gives you more apples
  console.log(stacys);// (the parameter `stacys`)

 return apples;// Return the total number of apples you have.

};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  //var quarter = 0.25;// You find a quarter.

  //quarter = quarter - 0.10;// Then you spend a dime on old fashioned candy.
  //var quater = 15;  How much money do you have now?
  var totes= "$" + ( 0.15 + change );
  // Use type coercion to turn your pocket change into a string. Add a dollar
  // sign to the beginning.

  return totes;// Return that string.

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( truDat, two ) {
  var newt = 2;
  var constitution = two+2;
  truDat += "2";
  var music = newt + constitution + truDat + two;
  return music;
};

/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
  return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  recombobulate();
  setPowerLevel(9001);
  cornTortilla("chicken", "queso", "bacon", "lime");// Your work here
  
};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  console.log();// Output something to the console.

};

// Console 2
Exer.console2 = function ( printme ) {

  console.log(printme);// Print the parameter `printme` to the console.

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  console.log('The magic word is "'+data+'"');// your answer here

};

// Console 4
Exer.console4 = function () {

  console.log("Mariah", "Carey");// Use comma-separated values to output two things to the console with one
  // call.

};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  console.log(x);// Output the first parameter `x` to the console.
  return y + 1;// Make the function return the parameter `y` plus 1.

};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  console.log(magicFunc());
  // your work goes here

};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

   return magicFunc();
  // your work goes here

};

// Return 3
Exer.return3 = function () {

  var pink = strShift('abczABCZ');
  console.log(pink);// Call `strShift` with the argument "abczABCZ". Log the result.
  return pink + 123;// Return that same result with "123" concatenated to the end.

};
// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {

 console.log ("" + magicFunc() + magicFunc());// your work goes here

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  
  var x = strShift('abcABC123!@#');// Declare and initialize a variable for the first string.

 var y = strShift(strShift('a S d F j K l'));
  // Declare and initialize a variable for the second string.
  

 return strShuffle(x,y);// A return statement.

};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

  return prompt("What is the answer to the meaning of life, the universe, and everything?");

  // Your work here

};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

  return confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!"); // Your work here

};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  var thenumber = Number(prompt('5'));// Use prompt to get a number from a user

  console.log('5');// Print that number to the console

};

// Control 2
Exer.control2 = function ( bar ) {

  var foo;// Declare a variable named `foo`.

  foo = 'hello';// Initialize `foo` with a string.

  console.log('foo');// Log `foo` to the console.

  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
  var ding = bar + 'foo' + bar;
 
  // Call `strReverse` and pass it `ding` (as an argument).
  var quux = confirm(strReverse(ding));

  // Send the result to the user in a confirm window.

  // Save the user's response in a new variable called `quux`.

  // Return the opposite of `quux`.
  return !quux;

};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

  console.log( "Welcome to Camelot!" );

  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.
if (!isSerious){
  console.log("On second thoughts, let's not go to Camelot. It is a silly place.");
}
};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  // Then output:
  //     Hermit crab warning!
  if (temperature >= 70){
  console.log('Hermit crab warning!');
}
  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.

else{
  console.log('Catch of the day: influenza, $14/lb.');
}
  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!
  console.log('Thanks for visiting Pier One and Three Quarters!');
};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  var luckyNumber = 7;// Declare and initialize `luckyNumber`

  // If the length of `whatDay` is 6 or less...
  if(whatDay.length <= 6){
    luckyNumber += "!";
  }

  // If `whatDay` is "Mannersday"...
if(whatDay === "Mannersday"){
  luckyNumber += 4;
}
  // If `whatDay` is "Foosday"...
  else if(whatDay === "Foosday"){
    luckyNumber += 2;
  }

  // If `whatDay` is "Heyday"...
else if (whatDay === "Heyday"){
luckyNumber += luckyNumber.charAt(0); 
}
  // Otherwise...
  else{
    luckyNumber = Infinity;
  }
return luckyNumber; // Return `luckyNumber`

};

// Conditional 4
Exer.condition4 = function () {

  var number = prompt("Enter today's date, please.");// Prompt the user

  if(isNaN( number )){
    console.log("What do you think this is, bub? Wonderland?");
  }
  else{
     if(number <1){
      console.log("Negativelaaaaaaand~!");
    }
    else if(number>31){
      console.log("Are they paying you overtime for this?");
    }
    else if(number >= 29 && number <= 31){
      console.log("I sure hope it isn't February.");
    }
    else{
      console.log("Did you know? There are exactly " +  number  + " ways to make today awesome!");
    }

  }
  /// If the user's input is not a number...
  // Otherwise...
    // If the user's input is less than 1...
    // If the user's input is greater than 31...
    // If the user's input between 29 and 31, inclusive...

    // Otherwise...
};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {

  var sheep = 10;
  while(sheep >= 1) {
    console.log(sheep + " sheep");
    sheep = sheep - 1;
    }
};
/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {
  var deadWitch = "I'm melting!";
  console.log( deadWitch );
  console.log( deadWitch.substr(2) );
  console.log( deadWitch.substr(4) );
  console.log( deadWitch.substr(6) );
  console.log( deadWitch.substr(8) );
  console.log( deadWitch.substr(10) );
  console.log("What a world!");
};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
  var number = 0;
  do {
    console.log(number % 3);
    number = number + 1;
  } while (number < 6);
};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
    var trainNum = 1;
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
    console.log("Train# " + trainNum++ + ": In flight!?");
  };
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
  var firstName = "Zachery";
  var lastName = "Moneypenny";
  if(firstName === "Zachery") {
    lastName = "Johnson";
  }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
    var firstName = "Penny"; 
    var lastName = "Moneywhistle"; 
    if(firstName === "Penny") { 
        lastName = "Johnson"; 
    }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {
  console.log("...");
  console.log("    ...AA");
  console.log("        ...AAAA");
  console.log("            ...AAAAAA");
  console.log("                ...AAAAAAAA");
  console.log("                    ...AAAAAAAAAAH!");
};

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {
  for( var Slim = 0; Slim < 2; Slim++){
    console.log("Hi!");
    for(var Shady = 0; Shady < 3; Shady++) {
      console.log("My name is");
    }
    console.log("Slim Shady");
  }
}
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

    var min = 5;
    var start = 20;
    for( var index = start; index >= min; index --){
      if( index % 2 === 0) {
       console.log(index, "even");
    } else {
      console.log(index, "odd");
    }
  }
 // Your work here

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {
    break;
  }

};

// Breaking 2
// Every time theatre.next() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  kiwis *= 4;// Quadruple kiwis.

  kiwis -= 2;// Reduce kiwis by 2.

  kiwis /= 2; // Halve kiwis.

  kiwis += " handsomely hirsute kiwis";// Concatenate " handsomely hirsute kiwis" to kiwis.

  return kiwis;// Return kiwis.

};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo++ ) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

  switch(animal){
    case "cow":
      output += "foo";
      break;
    case "sheep":
      output += "bar";
        break;
    case "duck":
       output += "quux";
        break;
    default:
      output += "ring-a-ding-ding-dingding-ding-a-ding-ding";
      break;
  }

  // "cow": "foo"

    // "sheep": "bar"

    // "duck": "quux"

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"

  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; I < happyCat.length; index++) {
    if (index % 4 == zero) {
      console.log(happyCat);
    }
  }

};
/* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {
    if ( missiles ) {
      // missiles.launch();
    } else {
      cower();
    }
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2); //bandits!
       
    }
  }
// wheat
};

Exer.comments2 = function () {

  /* 
    

  */
  

};
