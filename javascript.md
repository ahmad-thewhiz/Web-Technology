# JavaScript
## JavaScript is a programming language that is used to make web pages interactive. It is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

## Applications of JavaScript
- Client-side validation
- Dynamic content update
- User interface control

## JavaScript Function
JavaScript Function is a block of code designed to perform a particular task. There are mainly two advantages: 1. Code reusability 2. Code optimization

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Syntax:
function functionName (arg1, arg2, ... argN) {
  // arguments can be 0 or more
  // code to be executed
}

### Funtion Invocation
The code inside the function will execute when "something" invokes (calls) the function:
- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

### Function Object
The purpose of Function Constructor is to create a new Function Object. It executes the code globally. However, if we call the constructor directly. a function is created synamically but in an unsecured way.

## JavaScript Array
JS Array is an object that represents a collection of similar type of elements. It is used to store multiple values in a single variable.

There are 3 ways to construct array in JS:
1. By array literal
2. By creating instance of Array directly (using new keyword)
3. By using an Array constructor (using new keyword)

Syntax:
var array_name = [item1, item2, ...]; # Path: python.md
var arr = [1,2,3,4]

## JavaScript String
The JS String is an object that representes a sequence of characters. It is used to store and manipulate text.

There are 2 ways to create string in JavaSript
1. By string literal
2. By string object (using new keyword)

1. By String Literal
<script>
  var str = "Hello World!";
  document.write(str);
</script>

2. By String Object (use new keyword)
The syntax of creating string object using new keyword is given below:
var str = new String("Hello World!");

Here, new keyword is used to create instance of string.
Example:
<!DOCTYPE html>
<html>
<body>
<script>
  var str = new String("Hello World!");
  document.write(str);
</script>
</body>
</html> 

## Difference between compiler and interpreter
Compiler and Interpreter both are used to execute a program written in a high-level language. The main difference between compiler and interpreter is that the compiler converts the whole high-level program code into machine code at once while the interpreter converts the high-level program code into machine code line by line. Example of compiler based language is C and C++. Example of interpreter based language is Java and Python.
executable file - .exe
byte code - .class

## console log
The console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). Log is used to print the output in the console.

* console.log() - This method is used to log the output to the console.
* document.write() - This function used to write the output to the document.

## Regular Expression (regex) pattern matching in JavaScript
A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for. A regular expression can be a single character, or a more complicated pattern. Regular expressions can be used to perform all types of text search and text replace operations.

* Creating Regular Expression
There are two ways to create a regular expression:
- Using a regular expression literal, which consists of a pattern enclosed between slashes
- Using the RegExp constructor function
for example:
var pattern1 = new RegExp("hello");
or
var pattern2 = /hello/;

## Searching for Patterns
The search() method searches a string for a specified value and returns the position of the match. The search value can be string or a regular expression. This method returns -1 if no match is found.
for example:
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

## Replacing Patterns
The replace() method replaces a specified value with another value in a string. The replace value can be string or a regular expression. The original string is left unchanged. This method does not change the original string.
for example:
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

## Modifiers
Modifiers are used to perform case-insensitive and global searches. Modifiers are used with regular expression. The following table lists the modifiers:
Modifier	Description
i	Perform case-insensitive matching
g	Perform a global match (find all matches rather than stopping after the first match)
m	Perform multiline matching
for example:
var str = "Visit W3Schools!";
var n = str.search(/w3schools/i);

* these methods can be used to extract the data from the string and perform the operations on the string.

