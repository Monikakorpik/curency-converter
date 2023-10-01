{
  const form = document.querySelector (".js-form");
const resultText = document.querySelector (".js-formResult");
const inputValue = document.querySelector (".js-formPLN");
const selectedCurrency = document.querySelector (".js-currency");
const calculateResult = (amount, selectedCurrency) => {
  const EUR = 4.21;
const USD = 3.90;
const GBP = 4.99
  switch (selectedCurrency) {

    case "EUR":
      return amount / EUR;
      currencyText = "Euro";
    
    case "USD":
      return amount / USD;
      currencyText = "dolarów";
    

    case "GBP":
      return amount / GBP;
      currencyText = "funtów";
      
  }
}

const amount = +amountElement.value;
const selectedCurrency = currencyElement.value;
const result = calculateResult(amount, selectedCurrency);
const currencyText;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  resultText.innerText =`${parseFloat(inputValue.value)} PLN to ${result} ${currencyText}`
});

}