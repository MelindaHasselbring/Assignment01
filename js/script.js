// Exercises 1  Convert the following identifiers to Camel Case notation:
var someMonth;
function theMonth();
var currentMonth;
var summerMonth;
var myLibraryFunction;


// Exercise 2 Give me an example of the ff.
// a.) numeric literal expression
3.14  

// b.) string literal expression
"Melinda Hasselbring"

// c.) Boolean literal expression

true
false


// d.) null literal expression
null



// Exercises 3 Give me two examples of complex / variable expressions.
    var GtandTotal = (totalAmount + tax)/4;
    var x = "child" + 16;



// Exercise 4.	Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

var strFirstName;
var strLastName;
var strAddress;
var strCity;
var strState;
var strZipCode;
var numYourAge;
var strReferralSource;
var strMayWeContactYou;



// Exercise 5.	Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.
    strFirstName = "Melinda";
    strLastName = "Hasselbring";
    numYourAge = 37;


// Exercise 6.	Create a variable. 
// Add a number and a string and display the coerced result in the browser’s console window. 
    strAddress = 2017 + "Burgener Blvd.";

// output:
    "2017 Burgener Blvd."

// Exercises 7.	Create two variables. 
// For the first variable, add a Boolean and a string and display the coerced result. 
var year = 2019;
var isYearOfThePig == true;
window.console.log(year + " is year of the pig.");

// output:
"2019 is year of the pig."

// For the second variable, add a number and a Boolean and display the coerced result. 

var x = 0;
Boolean(x); 

// output:
false
// Exercises 8.	Is the following string literal valid? If not, how would you fix it?

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);
// Ans: No, by using the  backslash escape character.
'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';


// Exercises 9.	Create a variable that produces a null value in the console window. 
// Create a variable that produces an undefined value in the console window.
// by explicitly assigning a null value in the variable.
var x = 200;
var y = null;
x = null;

window.console.log(x);
window.console.log(y);


// Exercises 10.	Use the typeof operator on various literals to return the following types within the console window: 
// string, 
typeof "Melinda";

// number, 
typeof 2019;

// Boolean, 
typeof true;

// object, and 
typeof new Date();

// undefined.
typeof myAddress;



// Exercises 11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 

// Hello Zak Ruvalcaba, welcome to the JavaScript class!
    
    alert("Hello " + "Melinda Hasselbring" + ", welcome to the JavaScript class!")
    

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.


// STEP 12.	Declare a variable called name and set it equal to your name. 
// Substitute your name in the previous alert string with the variable instead.

 var name = "melinda Hasselbring";
 alert("Hello " + name  + ", welcome to the JavaScript class!");


// STEP 13.	Declare a variable called course and set it equal to “JavaScript”. 
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

 var course = “JavaScript”;
 alert("Hello " + name  + ", welcome to the " + course + " class!");

// Exercise 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

  alert("Hello " + "Melinda Hasselbring. \nWelcome to the " + course + " class!");



// Exercise 15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

var name = prompt("What is your name?", name);


// Exercise 16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

var course = prompt("What course are you taking?", course);


// Exercise 17.	
// Assign the value 10 to x on a new line. 
// Assign the value 20 to y on a new line. 
// Display the sum of those two numbers in the console window. 

var x = 10;
var y = 20;
var total = x + y;
window.console.log(total);

// output : 30


// Exercise 18.	
// Declare a variable called x and assign it a value of 20. 
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

var x = 20;
x = x+20;
window.console.log(x);

// output : 40




// Exercise 19.	
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window. 
// The result should be 100.

var x = 20;
x *=5;
window.console.log(x);

// output : 100

// Exercise 20.	
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window. 
// The result should be 2. If you got 6.66 try again.

var x = 20;
var y = 3;

x = x % y;
window.console.log(x);



// Exercise 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

var a =2;
var b =2;
window.console.log(a == b);


// Exercise 22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

var a =2;
var b =2;
window.console.log(a != b);


// Exercise 23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.
var widget = new Object();
console.log(typeof widget);


// Exercise 24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

console.log(widget instanceof object);

// Exercise	25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

console.log(object instanceof widget);
