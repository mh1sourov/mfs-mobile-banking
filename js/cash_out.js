document.getElementById("btn-cash-Out").addEventListener("click", function(event){
event.preventDefault();
const cashOutPin = getInputFieldById("cashOutPin");
const cashOutAmountString = getInputFieldById("inputCashoutAmount")
const cashOutAmount = parseFloat(cashOutAmountString);
const accountBalance = gettextValueByID("accountBalance")
if(cashOutPin === "7335"){
// console.log(typeof cashOutAmount,cashOutAmount, accountBalance, "from expected line")
const newBalance = accountBalance - cashOutAmount;
document.getElementById("accountBalance").innerText = newBalance;
const transactionSection = document.getElementById("transation_section");
const p = document.createElement("p")
p.innerText = `Your cash out amount is: ${cashOutAmount} 
                Your Current balance is: ${newBalance}`
transactionSection.appendChild(p);

}
    else{
        console.log("Violence make. Cash Out Failed")
    }
    
})