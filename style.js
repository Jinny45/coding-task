// Example array
const numbers = [3, 3, 8, 5, 1, 4, 8, 9, 3, 2, 7, 5, 6, 1, 9];

// Sum of array
const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("Sum of array:", total);

// Largest number in array
const maxNumber = Math.max(...numbers);
console.log("Largest number:", maxNumber);

// Unique numbers in array
const uniqueNumbers = [...new Set(numbers)];
console.log("Unique numbers in array:", uniqueNumbers);

// Repeated numbers in array
const repeatedNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) !== index;
});
console.log("Repeated numbers in array:", repeatedNumbers);
