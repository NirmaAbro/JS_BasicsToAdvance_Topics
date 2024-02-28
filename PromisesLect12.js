// console.log("hello from lect 12 ");
// function hello(){
//     console.log("hello from function");
// }

// setTimeout(hello,4000);

//or we can write
// setTimeout(()=>{
//     console.log("heloo from set time out ");
// },2000);

// call back
// call back function ak esa function ko kehty h jo k kisi dosre functions ko as an argument leta ha
// like setTimeOut bhi function ko argument ma leta ha thn vo bhi call back function hoa ,

// function sum(a,b){
//     // console.log(a+b,'from sum method');
// }
// function calculator(a,b,sumCallBack){
//     console.log(a+b,"from calculator method");
// }

// // calculator(1,2,sum); or
// calculator(1,3,()=>{
//     console.log(a+b);
// })

//call back in js
// Simulated asynchronous tasks
// function task1(callback) {
//   setTimeout(function () {
//     console.log("Task 1 completed");
//     callback();
//   }, 1000);
// }

// function task2(callback) {
//   setTimeout(function () {
//     console.log("Task 2 completed");
//     callback();
//   }, 1500);
// }

// function task3(callback) {
//   setTimeout(function () {
//     console.log("Task 3 completed");
//     callback();
//   }, 2000);
// }

// // Execution of tasks in sequence
// task1(function () {
//   task2(function () {
//     task3(function () {
//       console.log("All tasks completed");
//     });
//   });
// });

//async projects
//usage setTimeout
// let heading=document.querySelector("#hh1");
// const changHeading=()=>{
// heading.textContent="hi from nirma ";
// console.log("chnage text");
// }
// let chngMe=setTimeout(changHeading,2000);
// document.querySelector("#stop").addEventListener("click",function(){
//     clearTimeout(chngMe);
//     console.log("button clicked");
// })

//setINterval
// Define a function to be executed repeatedly
// function greet() {
//     console.log("Hello!");
// }

// // Call setInterval to execute the function 'greet' every 2 seconds
// let intervalID = setInterval(greet, 2000);

// // Stop the interval after 10 seconds (10 * 1000 milliseconds)
// setTimeout(function() {
//     clearInterval(intervalID);
//     console.log("Interval stopped!");
// }, 10000);


// start stop button task intervals 

let heading = document.querySelector("#hh1");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let intervalID;

start.addEventListener("click",()=>{
    heading.innerHTML="event Start";
    let intervalStart=()=>{
        console.log("interval start");
    }

    id=setInterval(intervalStart,1000);
});

stop.addEventListener("click",()=>{
    heading.innerHTML="event ends here";
    let intervalStop=()=>{
        console.log("stoped interval");
    }
    clearInterval(id);
})