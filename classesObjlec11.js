// // const student ={
// // name:"nirma ",
// // bioData:function(){
// //     console.log("your batch is 2021");

// // }

// // }

// // let std1={
// //     name:"preet",
// //     age:"21",
// //     gender:"female"
// // }
// // console.log(student);
// //prototype ak object hota ha , r es prototype ki madad sa hum ak functions ki properties dosre function ma dalskty hn 
// // like student ki properties humny std1 ma daldi 
// // console.log(std1);
// // std1.__proto__=student;
// // console.log(std1.bioData);
// // console.log(std1);
// ///if object and prototype has same methods object methods will be used .means bhly prototype k pas bhi vo function ho jo usky apny object k pas function ho same name ka to vo apny function ko zyada prefer kryga prototype ko nhi kryga etna 
// // phly khud ky functions and methods ko use kryga then agr usko chahye hoga to lega wrna nhi 

// //this is all about prototypes in js 


// // classes in js 

// class car{
//     start(){
//         console.log("car start")
//     }
//     stop(){
//         console.log("car stop");
//     }
//     colour(color){
//         // console.log(`car colour is`)
//         this.color=color;
//     }

// }
// let obj1=new car();
// console.log(obj1);
// car.color("pink");


//classes , objects , now inheretance in j s
// class Parent{
//     // console.log("this is a parent class");
//     // console.log("nirma");
//     property(car1,car2) {
//         console.log("car 1 is for ",car1);
//         console.log("car 1 is for ",car2);
        
//     }

// }
// class Child extends Parent{
    
//     constructor(){
//         super();
//         console.log("chils=d class has been claed");
//     }

// }
// //the super class is used to call th eparent class constructor, to access th eparent class properties and methods .

// let obj1=new Child();
// obj1.property("car1","car2");
//bascally overrriding k mtlb hota ha kisi chez ko cover krlena .



//task 

// let Data="my profession is software engnr";
// class User{
//     constructor(name,email){
        
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("ewebsite data ",Data)
//     }
// }

// let userObj=new User();
// // userObj.name="nirma";

// userObj.viewData();
// console.log(userObj.name="nirma");
// console.log(userObj.email="xyz@gmail.com");

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);

//     }
//     editData(){
//         Data="new edited data";
//     }
// }

// let admnObj=new Admin("admin1","admn@gmai.com");

// console.log(admnObj);
// console.log(admnObj.editData());
// console.log(Data);


