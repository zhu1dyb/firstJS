const cardNumber = "3424-3534-2948-7742";
function luna(number) {
    number = number.replaceAll("-", "").trim();
    for(num of number) {
        if(isNaN(Number(num))) {
            return "Не является номером карты"
        }
    }
    let sum = 0;
    let umnozhennoeNumber;
    for(let i = 0; i < number.length; i+=2){
        umnozhennoeNumber = number[i] * 2;
        if(umnozhennoeNumber >= 9) {
            umnozhennoeNumber = umnozhennoeNumber - 9;
        }
        sum = sum + umnozhennoeNumber + Number(number[i+1])   
    }
    if(sum % 10 === 0) {
        return true
    } else return false
}
console.log(luna(cardNumber)) 