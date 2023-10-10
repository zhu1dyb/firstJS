let arr = [1, 40, -5, 10, 0];
function sortArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
  }
}
  console.log(arr);
}
sortArray(arr);




// let arr = [1, 40, -5, 10, 0];
// function sortArray (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp
//     }
//   }
// }
//   console.log(arr);
// }
// sortArray(arr);