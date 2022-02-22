![alt text](logo.png)
<br><br>

> ## ***Day 1: 14/02/22***

# Comments in JS
### // is for Single line comments
***Ctrl+/*** : Convert the selected line to single line comment  
```JavaScript
//this is a single line commenta
```
<br>

### /* */ is for Multi-line comments  
***Shift+Alt+A*** : Toggle block comment[multi-line]
Shortcut for comments in VS Code:  
```JavaScript
/*  
Hi this is not a code  
This is and example of Multi-line Comment  
*/
```
<br>

# Data Type in JS
- var: global
- let: local
- const: constant
<br>

# Variable names
Cases Used to define Variables  
- Flat Case : If the variable name is only one word  
- Lazy Case : Same as Flat Case  
- Dash Case : Used in CSS, URLs  
- Camel Case : Used in C#, JAVA, JavaScript  
- Pascal Case : Title Case words joined. Used to name Classes  
- Snake Case : Used in languages like C/C++, Python, and other low-level languages. To name files as well.
<br>

# Operators
- =       : Assignment operator  
- ==      : Equality operator  
- ===     : Strict equality operator  
- \<==     : Strictly lesser than operator  
- \>==     : Strictly greater than operator  
- !==     : Strictly not equal to  
<br>

> ## ***Day 2: 16/02/2022***

# Booleans
Consists of a *0* or *1*, *on* or *off*, *true* or *false*, etc.
### Boolean() : Class to convert values to boolean
<br>

# Numbers
All kinds of numbers without decimal point  
- parseInt() : Converts string->number. It is used in user input since sometimes user may input a number along with some extra string unintentionally like 21 with a space or comma.. parseInt() will consider only the numeric part and stores it inside
- Number() : It converts any convertible value to number otherwise returns NaN
<br>

# Float
Numbers with decimal point  
- Math.ceil() : Considers the upper value [1.27 = 2]
- Math.floor() : Considers the lower value [1.72 = 1]
- Math.round() : Rounds the number[1.5 = 2]
- Math.random() : returns a random number between given range  
<br>

# String
- string_var.split(delimeter) : splits the string from wherever the deleimeter is present and finally returns an array containing the separated values in string format. Used in social media tags.
- string_var.replace(value1, value2) : value1 is what to be replaced, value2 replaces value1 once
- string_var.replace(value1, value2) : value1 is what to be replaced in regex format [/value1/g], value2 replaces all value1
- string_var.repeat(integer) : to repeat the string value given integer number of times
- string1.concat(string2) : Joins string2 at the end end of string1
- string_var.includes(value) : Check if a string includes the value given as the argument
<br>

# Tempale Literals
### Syntax:
```JavaScript
`${var}`
```
Inside-->Outside    
First the expression inside ${} part is executed then the normal strings is read  
\` called as Backtick, found below Escape Button.
<br>
<br>

> ## ***Day 3: 18/02/2022***

# Functions
### Traditional Method  
```JavaScript
//Creating a Function
function functionName() {
    //function body
    //your code
    //logical statements
}
/* 
funtion     : keyword to declare the function
functionName: name of the function with parenthesis()
*/
```
<br>

# Calling a Function
```JavaScript
functionName()
/* 
When the function is called the body of that function runs
The function will run only when it is called
*/
```
<br>

# Function Parameters
```JavaScript
function greet(naam) {
    console.log(`Hello ${naam}`)
}
greet('Ankit')  //Hello Ankit
greet(6)        //Hello 6
greet(6.25)     //Hello 6.25
greet()         //Hello undefined

function greet1(naam='JavaScript') {
    console.log(`Hello ${naam}`)
}
greet1('Ankit')  //Hello Ankit
greet1()         //Hello JavaScript

/*
Extras:
When you are creating/defining the function the values inside the function parenthesis is called parameter [formal parameters]
When you are calling the function the parenthesis values are called arguments [actual paramenters]
*/
```
<br>

# Return Statement
These are used to return a single value when a function execution is finished.. Basically this is the value of the function
### Syntax:  
```JavaScript
return someValue//inside a function
``` 
<br>

# Function as a Variable
```JavaScript
const functionName_inTHeFormOf_variable = function(parameter){
    //function body
}
greet()//calling the function
const greet = function(naam) {
    console.log(`Hello ${naam}`)
}
greet('Ankit')//calling the function with argument
```
<br>

# Arrow Functions
```JavaScript
//empty function
const greet = () => {}

//print Hello value passed
const greet = (naam) => {
    console.log(`Hello ${naam}`)
}

//print Hello value and abcd as well
const greet = naam => {
    console.log(`Hello ${naam}`)
    return 'abcd'
}

//returns Hello value when greet is called
const greet = naam => `Hello ${naam}`
```
<br>

# Arrays
Arrays in JS behave as a dynamic collection of heterogenous data since JS contains loosely typed data
```JavaScript
const array = ['Hello', 'Javascript', '🍎', '🐧', 21]
//printing the array
//['Hello', 'Javascript', '🍎', '🐧', 21]
console.log(array)

let value = '🍍'
//adding an element at the ending
//['Hello', 'Javascript', '🍎', '🐧', 21, '🍍']
array.push(value)

//adding an element at the beginning
//['👌', 'Hello', 'Javascript', '🍎', '🐧', 21, '🍍']
value = '👌'
array.unshift(value)

//print every elements in an array
array.forEach(function(element){
    console.log(element)
})
array.forEach(element => console.log(element))//arrow function for the same

//print every element along with its index
array.forEach((element, i) => {
    console.log(element, i)
})

//checks whether an element is present in the array or not and returns it when first occurence is found..
//find() returns the value if found otherwise undefined is returned
const found = array.find( element => return element == '🍎')
const found = array.find( element => return typeof element == 21)

//print the index of an element
array.indexOf(found)//returns the index of the first occurence of the element found
//returns all the true value in the form of an array
const found = array.filter( element => return typeof element == 21)

//map() is used as modified version of forEach() which can return values
array.map( element => return element+'🌼')

//to convert n dimensional array to n-1 array
console.log(array.flat(1))
//to convert n dimensional array to n-2 array
console.log(array.flat(2))
//to convert n dimensional array to 1d array
console.log(array.flat(Infiniity))

//to remove the last element of an array and modify the array
array.pop()
console.log(array.pop())//pops the last element and returns that element which is logged

//to remove the first element and modify the array
array.shift()
console.log(array.shift())//removes the first element and returns that element which is logged

//to reverse an array
array.reverse()
```
<br>
