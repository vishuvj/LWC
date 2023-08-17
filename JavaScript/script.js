
/* var keyword */
// var keyword is a global scope
// it can be updated and also can be re-declared
// var keyword two type of scope global and function
// not support block level scope

var firstName="Vishal"
console.log(firstName)
console.log("Global scope "+window.firstName)

function abc(){
    var lastName="Thakur"
    console.log(lastName)
}
abc()


//block scope 

if (2==2){
    var x=10
}
console.log("Global scope: - "+x)


/******** let keyword******/
// it can be updated and also cannot be re-declared
// let keyword support function and block level scope

let course="Zero to hero"
course="Zero to hero in udemy"
console.log("/******** let keyword******/")
console.log(course)

// console.log(window.course) /**let keyword never support global scope */
// its support function scope

function ab(){
    let x="Vishal"
    console.log(x)
}
ab() // calling function

if(3==3){
    let y="Jadon"
    console.log(y)
}
// console.log(y)// in this case y is not defined 

 

/*** const keyword****/
// it can't be updated and also cannot be re-declared
// const keyword support function and block level scope
const books="JAVA"
console.log(books)
// const books="C++" you can't re declared

function constKeyword(){
    const intValue=20
    console.log("Const keyword intValue= "+intValue)
}
constKeyword() // function call


/**Data Types */
// number
var numberDataType=12
console.log(numberDataType)
// console.log(typeof numberDataType) typeof is used to check the variable data type

//bigint
var bigInt= 10n // when u append n in variable value it should be bigInt
console.log(typeof bigInt)

// string
var name="Vishal jadon"
console.log(typeof name)

// boolean
var isMonday= true
 console.log(typeof isMonday)

// undefined
var z
console.log(typeof z)

// objects
var obj={}
console.log(typeof obj)

// array
var arr=[]
console.log(typeof arr)

// symbol
var symbolData= Symbol("id")
console.log(typeof symbolData)

// null
// if you want to assign variable value nothing than use null
var xy=10
xy=null
console.log(typeof xy)


var temp;
if(temp === undefined)
console.log("undefined example:- true");
else
console.log("undefined example:- false");


// Spread Operator ... (introduce in ES6 version)
// . Always used in calling time
// . and we use rest operator when we declare function
var spreadArr=[10,20,30] // normal array
console.log(spreadArr) 
console.log(...spreadArr) // in this line separate each value now spreadArr is not array 
console.log([...spreadArr]) // in this line cloning spreadArr 

spreadArr.push(15) // push method used to add value in the array
console.log(spreadArr) 

var spreadArr2=[40,50,60] 
var concatArray=spreadArr.concat(spreadArr2) // 

