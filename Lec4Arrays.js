// topic arrays 

//average of marks 
// let marks=[87,88,98,66,85];
// let sum=0;
// for (let mark of marks){
//     sum+=mark;
    
// }
// let average=sum/marks.length;
// console.log("average is ", average );

// push hmara existing array k andr change krta ha 
// pop bhi original array k andr chang ekrta ha r delete krta h aend sa item ko r return krta ha us item ko jo remove hoa h a, 
// toString original array pa impect nhi det a, copy of array ma chnag ekrta ha ,ya convert krta h aarray ko string ma ,
// concat emethod join multiple array and return result., ya original array ko chang enhi krta ,copy of array ko chnag ekrta ha .
// unshift() method its add to start like push kam krtah a wese ,
//  shift() method its delete to start ya pop ki trha kam krta ha,
// most imp ya sare methods hmesh asmall latters sa hi likhty hn , 
// slice method original array k andr change nhi krta , arrayname.slice(strtindex,endindex), ya piece of aray return krta ha k kaha sa lyky kaha tak return krna ha . 
// splice method , it change add ,remove and replace the items in an array ,

// some methods of an array 


// 1. `push()`: Adds one or more elements to the end of an array and returns the new length of the array.

// ```javascript
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // Output: [1, 2, 3, 4]
// ```

// 2. `pop()`: Removes the last element from an array and returns that element.

// ```javascript
// let arr = [1, 2, 3];
// let removedElement = arr.pop();
// console.log(removedElement); // Output: 3
// console.log(arr); // Output: [1, 2]
// ```

// 3. `shift()`: Removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.

// ```javascript
// let arr = [1, 2, 3];
// let removedElement = arr.shift();
// console.log(removedElement); // Output: 1
// console.log(arr); // Output: [2, 3]
// ```

// 4. `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.

// ```javascript
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // Output: [1, 2, 3]
// ```

// 5. `slice()`: Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

// ```javascript
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 4);
// console.log(slicedArr); // Output: [2, 3, 4]
// console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
// ```

// 6. `splice()`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// ```javascript
// let arr = [1, 2, 3, 4, 5];
// let removedElements = arr.splice(1, 2); // Removes elements starting from index 1 up to index 2 (not inclusive)
// console.log(removedElements); // Output: [2, 3]
// console.log(arr); // Output: [1, 4, 5] (original array modified)
// ```

// These methods provide powerful ways to manipulate arrays in JavaScript.