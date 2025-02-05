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
}
    else{
        console.log("Violence make. Cash Out Failed")
    }
    
})