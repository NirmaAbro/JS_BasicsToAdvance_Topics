// console.log("this lecture is about this keyword and arrow function in js ");
//this keyword current context ko refer krta ha, The this keyword in JavaScript is used to refer to the object that is executing the current function. Its main objective is to provide a way to access properties and methods of the object within the function context. 
// arrow function ma hum jab curly braces use krty hn to return keyword lagaty hn , if round braces lagaty hn to hum return keyword kuse nhi krty ,
//explicit means , koe chex completely defined ho r btaya jay , r implicit means jo chez btae bhi na digae ho but phir bhi vo kaam kryga without usko boly hoy , q k vo rules and regulations ma laready defined hoty hoty hn hum btaen ya na btaen vo kaaam krnge .

const student=()=>({
    name:"nirma",
    age: "20",
    rollno:"2k21/cse/84"

});

// console.log(student.name);
//the round braces () are used to return an object literal, and the curly braces {} are used to define the object properties within the arrow function.
// "literal" refers to a notation that represents a fixed value in code
console.log(this); //output Window {window: Window, self: Window, document: document, name: '', location: Location, …},this refers to the global object, which is window.
console.log(this === window);  //jab hum 3 = lagaty hn to hum tab strickly btaty hn k ya esky euqal hi ana chahye .



//immidiately invoke function , Creating a private scope for variables: Use an IIFE to avoid polluting the global scope with variables.
// Executing code immediately: Use an IIFE when you want to run a block of code as soon as the script loads.
// Modularizing code: Use IIFEs to encapsulate modules of functionality within your application.

// (function iifi(message){
//  console.log(`iffi invoked succcessfully ${message} `);
// })("Congrats!");

// unnamed iffi 
// ((message)=>{
//     console.log(`iffi invoked succcessfully ${message} `);
// })("Congrats!");



//how js code runs 
//javascript execution context
//1 global execution stack
//2 function execution stack
//3 eval execution stack
