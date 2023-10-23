// let arr = [1, 40, -5, 10, 0];
// function sortArray (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//     }
//   }
// }
//   console.log(arr);
// }
// sortArray(arr);


const arr1 = [-1, 40, -5, -100, 3, 15];

function sortArr(arr) {
    const copeidArr = [...arr];
    for (let i = 0; i < copeidArr.length - 1; i++) {
        for (let j = i + 1; j < copeidArr.length; j++) {
            if (copeidArr[j] < copeidArr[i]) {
              [copeidArr[j], copeidArr[i]] = [copeidArr[i], copeidArr[j]]
            }
        }
    }
    return copeidArr;
}

console.log(sortArr(arr1));