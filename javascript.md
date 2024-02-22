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
