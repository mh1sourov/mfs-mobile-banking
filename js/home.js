const buttonAddMoney = document.getElementById("btn-addMoney");
buttonAddMoney.addEventListener("click", function(event){
event.preventDefault();

const addMoneyPin = document.getElementById("addMoneyPin").value;
console.log(addMoneyPin);
if(addMoneyPin === "1234"){

const inputAmount = getInputFieldById("inputAmountToAddMoney")
const inputAmountNumber = parseFloat(inputAmount);
const addMoneyPin = getInputFieldById("addMoneyPin");
const accBalance = gettextValueByID("accountBalance");

console.log("expeceted line", inputAmountNumber, addMoneyPin, "text value", accBalance);
const newBalance = accBalance + inputAmountNumber;
  document.getElementById("accountBalance").innerText = newBalance;
}
})

