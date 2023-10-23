function passwordMutation (password) {
    const razbienie = password.split("") // Переводим в массив
    const let1Let2Del = razbienie.splice(0,2); // Вырезаем с 1 по 2 индексы
    const pushArray = razbienie.concat(let1Let2Del); // вставляешл 1-2 индексы в конец массива
    const cryptoPas = pushArray.join(""); // Из массива в строку
    return cryptoPas;
}

function transcript (cryptoPas, passwordTwo) {
    const massiv = cryptoPas.split(""); // В массив
    const massivToStart = massiv.splice(-2, 2); // Вырезали 2 последних
    const massivTogether = massivToStart.concat(massiv);
    const massivToString = massivTogether.join("");
    if (passwordTwo === massivToString ) {
        console.log( `check  "${cryptoPas}", "${massivToString}" `+ true);
    } else
    {
        console.log(false)
    }
}
transcript(passwordMutation(prompt("Введите пароль")), prompt("Введите пароль еще раз"))

