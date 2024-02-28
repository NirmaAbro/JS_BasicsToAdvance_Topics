console.log("hi from dom");
//console.dir is used to print the special objects like doument it prints their methods and properties .
//by id
// let heading=document.getElementById("ch1");
// console.dir(heading);
// console.log(heading);

//by class
// let headings=document.getElementsByClassName("heaing");
// console.dir(headings);
// console.log(headings);

// by tag
// let paragrphs=document.querySelector("p"); //it will show the first chlid of an doc
// let paragrphs=document.querySelectorAll("p"); //it will show the all chlid of an doc, it will return th e nodelist
// console.dir(paragrphs);
// console.log(paragrphs);

// task code 
// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+"from apna college"; //innerText property returns the visible text content of an element


let divs=document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText="new unique value one";
// divs[1].innerText="new unique value one";
// divs[2].innerText="new unique value one";
// or 
let idx=1;
for(div of divs){
// console.log(div);
div.innerText=`unique value ${idx}`;
idx++;
}



