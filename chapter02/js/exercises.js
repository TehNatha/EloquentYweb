/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return /* your answer here */ ("got it");

};

// Statements 1
Exer.statements1 = function () {

  // Write a statement that is not undefined.
  5 === 5;
  
};

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  // Write a statement that declares a variable.d
  // Return that variable.
  var x;
};

// Variables 2
Exer.variables2 = function () {

  // Write a statement that declares a variable.
  // Write a statement to assign a number value to your variable.
  var hi = 5;

  // Return the variable.
  return hi;
};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.
var string = "";
  // Return the variable.
return string;
};

// Variables 4
Exer.variables4 = function ( n ) {

  // Return the parameter.
return n;
};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.
var newV = n;
  // Return the new variable.
  return newV;

};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)
  var apples = 3;
  // Stacy gives you more apples
  // (the parameter `stacys`)
  var total = apples + stacys;

  // Return the total number of apples you have.
  return total;
};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.
  change += 0.25;
  change -= 0.10;
  // Then you spend a dime on old fashioned candy.
  // How much money do you have now?
 
  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.

  // Return that string.
  return  "$" + change; 
};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( param1, two ) {
  var duece = 2;
  var foPiece = two+2;
  param1 += "2";
  var result = duece + foPiece + param1 + two;
  return result;
};



/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
   //return document;
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
  setPowerLevel(9500);
  cornTortilla("chicken", "queso", "bacon", "lime");
};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  // Output something to the console.
console.log("go green and gold");
};

// Console 2
Exer.console2 = function ( printme ) {

  // Print the parameter `printme` to the console.
  console.log(printme);

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  // your answer here
  console.log("The magic word is \"" + data + "\"");
};

// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.
  
console.log(4, 5);
};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.
  console.log(x);

  // Make the function return the parameter `y` plus 1.
 return y + 1;
};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  // your work goes here
  magicFunc();
  console.log(magicFunc());

};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  // your work goes here
  magicFunc();
  return magicFunc();

};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.
   var result = strShift("abczABCZ");
   console.log(result);
  // Return that same result with "123" concatenated to the end.
  return result + "123";
};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {
 
  // your work goes here
  console.log(magicFunc() + magicFunc());


};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  // Declare and initialize a variable for the first string.
  var firstShift = strShift("abcABC123!@#");
  // Declare and initialize a variable for the second string.
  var secondShift = strShift(strShift("a S d F j K l"));
  // A return statement.
  return strShuffle(firstShift, secondShift);
};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {
  return prompt("What is the answer to the meaning of life, the universe, and everything?");
};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {
  return confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");
};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user
var number = prompt("give me a number");
  // Print that number to the console
  console.log(number);
};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.
  var foo;

  // Initialize `foo` with a string.
  foo = "";
  // Log `foo` to the console.
  console.log(foo);

  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
  var ding = bar + foo + bar;
  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.
  var quux = confirm(strReverse(ding));
    // Return the opposite of `quux`.
    return !quux;

};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {
    if(isSerious === false){
      console.log("On second thoughts, let's not go to Camelot. It is a silly place.")
    };


  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.

};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  if(temperature >= 70){
    console.log("Hermit crab warning!");

  }else {
    console.log("Catch of the day: influenza, $14/lb.");
  };
  // Then output:
  //     Hermit crab warning!

  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.

  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!
console.log("Thanks for visiting Pier One and Three Quarters!");
};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
 /*var luckyNumber = 7;
  // If the length of `whatDay` is 6 or less...
    if(whatDay.length <= 6) {
      whatDay + "!";
    } else if(whatDay === "Mannersday"){
      whatDay + 4;
    } else if(whatDay === "Foosday");{
      luckyNumber + 2;
    } else if(whatDay === "Heyday"){
      luckyNumber + l;
    } else {
      luckyNumber = Infinity;
    }
    return luckyNumber;*/

  // If `whatDay` is "Mannersday"...
  // If `whatDay` is "Foosday"...
  // If `whatDay` is "Heyday"...
  // Otherwise...
  
  // Return `luckyNumber`

};

// Conditional 4
Exer.condition4 = function () {

  // Prompt the user

  // If the user's input is not a number...
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
  console.log("10 sheep");
  console.log("9 sheep");
  console.log("8 sheep");
  console.log("7 sheep");
  console.log("6 sheep");
  console.log("5 sheep");
  console.log("4 sheep");
  console.log("3 sheep");
  console.log("2 sheep");
  console.log("1 sheep");
};

// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {
  var deadWitch = "I'm melting!";
  while(deadWitch.length > 0) {
    console.log(deadWitch);
    deadWitch = deadWitch.substr(2);
  }
  console.log("What a world!");
};

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
  console.log(0);
  console.log(1);
  console.log(2);
  console.log(0);
  console.log(1);
  console.log(2);
};

// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
  var trainNum = 1;
  do {
    console.log("Train# " + trainNum + ": In flight!?");
  } while (trainNum++ < 7);
};

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
var firstName = "Zachery"; var lastName = "Moneypenny"; if(firstName === "Zachery") { lastName = "Johnson"; }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
var firstName = "Penny"; var lastName = "Moneywhistle"; if(firstName === "Penny") { lastName = "Johnson"; }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

    // "cow": "foo"

    // "sheep": "bar"

    // "duck": "quux"

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"

  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/*------------------------------    COMMENTS    ------------------------------*/
