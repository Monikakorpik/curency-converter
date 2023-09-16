{
let form = document.querySelector (".js-form");
let resultText = document.querySelector (".js-formResult");
let inputValue = document.querySelector (".js-formPLN");
let selectedCurrency = document.querySelector (".js-currency");

let eur = 4.21;
let usd = 3.90;
let gbp = 4.99;
let result;
let currencyText;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  switch (selectedCurrency.value) {

    case "EUR":
      result = (inputValue.value / eur).toFixed(2);
      currencyText = "Euro";
      break
    case "USD":
      result = (inputValue.value / usd).toFixed(2);
      currencyText = "dolarów";
      break

    case "GBP":
      result = (inputValue.value / gbp).toFixed(2);
      currencyText = "funtów";
      break
  }
  resultText.innerText =`${parseFloat(inputValue.value)} PLN to ${result} ${currencyText}`
});

  {
const hideSection=()=>{
    const section = document.querySelector(".js-section");
    section.classList.add(".section--hidden");
};
const init=()=>{
  hideSection();
};
init();
}}

