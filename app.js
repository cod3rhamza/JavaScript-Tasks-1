// 1. Question: Reverse a string without using the built-in reverse() method.

// let userStr = prompt("Enter your String");
// let userLen = userStr.length;
// let reversed = ""

// for(let i = userLen -1; i>=0; i--){
//     reversed += userStr[i];
// }

// console.log(reversed);


/////////////////////////////////////////////////////////////////

// 2. Question: Count the number of vowels in a given string.

// program to count the number of vowels in a string

// function countVowel(str) { 

//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return count;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);


////////////////////////////////////////////////////////////////////////////

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

// function capitalizeFirstLetter(sentence) {
//     // Split the sentence into an array of words
//     let words = sentence.split(" ");
  
//     // Capitalize the first letter of each word
//     let capitalizedWords = words.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
  
//     // Join the capitalized words back into a sentence
//     let capitalizedSentence = capitalizedWords.join(" ");
  
//     return capitalizedSentence;
//   }
  
//   // Example usage:
//   let inputSentence = prompt("Enter your word")
//   let capitalizedResult = capitalizeFirstLetter(inputSentence);
//   console.log("Capitalized sentence:", capitalizedResult);
  
/////////////////////////////////////////////////////////////////////////////////////

// Question 4: Check if a string is a palindrome.

// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);


////////////////////////////////////////////////////////////////////

// // 5. Question: Find the sum of all positive numbers in an array.

// function sumOfPositiveNumbers(arr) {
//     // Use the reduce function to sum up positive numbers
//     var sum = arr.reduce(function (accumulator, currentValue) {
//       // Check if the current value is a positive number
//       if (currentValue > 0) {
//         // Add the positive number to the accumulator
//         return accumulator + currentValue;
//       } else {
//         // If the current value is not positive, just return the accumulator
//         return accumulator;
//       }
//     }, 0);
  
//     return sum;
//   }
  
//   // Example usage:
//   var numbersArray = [1, -2, 3, -4, 5];
//   var result = sumOfPositiveNumbers(numbersArray);
//   console.log("Sum of positive numbers:", result);


///////////////////////////////////////////////////////////////////////////////


// 6. Question: Find the index of the first occurrence of a specific element in an array.

// function indexOfElement(arr, element) {
//     // Use indexOf to find the index of the first occurrence of the element
//     var index = arr.indexOf(element);
  
//     return index;
//   }
  
//   // Example usage:
//   let myArray = [1, 2, 3, 4, 5];
//   let elementToFind = 5;
//   let resultIndex = indexOfElement(myArray, elementToFind);
  
//   if (resultIndex !== -1) {
//     console.log("Index of the first occurrence of", elementToFind, "is:", resultIndex);
//   } else {
//     console.log(elementToFind, "not found in the array.");
//   }
  
  
//////////////////////////////////////////////////////////////////////////////////////////////

// // 7. Question: Remove all duplicates from an array without built-in methods.

// function removeDuplicates(arr) {
//     let uniqueArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//    // Check if the current element is not already in the uniqueArray
//       if (uniqueArray.indexOf(arr[i]) === -1) {
//         uniqueArray.push(arr[i]);
//       }
//     }
  
//     return uniqueArray;
//   }
  
//   // Example usage:
//   let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1];
//   let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
//   console.log("Array with duplicates:", arrayWithDuplicates);
//   console.log("Array without duplicates:", arrayWithoutDuplicates);
 

////////////////////////////////////////////////////////////////////////////

// 8. Question: Sort the array in ascending and descending without built-in methods.

// Bubble sort for ascending order
// function bubbleSortAscending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements if they are in the wrong order
//           var temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   // Bubble sort for descending order
//   function bubbleSortDescending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//           // Swap elements if they are in the wrong order
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   // Example usage:
//   let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
//   let ascendingSortedArray = bubbleSortAscending([...unsortedArray]);
//   let descendingSortedArray = bubbleSortDescending([...unsortedArray]);
  
//   console.log("Unsorted array:", unsortedArray);
//   console.log("Ascending sorted array:", ascendingSortedArray);
//   console.log("Descending sorted array:", descendingSortedArray);


////////////////////////////////////////////////////////////////////////////

// // 9. Question: Print all even numbers between 1 and 20 using a while loop.

// let number = 1;

// while (number <= 20) {
//   // Check if the number is even
//   if (number % 2 === 0) {
//     console.log(number);
//   }

//   // Increment the number for the next iteration
//   number++;
// }


//////////////////////////////////////////////////////////////////////

// 10. Question: Calculate the factorial of a number using a do-while loop.

// function calculateFactorial(number) {
//     // Check if the input is a non-negative integer
//     if (typeof number !== 'number' || number < 0 || Math.floor(number) !== number) {
//       console.log("Please provide a non-negative integer.");
//       return;
//     }
  
//     var factorial = 1;
//     var i = 1;
  
//     do {
//       factorial *= i;
//       i++;
//     } while (i <= number);
  
//     return factorial;
//   }
  
//   // Example usage:
//   var inputNumber = 5;
//   var result = calculateFactorial(inputNumber);
  
//   console.log(`Factorial of ${inputNumber} is: ${result}`);
  

//////////////////////////////////////////////////////////////////////////////////////

// 11. Question: Iterate through the properties of an object using a for-in loop.

// let myObject = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     occupation: "Engineer"
//   };
  
//   // Iterate through the properties of the object using a for-in loop
//   for (let key in myObject) {
//     if (myObject.hasOwnProperty(key)) {
//       // Check if the property is a direct property of the object (not inherited)
//       console.log(`${key}: ${myObject[key]}`);
//     }
//   }


/////////////////////////////////////////////////////////////////////////////////////////

// // 12. Question: Loop through an array using a for-of loop and double each element.

// let myArray = [1, 2, 3, 4, 5];
// let doubledArray = [];

// // Iterate through the array using a for-of loop
// for (let element of myArray) {
//   // Double each element and push it to a new array
//   doubledArray.push(element * 2);
// }

// console.log("Original Array:", myArray);
// console.log("Doubled Array:", doubledArray);



///////////////////////////////////////////////////////////////////////////////////////////

// 13. Question: Check if a number is even or odd and return a corresponding message.

// function checkEvenOrOdd(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//       return "Please provide a valid number.";
//     }
  
//     if (number % 2 === 0) {
//       return `${number} is even.`;
//     } else {
//       return `${number} is odd.`;
//     }
//   }
  
//   // Example usage:
//   let myNumber = 7;
//   let result = checkEvenOrOdd(myNumber);
//   console.log(result);
  
////////////////////////////////////////////////////////////////

// // 14. Question: Find the maximum of three numbers using nested ternary operators.

// function findMaximum(a, b, c) {
//     var max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
//     return max;
//   }
  
//   // Example usage:
//   let num1 = 10;
//   let num2 = 5;
//   let num3 = 8;
  
//   var maximum = findMaximum(num1, num2, num3);
//   console.log("The maximum of", num1 + ",", num2 + ",", "and", num3 + " is:", maximum);



/////////////////////////////////////////////////////////

// 15. Question: Determine if a year is a leap year or not.

// function isLeapYear(year) {
//     // Check if the year is divisible by 4
//     if (year % 4 !== 0) {
//       return false;
//     }
//     // If divisible by 4, check if it's divisible by 100 and not divisible by 400
//     else if (year % 100 === 0 && year % 400 !== 0) {
//       return false;
//     }
//     // If divisible by 4 and not divisible by 100 or divisible by 400, it's a leap year
//     else {
//       return true;
//     }
//   }
  
//   // Example usage:
//   var myYear = 2024;
//   var result = isLeapYear(myYear);
  
//   if (result) {
//     console.log(myYear + " is a leap year.");
//   } else {
//     console.log(myYear + " is not a leap year.");
//   }
  
