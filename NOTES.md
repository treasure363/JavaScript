> ### ***Day 1: 14/02/22***
<br>

# Comments in JS
### // is for Single line comments  
***Ctrl+/***        : Convert the selected line to single line comment  
Eg: //this is a single line commenta  

### /* */ is for Multi-line comments  
***Shift+Alt+A***: Toggle block comment[multi-line]
Shortcut for comments in VS Code:  
Eg: /*  
Hi this is not a code  
This is and example of Multi-line Comment  
*/
<br>

# Data Type in JS
### var: global  
### let: local  
### const: constant
<br>

# Variable names
Cases Used to define Variables  
Flat Case : If the variable name is only one word  
Lazy Case : Same as Flat Case  
Dash Case : Used in CSS  
Camel Case : Used in C#, JAVA, JavaScript  
Pascal Case : Title Case words joined. Used to name Classes  
Snake Case : Used in languages like C/C++, Python, and other low-level languages. To name files as well.
<br>

# Operators
=       : Assignment operator  
==      : Equality operator  
===     : Strict equality operator  
<==     : Strictly lesser than operator  
\>==     : Strictly greater than operator  
!==     : Strictly not equal to  
<br>

> ### ***Day 2: 16/02/2022***
<br>

# Booleans
Consists of a *0* or *1*, *on* or *off*, *true* or *false*, etc.
### Boolean() : Class to convert values to boolean
<br>

# Numbers
All kinds of numbers without decimal point  
### parseInt() : Converts string->number. It is used in user input since sometimes user may input a number along with some extra string unintentionally like 21 with a space or comma.. parseInt() will consider only the numeric part and stores it inside
### Number() : It converts any convertible value to number otherwise returns NaN
<br>

# Float
Numbers with decimal point  
### Math.ceil() : Considers the upper value [1.27 = 2]
### Math.floor() : Considers the lower value [1.72 = 1]
### Math.round() : Rounds the number[1.5 = 2]
### Math.random() : returns a random number between given range  
<br>

# String
### string_var.split(delimeter) : splits the string from wherever the deleimeter is present and finally returns an array containing the separated values in string format. Used in social media tags.
### string_var.replace(value1, value2) : value1 is what to be replaced, value2 replaces value1 once
### string_var.replace(value1, value2) : value1 is what to be replaced in regex format [/value1/g], value2 replaces all value1
### string_var.repeat(integer) : to repeat the string value given integer number of times
### string1.concat(string2) : Joins string2 at the end end of string1
### string_var.includes(value) : Check if a string includes the value given as the argument
<br>

# Tempale Literals
### `${var}`  
Inside-->Outside    
First the expression inside ${} part is executed then the normal strings is read  
` --> Backtick, found under 
<br>

