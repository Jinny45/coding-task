// Function to calculate the area of a rectangle
function calculateAreaOfRec(length, width) {
    return length * width;
  }
  
  // Calling the function and storing the result
  const area = calculateAreaOfRec(5, 3);
  
  console.log(area);// OutPut 15

  // Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers[0]);  // Output: 1
console.log(numbers[2]);  // Output: 3

// Modifying array elements
numbers[1] = 8;
console.log(numbers);  // Output: [1,8, 3, 4, 5]

// Array methods
console.log(numbers.length);  // Output: 5

numbers.push(6);  // Add an element to the end of the array
console.log(numbers);  // Output: [1,8, 3, 4, 5, 6]

numbers.pop();  // Remove the last element from the array
console.log(numbers);  // Output: [1,8, 3, 4, 5]



// Creating an object representing a data of a person
const dataOfperson = {
    name: 'Janvi',
    age: 30,
    profession: 'Engineer',
    id: 123,
  };
  
  // Accessing object properties
  console.log(dataOfperson.name);  // Output: 'Janvi'
  console.log(dataOfperson.age);   // Output: 30
  console.log(dataOfperson.id);

  // Modifying object properties
  console.log(dataOfperson.age);//age = 35;
  console.log(dataOfperson.age);   // Output: 35
  
  // Adding new properties
  dataOfperson.city = 'Banglore';
  console.log(dataOfperson.city);  // Output: 'Banglore'
  



  // Example using setTimeout to simulate an asynchronous operation
const randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject('Error: Random number is less than 0.5');
      }
    }, 1000);
  });
  
  // Handling the promise
  randomNumberPromise
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.log('Rejected:', error);
    });


    
  