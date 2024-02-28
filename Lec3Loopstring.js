// console.log("hello world");

// print 1 to 5 in js
// let count;
// for(let count=1; count<=5 ;count++){
//     console.log("iteration ",count);

// }

// sum of n num in js
// let sum=0;
// for(let count=1; count<=5 ;count++){
//     sum=sum+count; // sum =15

// }
// console.log("total sum is equal to ",sum);
// console.log("loop has been ended");

// for loop , while loop
// let i=1;
// while(i<=5){
//     console.log("iteration",i);
//     i++
// };

// let sum=0
// while(i<=5){
//     console.log("iterations no",sum=sum+i);
//     i++;
// }

// do while loop

// let i=0;
// do{
//     console.log("iteration no",i)
//     i--;
// }while(i<=5);

//for-of-loop ,for of loop hme strings r arrays k uper loop lagany ma help krta ha ,
//like string ki ja jaky ak ak values pa loop lagana ho to hum ya loop lagaty hn ,
//syntax, for(let variable of stringvarible ){ //code } , hum yaha pa na initialization krty hn n condition ,r na hi increment decrement krty hn .for of khud hi kam krta ha
// r ya string k bech ma agr space bhi ajata ha to ya count krta ha .

// let name="nirma abro";
// let name=["nirma","sana","subhan"]; //yaha loop srf 3 times chlyga 2 tak 0,1,2 coz there is an 3 elements in an array
// for(let i of name){
//     console.log("i = ",i);
// }

//objects k lia jis loop ko hum use krty hn vo ha for-in loop ,
//for in loop hmesha keys return krta ha , just of ki jaga in use krty hn baki syntax same hn ,

// let student1={
//     name:"nirma",
//     age:20,
//     gender:"female"
// }

// let student2={
//     name:"krian",
//     age:21,
//     gender:"female"
// }

// for(let i in student1){
//     console.log(i,"value is ",student1[i]);
//     // console.log(i,"value is ",student2[i]);
// }

// task 1 print even num 0 to 100
// for (let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }else{
//     }
// }
// console.log("loop ends here ");

// odd num 0 to 100
// for (let i =0 ;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }else{

//     }
// }

// let gameNum = 5;
// let GuesNum = prompt("enter the gameNum"); //basically prompt hmesha string return krta ha,
// while (gameNum!=GuesNum) {
//     GuesNum=prompt("you enter the wrong gameNum,please try again");
// }
// console.log("Congratulations you wins!!!");

// string is a sequence of character that is used to represent the text ,
// let str1 = "nirma";
// let str2 = "abro ";
// let fullName = str1 + str2; //or
// let fullName=str1.concat(str2)
// console.log(fullName);
// console.log(fullName.length);

let str1 = "nirma";
let str2 = "abro ";
let newStr=str1.replace("nirma","Kiran");
console.log(newStr+" "+str2);


