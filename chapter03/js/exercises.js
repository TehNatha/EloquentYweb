// Chapter 3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Defining a Function    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

//=============================// wrapper:
Exer.defining = function () {  // necessary for tests
//=============================// do not remove or alter

/******************************    DEFINING 1    ******************************/
// Use a function expression to define a function named `three`.
// That function should return the value 3.



/******************************    DEFINING 2    ******************************/
// Use a function expression to define a function named `myLog`.
// `myLog` should accept one parameter named `message`.
// `myLog` should output `message` to the console with the appropriate
//     formatting.



/******************************    DEFINING 3    ******************************/
// Use a function expression to define a function named `square`.
// `square` should accept one parameter named `number`.
// The function should square the number and both log and return the result.



//==========================//
  Exer.defining1 = three;   //
  Exer.defining2 = myLog;   //
  Exer.defining3 = square;  //
}; //=======================//

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^    Parameters and Scopes    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// 1. Create a function named spaceCubeDetector.
// 2. It should accept a length, width,
//    and height.
// 3. When its length, width, and height are all equal, it should return the
//    string value "SPACE CUBE DETECTED!!"
// 4. When its length, width, or height is not equal to the other parameters
//    it should return the string value "THIS IS NO SPACE CUBE!"
Exer.parameters1 = function() {

 };

// Given spaceCubeDetector:
// 1. Run it once with a length of 3, width of 5, and height of 3.14159265359
//    and log its return.
// 2. Run it once with a length of 7, width of 7, and height of 7 and log its
//    return.
// 3. Run it once with a length of 1, width of 2, and height of 3 and log its
//    return.

Exer.parameters2 = function(spaceCubeDetector) {

};


/*
  For Scope exercises 1-5 go through the following code and find the values for
  the variables where noted by the comments. Place the corresponding values as
  returns for the functions Exer.scope[1-5]. Hint: The comments are numbered in
  the order that their lines are run.
*/
Exer.scopeExample = function() {
  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log(foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log(quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log(quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log(quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();
};

// Place answers as returns in the following functions.
Exer.scope1 = function() {
  return ;// return value for Scope 1
};

Exer.scope2 = function() {
  return ;// return value for Scope 2
};

Exer.scope3 = function() {
  return ;// return value for Scope 3
};

Exer.scope4 = function() {
  return ;// return value for Scope 4
};

Exer.scope5 = function() {
  return ;// return value for Scope 5
};



/*****************************    Nested Scope    *****************************/
Exer.nestExample = function() {
  var foo = 2;
  var bar = 5;
  var quux = 7;

  var nest = function(foo) {

    var bar = 11;

    var finch = function(foo) {
      console.log(foo); // Nest 8: What value of foo is logged?
      bar = foo;
      quux = foo;
    };

    console.log(bar); // Nest 4: What value of bar is logged?
    console.log(quux); // Nest 5: What value of quux is logged?

    var robin = function() {
      var bar = 13;
      quux = bar;
      console.log(quux); // Nest 11: What value of quux is logged?
    };

    console.log(bar); // Nest 6: What value of bar is logged?
    console.log(quux); // Nest 7: What value of quux is logged?

    var batman = function() {
      foo = 0;
      bar = 0;
      quux = 0;
      return "I AM THE NIGHT!!";
    };

    finch(17);

    console.log(bar); // Nest 9: What value of bar is logged?
    console.log(quux); // Nest 10: What value of quux is logged?

    robin();

    console.log(quux); // Nest 12: What value of quux is logged?

    if (batman()) {
      console.log(foo); // Nest 13: What value of foo is logged?
      console.log(bar); // Nest 14: What value of bar is logged?
      console.log(quux); // Nest 15: What value of quux is logged?
    }
  };

  console.log(foo); // Nest 1: What value of foo is logged?
  console.log(bar); // Nest 2: What value of bar is logged?
  console.log(quux); // Nest 3: What value of quux is logged?

  nest(5318008);

  console.log(foo); // Nest 16: What value of foo is logged?
  console.log(bar); // Nest 6: What value of bar is logged?
  console.log(quux); // Nest 6: What value of quux is logged?
}

/*************************    Functions as Values    **************************/
// Nate

/*************************    Declaration Notation    *************************/
// Annalise

/****************************    The Call Stack    ****************************/
// Nate

/**************************    Optional Arguments    **************************/
// Annalise

/*******************************    Closure    ********************************/
// Nate

/******************************    Recursion    *******************************/
// Annalise

/**************************    Growing Functions    ***************************/
// Nate

/**********************    Functions and Side Effects    **********************/
// Annalise
