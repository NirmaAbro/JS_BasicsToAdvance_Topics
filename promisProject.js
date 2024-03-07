// const randomColor = function () {
//   let hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// // console.log(randomColor());
// let intervalID;

// let StartChangingColor = function () {
//   let ChangeBgColor = () => {
//     document.body.style.backgroundColor = randomColor();
//   };

//   if (!intervalID) {
//     intervalID = setInterval(ChangeBgColor, 1000);
//   }
// };

// let StopChangingColor = function () {
//   clearInterval(intervalID);
//   intervalID = null;
//   //   document.body.style.backgroundColor = "black";
// };
// document.querySelector("#start").addEventListener("click", StartChangingColor);
// document.querySelector("#stop").addEventListener("click", StopChangingColor);

//promise by chai with code
// let promiseOne = new Promise((resolve, reject) => {
//   // anonymous functions are often referred to as lambda functions.you can also pass named functions to setTimeout
//   setTimeout(function () {
//     console.log("your subscription start");
//   }, 3000);
//   console.log("async task start");

//   resolve();
// });
// promiseOne.then(function () {
//   console.log("then block code");
// });

// //without variable promise
// new Promise((resolve, reject) => {
//   // anonymous functions are often referred to as lambda functions.you can also pass named functions to setTimeout
//   setTimeout(function () {
//     console.log("your subscription two start");
//   }, 3000);
//   console.log("async task two start");

//   resolve();
// }).then(function () {
//   console.log("without variable of promise");

// });

//passing values in resolved
// new Promise((res, rej) => {
//   const myuserfunc = () => {
//     console.log("my user function");
//     res({ name: "nirma", email: "nirma123xyzgmail.com" });
//   };
//   setTimeout(myuserfunc, 1000);
// }).then(function (user) {
//   console.log("user function resolved");
//   console.log(user); //getting the objects from the resolve
// });

// chaining in promises .then
// let promiseFour=new Promise((res, rej) => {
//     let error=false;
//     if (!error){
//         const myuserfunc = () => {
//             console.log("my user function");
//             res({ name: "nirma", email: "nirma123xyzgmail.com" });
//           };
//     }else{
//         rej(" error has been occur please try again");
//     }

//     setTimeout(myuserfunc, 1000);
//   })

//   promiseFour.then(function (user) {
//     console.log("user function resolved");
//     return user.name;
//   })
//   .then(function(username){
//     console.log(username);
//   })
//   .catch(function(error){
//     console.log(error);
//   })

// let myPromisethenWala = new Promise((resolved, reject) => {
//   let error = false;
//   if (!error) {
//     setTimeout(function () {
//       console.log("my then wala promise");
//       resolved();
//     }, 1000);
//   } else {
//     reject("rejected promise");
//   }
// });
// myPromisethenWala.then(() => {
//   console.log("then resolved");
// }).catch(function(err){
//     console.log("error :",err);
// })


//async wala programs 
// async function example(){
//     return "hello 1";
// }
// example().then((result)=>{
// console.log(result);
// });

async function sequentialExecution() {
    const result1 = await firstPromise();
    const result2 = await secondPromise();
    return result1 + result2;
}

sequentialExecution().then(result => {
    console.log(result);
});