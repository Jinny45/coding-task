function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Compare the two adjacent elements.
        // If the first element is greater than the second element, swap them.
        if (array[j] > array[j + 1]) {
          // Swap elements
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  // Example usage:
  const unsortedArray = [5, 3, 8, 2, 1, 4];
  console.log("Unsorted Array:", unsortedArray);
  const sortedArray = bubbleSort(unsortedArray);
  console.log("Sorted Array:", sortedArray);
  