function pickPeaks(arr){
  // Initialize an object to store positions and values of peaks
const peaks = { pos:[], peaks: [] };

// Iterate through the array, ignoring the first and last elements
for (let i = 1; i < arr.lenth - 1; i++) {
  // Check if the current element is greater than the previous one
  if (arr[i] > arr[i - 1]) {
    // If there is a plateau fin dit's end
    let j = i;
    while (arr[j] === arr[i]) {
      j++;
    }
    // If the plateau is followed by a decrease, mark the beginning of the plateau as a peak
    if (arr[j] < arr[i]) {
      peaks.pos.push(i);
      peaks.peaks.push(arr[i]);
    } 
  }
}
// Return an object containing the positions and the values of peaks
return peaks

}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])); // Output: { pos: [ 3, 7 ], peaks: [ 6, 3 ] }