// ***************** LEARNING PHASE 3 ************************
//********* Accessor Functions *****/
// Accessor Functions are used to access the elements of an array
// indexOf()
/*
If the argument is contained in the array, the function returns 
the index position of the argument. If the argument is not found
in the array, the function returns -1.
*/
//import readline module
var readline = require('readline');
// I think this is the part that allows the commandline interaction
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

// this prompts the user and assigns the user input to the variable name
rl.question("Enter a name to search for: ", function(name) {
  var position = names.indexOf(name);
  if (position >= 0) {
    console.log("Found " + name + " at position " + position);
  }
  else {
    console.log(name + " not found in array.");

  //this closes the I/O stream, without this line the commandline prompt will remain open
  rl.close();
}});
// If you run this program and enter Cynthia, the program will output:
// Found Cynthia at position 1
// If you enter Joe, the output is:
// Joe not found in array.

// lastIndexOf()
/* 
lastIndexOf(), will return the position of the last 
occurrence of the argument in the array, or -1
if the argument isn’t found.
*/
// var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
// var name = "Mike";
// var firstPos = names.indexOf(name);
// console.log("First found " + name + " at position " + firstPos);
// var lastPos = names.lastIndexOf(name);
// console.log("Last found " + name + " at position " + lastPos);
// The output from this program is:
// First found Mike at position 1
// Last found Mike at position 5

//********* Aggregate Array Operations *****/
// Shallow copy
// var nums = [];
// for (var i = 0; i < 100; ++i) {
// nums[i] = i+1;
// }
// var samenums = nums;
// nums[0] = 400;
// console.log(samenums[0]); // displays 400

// Deep copy 
/* 
so that each of the original array’s elements is actually
copied to the new array’s elements.
*/
// function copy(arr1, arr2) {
//     for (var i = 0; i < arr1.length; ++i) {
//     arr2[i] = arr1[i];
//     }
// }
// var nums = [];
// for (var i = 0; i < 100; ++i) {
// nums[i] = i+1;
// }
// var samenums = [];
// copy(nums, samenums);
// nums[0] = 400;
// console.log(samenums[0]); // displays 1

// ***************** LEARNING PHASE 2 (revision) ************************
// var nums = [];
// for (var i = 0; i < 100; i++ ) {
//     // console.log(i); // i ranges from 0 to 99
//     // nums[i] denotes the position of element in the array
//     nums[i] = i + 1; // each position should have a number of i + 1
// }
// // note that this call is made outside the loop
// console.log(nums) 

// var nums = [2,4,6,8];
// var sum = 0;
// for (var i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }
// console.log(sum)

//**** loop ***/
// for (var i = 0; i < myArray.length; i++)
// for (let value of myArray)

// var sentence = "He has a penchant for science";
// var newSentence = sentence.split(" "); // space MUST be provided between the quotation marks
// console.log(newSentence[0]);
// console.log(newSentence);

// ***************** LEARNING PHASE 2 ************************
//********* Creating Arrays from Strings *****/
// Arrays can be created as the result of calling the split() function on a string.
// var sentence = "the quick brown fox jumped over the lazy dog";
// var words = sentence.split(" ");
// for (var i = 0; i < words.length; ++i) {
// console.log("word " + i + ": " + words[i]);
// };

// The output from this program is:
// word 0: the
// word 1: quick
// word 2: brown
// word 3: fox
// word 4: jumped
// word 5: over
// word 6: the
// word 7: lazy
// word 8: dog

// summary 
// var name = "John Drake";
// var splitName = name.split(" ");
// console.log(splitName); // displays: [ 'John', 'Drake' ]

//********* Accessing and Writing Array Elements *****/
// The following loop assigns the values 1 through 100 to an array:
// var nums = [];
// for (var i = 0; i < 100; ++i) {
// nums[i] = i+1; // display number from 1 to 100
// nums[i] = i; // display number from 0 to 99: starts at 0 (i = 0) stop at 99 (i < 100)
// }
// console.log(nums);

// accessing all the elements of an array sequentially is much easier using a for loop:
// var numbers = [1,2,3,5,8,13,21];
// var sum = 0;
// for (var i = 0; i < numbers.length; ++i) {
// sum += numbers[i];
// }
// console.log(sum); // displays 53

// using for of loop for the same question
// var numbers = [1,2,3,5,8,13,21];
// var sum = 0;
// for (let value of numbers) {
//     sum += value;
// }
// console.log(sum);

//********* To verify that an object is an Array *****/
// var number = 3;
// var arr = [7,4,1776];
// console.log(Array.isArray(number)); // displays false
// console.log(Array.isArray(arr)); // displays true

//********* Creating Arrays *****/
// var numbers = []; // declaring empty array
// var numbers = [1,2,3,4,5]; // declaring an array variable with a set of elements


// You can also create an array by calling the Array constructor:
// var numbers = new Array();
// var numbers = new Array(1,2,3,4,5); // set of elements as arguments to the constructor

// var numbers = new Array(1,2,3,4,5);
// console.log(numbers.length); // displays 5

// Specifying one element as argument serves as its length
// var numbers = new Array(10);
// console.log(numbers.length); // displays 10

// note: using this [] operator is more efficient than the Array constructor

// ***************** LEARNING PHASE 1 ************************
//************ Array - Revision 2 ******/
// let number = [1, 2, 3, 4, 5];

// for (i = 0; i < number.length; i++) {
//     console.log(number[i])
// }

// for (value of number) {
//     console.log(value)
// }

//************ Array - Revision 1 ******/
// let myArray = [];

// myArray.push(3);

// console.log(myArray);

