{

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



const init = () => {
  const formElement = document.querySelector (".js-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
 
const resultText = document.querySelector (".js-formResult");
const amountElement = document.querySelector (".js-formPLN");
const currencyElement = document.querySelector (".js-currency");
const amount = +amountElement.value;
const selectedCurrency = currencyElement.value;

const result = calculateResult(amount, selectedCurrency);
const currencyText;
  
  resultText.innerText =`${parseFloat(iamountElement.value)} PLN to ${result} ${currencyText}`
});


}
init();
}