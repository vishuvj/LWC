// Array Destructuring

let companies =["Google", "Amazon", "Microsoft"];
/*
This is old process or it's a lengthy process
let company1=companies[0];
let company2=companies[1]; */

let [company1, company2]=companies
console.log(company1)
console.log(company2)

// Object destructuring
let options = {
    title:"Zero to hero",
    age:23,
    type:"CRM"
}

/*
You can use this 
var title=options.title
var age= options.age */

// you can also use this. this is short method 
let{title, age,type}=options
console.log(title)
console.log(age)
console.log(type)


// String interpolation
// use back tick for string interpolation ``
console.log("String interpolation")

var name="Vishal"
var age1=25
var role="Software developer"

console.log("My name is "+name + " age "+age +" role is "+role) // this is old method to Concatenation

console.log(`My name is ${name} and age is ${age} and the role is ${role}`)

// String method
console.log("String Methods")

/* 
includes() = The includes() method determines whether  a string contains the characters of a specified string.
it's give the value in boolean true or false
*/
let str="Hello guys doing i hope your are doing good"

let check=str.includes("hope")
console.log(check)

/*
indexOf() = the indexOf() method returns the position of the first 
occurrence of a specified value in a string. and it's alway check first.
and if it return -1 means that string/word not available in the string.
*/
let index=str.indexOf("doing")
console.log(index)

/* 
startsWith() = The startsWith() determines whether a string begins with the 
characters of a specified string.
*/
console.log(str.startsWith("Hello"))

/* 
slice()= method extracts parts of a string and returns the extracted parts
in a new string.
slice(startwith, endwith)
*/

let newStr=str.slice(0,5)
console.log(newStr)

/* toLoweCase() and toUpperCase()*/
let x="My name is VishAl"
console.log(x.toLowerCase())
console.log(x.toUpperCase())

/* trim() - removes whitespace from the both side of a string*/
let searchText="      Salesforce    "
console.log(searchText)
console.log(searchText.trim())