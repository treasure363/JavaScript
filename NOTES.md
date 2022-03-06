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

> ## ***Day 4: 21/02/2022***

# Loops

### `for in loop`
```JavaScript
for (const num in array){
    //num = 0, 1, 2, 3, 4, 5....
    console.log(array[num])
}

//to update the value in array
for (const num in array){
    array[num] = array[num]+'🧟'    
}
console.log(array)
```
<br>

### `for of loop`
```JavaScript
for (const num of array){
    //num= element at index 1, element at index 2, element at index 3.....
    console.log(num)
}

//to also track the index of the elements as well
let index = 0
for (const num of array){
    index = array.indexOf(num)
    console.log(`${num} : ${index}`)
}

//to update value at an index using for of
let index = 0
for (const num of array){
    index = array.indexOf(num)
    array[index] = num + '🧟'
}
console.log(array)
```
<br>

# Iterating over string
```JavaScript
const naam = 'Hello World!' 
for (const i in naam){
    console.log(naam[i])
}
for (const charAtIndex of naam){
    console.log(charAtIndex)
}
```
<br>

> ## ***Day 5: 23/02/2022***

# If Condition
```JavaScript
//syntax
if (test condition) {
    true block
    statements
}
//or
if (test condition) {
    true block
    statements
} else {
    false block
    statements
}

//example
const lang = 'JavaScript'
console.log(lang == 'JavaScript')//true
console.log(lang == 'Javacript')//false
if (lang == 'JavaScript') {
    console.log(`${lang} is 😍`)//lang needs to be JavaScript to run this line
} else {
    console.log(`${lang} is 🤷‍♂️`)//this line will run when lang is not JavaScript
}
```
<br>

# Else-If Ladder
```JavaScript
const lang = 'JavaScript'
//syntax
console.log(lang == 'JavaScript')//true
console.log(lang == 'Javacript')//false
if (lang == 'JavaScript') {
    console.log(`${lang} is 😍`)//lang needs to be JavaScript to run this line
} else if (lang == 'Python') {
    console.log(`${lang} is 🐍`)//lang needs to be Python for this line to be executed
} else {
    console.log(`${lang} is 🤷‍♂️`)//this line will run when lang is not JavaScript
}
```
<br>

# Switch Case:
```JavaScript
//syntax
switch(variable) {
    case #1: true block
            break
    case #2: true block
            break
    ..
    ..
    ..
    default: default block
            break
}

//example
const lang = 'JavaScript'
switch (lang) {
    case 'JavaScript':
        console.log(`${lang} is 😍`)
        break
    case 'Python':
        console.log(`${lang} is 🐍`)
        break
    default:
        console.log(`${lang} is 🤷‍♂️`)
        break
}
```

Extras:
computation in switch happens only once
in if every time condition is checked and referenced if variables are used
hence switch is faster than if
in switch the variables passed is read only once.. but in if else the variables is read as many times as it is used
<br>

# While Loop
```JavaScript
//syntax
while(test condition) {
    loop body
    updation of control variable
}

//infinite loop to break js
while (true) {
    console.log('broken!')
}

//ice cream
let ice = ''

while (ice != '🍧🍧🍧🍧') {
    ice += '🍧'
    console.log(ice)
}

//same code in for loop
ice = ''
for (let i=0; i < 4; ++i) {
    ice += '🍧'
    console.log(ice)
}
```
<br>

# Dates
How is time calculated in computer?
It is calculated using UNIX Epoch and the unit is ns or ms 
On Jan 1st 1970 computers started to track time, b4 that computer didn't know time..
int epoch = 0; [on all OS this was done]
for every single ms it was updated by 1, basically 1 tick at a time
this way we track time
Click here to know the current [Epoch](https://www.unixtimestamp.com/index.php)
```JavaScript
const d = new Date()        //date is a class and is initialzied
console.log(d)              //print the object
console.log(d.toString())   //print the current date time timezone
console.log(d.getHours())   //24hrs format
console.log(d.getHours()-12)//12hrs format
//if hrs>12 PM hrs<12 AM
console.log(d.getMinutes())
console.log(d.getMilliseconds())
console.log(d.getMilliseconds())
console.log(d.getFullyear())

//setInterval(): to repeat a particular block of code/function at the particular interval of time
//syntax
setInterval(function to perform, after x milliseconds)

//example
setInterval(() => {
    console.log('hello')
}, 1000)

//loading particular date as an object, need to pass epoch or exact date values
const d = new Date(2005, 6, 16, 6, 22, 20, 20)
const d = new Date(epoch value milliseconds one)
```
<br>

> ## ***Day 6: 25/02/2022***

# JSON Objects
JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a common data format with diverse uses in electronic data interchange, including that of web applications with servers.  
In short they are (key, value) pairs, values can be accessed by knowing the keys
```JavaScript
//comparing Arrays and JSON objects
//example1
const fruitsArray = ['🍏', '🥭', '🍎', '🍌', '🍍']
const fruitsObject = {
    greenApple: '🍏',
    mango: '🥭',
    apple: '🍎',
    banana: '🍌',
    pineapple: '🍍'
}
console.log(fruitsObject.pineapple)//order does not matter
console.log(fruitsObject['pineapple'])
console.log(fruitsArray[4])//order does not matter

//example2
const arr = ['Ravi', 21, ['javascript', 'linux'], '🍫']
const person = {
    name: 'Ravi',
    age: 21,
    interests: ['javascript', 'linux'],
    favEmoji: '🍫',
}
console.log(person)
console.log(person.name)
console.log(arr)
console.log(arr[0])

//adding new attribute to JSON Object. It can store anything just like an array
person.job = 'JS Dev'
person['gender'] = 'M'
person.interests.push['music']

//loop through individual key in an object
for (const key in person){
    console.log(key)
}

//to access the values of the keys in for in loop
for (const key in person){
    const value = person[key]
    console.log(key, value)
}
```
<br>

# Maps
Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted.
```JavaScript
//syntax
new Map([
    [key1, value1],
    [key2, value2],
    ..
    ..
    ..
    [key_n, value_n],
])

//example
const personMap = new Map([
    ['name', 'Ravi'],
    ['age', 21],
    ['interests', ['javascript', 'linux']],
    ['favEmoji', '🍫'],
    ['favColor', new Map([
        ['first', 'blue'],
        ['second', 'black']
    ])]
])

//printing map attributes
console.log(personMap)//whole map is printed
console.log(personMap.size)//5
console.log(personMap.get('name'))//Ravi
console.log(personMap.get('favColor'))//prints a map

//function chaining: basically the next function takes the input which is returned by the previous function
console.log(personMap.get('favColor').get('first'))//prints a value 

//writing to a map syntax
Array.push(value)
Object[key] = value
Map.set(key, value)
personMap('job', 'JS Dev')

//traverse through Map
//just like for object using for of is invalid, in Map we dont use for in rather we use for of
for (const keyValue in person.entries()){
    const key = keyValue[0]
    const value = keyValue[1]
    console.log(keyValue)
    console.log({key:value})
}
```

# JSON Object vs Maps
| JSON Object | Maps |  
| :---------: | :--: |  
| Objects are slightly slower | Maps are faster than object |  
| Length can't be known directly | Maps length can be known |  
| Unordered structure | Ordered Structure |  
| Can't use for of | For of is often used |  
| Pair type: (String, Anything) | Pair type: (Anything, Anything) |  
| Not that complex and used more | Can get complex and is used rarely |  
<br>
