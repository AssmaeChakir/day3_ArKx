// !start Bubble Sort :
function bubble(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let max = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = max;
      }
    }
  }
  return arr;
}
const bubbles = [64, 34, 25, 12, 22, 11, 90];
 console.log("Original array1:",bubbles);
 const sortedBubbles = bubble(bubbles);
// // Create a copy to avoid modifying the original array
 console.log("Sorted array1:", sortedBubbles);
// todo: End Bubble Sort :

// ---------------------------------------------------

// // ! Start Selection Sort :
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

  // Example usage:
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array2:", numbers);
  const sortedArray = selectionSort(numbers.slice()); // Create a copy to avoid modifying the original array
  console.log("Sorted array2:", sortedArray);

// todo :End  Selection Sort :
// ---------------------------------------------------

// // !Start Insertion Sort :
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Save the current element to be inserted
    let currentElement = arr[i];

    // Start comparing with the elements before and shift them to the right
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
const insert = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array3:", insert);
const sortedInsert = insertionSort(insert.slice()); // Create a copy to avoid modifying the original array
console.log("Sorted array3:", sortedInsert);
// todo: End Insertion Sort :
// ---------------------------------------------------

// !Start Linear Search :

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }

  return -1; // Return -1 if the target is not found in the array
}

// Example usage:
const line = [4, 2, 7, 1, 9, 5];
const targetNumber = 7;

const result = linearSearch(line, targetNumber);

if (result !== -1) {
  console.log(`Target ${targetNumber} found at index ${result}.`);
} else {
  console.log(`Target ${targetNumber} not found in the array.`);
}

// todo :End  Linear Search :
// ---------------------------------------------------

// !Start binary Search :
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if the target is found
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Return -1 if the target is not found in the array
}

// Example usage:
  const sortedNumbers = [1, 3, 5, 7, 9, 11, 13, 15];
  const targetnumber = 7;

  const res = binarySearch(sortedNumbers, targetnumber);

  if (res !== -1) {
    console.log(`Target ${targetNumber} found at index ${res}.`);
  } else {
    console.log(`Target ${targetnumber} not found in the array.`);
}

// todo: End binary search  :
// ---------------------------------------------------
