const rateDollarInRUB = 96.10; 
const rateEUinRUB = 102.52;
function converter (summa, currency = "rub", translatedCurrency) {
  if (translatedCurrency === "dol" && currency === "rub"){
    const fromRubtoDollars = summa / rateDollarInRUB;
    return fromRubtoDollars;
  } else if (translatedCurrency === "eu" && currency === "rub")
  {
    const fromRubtoEU = summa / rateEUinRUB;
    return fromRubtoEU;
  }
  else {
    return null;
  }
  }
  console.log(converter(1000, "rub", "eu") +  " евро");  // при обмене евро меняем "долларов" на "евро"