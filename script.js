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

