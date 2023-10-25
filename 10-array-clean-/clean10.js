let numbers = [-4, 5, 7, 0, -11, 101];

function choseToDelete (items) {
    return items <= 0
}
console.log(choseToDelete (numbers))

function arrayCleaner (arr, choseToDelete) {
    for (let i = 0; i < arr.length; i++) {
        if (choseToDelete(arr[i])) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr;
}
const result = arrayCleaner (numbers, choseToDelete);
console.log(result); 