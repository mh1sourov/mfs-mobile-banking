const buttonAddMoney = document.getElementById("btn-addMoney");
buttonAddMoney.addEventListener("click", function(event){
event.preventDefault();
// console.log("connecetd Alhamdulillah")
const inputAmountForMoneyAdd = document.getElementById("inputAmountToAddMoney").value;
// console.log(inputAmountForMoneyAdd);
const addMoneyPin = document.getElementById("addMoneyPin").value;
// console.log(addMoneyPin);
if(addMoneyPin === "1234"){
const accountBalance = document.getElementById("accountBalance").innerText;
const balanceNumber = parseFloat(accountBalance);
const amountAddMoney = parseFloat(inputAmountForMoneyAdd);
const newBalance = balanceNumber + amountAddMoney;
document.getElementById("accountBalance").innerText = newBalance;
console.log(balanceNumber, typeof balanceNumber, "add money amount", typeof amountAddMoney);
}
})