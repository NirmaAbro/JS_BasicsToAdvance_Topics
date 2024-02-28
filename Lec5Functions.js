// Functions and methods
// functions is an block of code to perform a specific task ,when it is required needed
//functions hme code redundancy(repitation) sa bachaty hn ,
// return srf ak hi valu return krskta h a, koe num , string , array kuch bhi hoskat ha but srf ak hi return krskty hn ,generally return hmari last line hoti hn , ksis bhi function ki
// return k bad koe bhi code execute nhi hoga ,its rule, jese hi function kuch return krta ha , jab hum usko invoke krty hn then usko hum kisi varibale ma store rky usko use krskty h ,
// functions k jo varibles hoty hn vo hmesha local varables bnjaty hn . unki vahi tak scope hi rhti hn , they have block scope .

// function add(a,b){
//     console.log(a+b)
// }
// add(2,4);

// function add(firstName,secondName){
//     console.log(firstName,secondName)
// }
// add("Nirma","Abro");

// function city(mycity){
//     return mycity;
// }
// let City=city("Hyderabad");
// console.log(City);

// arrow function , modern javaScript
// let MUltiply=(num1,num2)=>{
//     console.log(num1*num2);
// }

// MUltiply(2,4);

// function countVowels(str){
//     // console.log(str);
//     let count=0;
//     for (const char of str){
//         // console.log(char);
//         if(char==="a" || char==="e" ||char ==="i" || char==="o"|| char==="u"){
//             console.log(char);
//         }
//         count++
//     }
// }

// countVowels("women");

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     count++;
//   }
//   console.log(count);
// }
// countVowels("nirma");

// let Vowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// Vowels("abroe");

// function javascript ma normal return bhi kea jaskty hn r parameter ma passbhi keay jaskty hn 
// method bhi functions ki trha hoty hn but , vo kisi data structure ma ya kisi object ma bind krdea jaty hn , 
//  a method is a function that is associated with an object , like for each loop used in array for iteraction , and toUpperCase used in string for upper case , 
// A call back function i sa function that pass an argumnts to another functions
// Define an object
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     // Define a method within the object
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
//   // Call the method
//   console.log(person.fullName()); // Output: John Doe
  

// higher order function or methods  vo hoty hn jo function ko as a parameter lete hn ya return krty hn , like forEach loop 
// let arr=[1,2,3,4,5];
// arr.forEach((arr)=>{
//     console.log(arr*arr);
// })

// forEach loop in array ,In JavaScript, the forEach() method is used to iterate over elements of an array, but it doesn't return a new array

// const arr=[1,2,3,4,5];
// arr.forEach((arrVal)=>{
    
    
//     console.log(arrVal*arrVal);
// });

// map method ,
// map(): Returns a new array containing the results of calling a provided function on every element in the calling array. It returns a transformed array based on the function provided.
// forEach(): Doesn't return anything (undefined). It just iterates over each element of the array and executes a provided callback function on each iteration.
// let square=arr.map((value)=>{
//     return value*value;
// });
// console.log(square);

// filter method ,The filter() method is used in JavaScript to efficiently extract elements from an array that meet specific criteria or conditions. 
// Filtering data: When you have an array of data and you need to extract only certain elements based on a condition. For example, extracting all users who are older than 18 from a list of users, or filtering out inactive items from a list.
// It doesn't modify the original array; instead, it returns a new array containing only the elements for which the provided function returns true.


// Filtering Even Numbers: Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

let arr=prompt("enter the elements of an array");
let even=arr.filter((arrVal)=>{
    return arrVal
});
console.log("even number  is",even);






