// Get all elements with the class name 'example-class'
// var btn = document.getElementsByClassName('btn')[0];

// Loop through the collection of elements and do something with each element
// for (var i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
// }
// btn.onclick=(e)=>{
// // alert("button clicked !");
// console.log(e);
// console.log(e.type);
// // console.log(e.target);

// }  //this is an event object 
 
// event handling . 
// 1 throught inline handling ta k andr hi handle kia event ko 
// then js file k andr node ko target krky hum events ko handle krty thy 
// now third is addEventListner jo k callback function leta ha r event type leta ha r ya listen krta rhta ha jb bhi event listen hota ha ya occur hojata ha 
// r y ajo callbak function hota ha event listner ma esko hum callback handler khty hn 


// btn.addEventListener("mouseover",()=>{
//     console.log("mouse over event occur");
// });


// const handler=(e)=>{
//     console.log("handler has been invoked");
//     console.log("event type is ",e);
// };

// btn.addEventListener("mouseover",handler);

// dark mode light mode bg task 
// jab hum ak state sa dosri state ma jaty hn r dosri state s apehli state ma jaty hn to usy hum toggole kehty hn 
// 2 states k bech ma swtch krna toggle kehty hn 

// let mode=document.getElementById("tgl");
// mode.addEventListener("click",()=>{
//     var bgColor=document.body.style.backgroundColor;
//     if (bgColor === "" || bgColor==="white"){
//         document.body.style.backgroundColor="black";
//     }else{
//         document.body.style.backgroundColor="white";
//     }
// })


// shradhaaa apna clg solution 
let togglee = document.querySelector("#tgl");
let modebtn = 'light';

// Add event listener to the button
togglee.addEventListener("click", () => {
    if (modebtn === "light") {
        modebtn = "dark";
        document.querySelector("body").style.backgroundColor = "black";  //by using querySelector 
    } else {
        modebtn = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(modebtn);
});