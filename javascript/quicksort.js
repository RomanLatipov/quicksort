function partition(array, low, high) {
  let i = low - 1; 
  
  for (let j = low; j <= high - 1; j++) {
    if (array[j] < array[high]) {
      i++;
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp; 
    } 
  } 
  const temp = array[i+1];
  array[i+1] = array[high];
  array[high] = temp;
  return i + 1;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) 
    return array;
  let pivot = partition(array, low, high);

  quicksort(array, low, pivot-1);
  quicksort(array, pivot+1, high);

  return array;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 6, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
