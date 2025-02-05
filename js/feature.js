document.getElementById("cashOutButton").addEventListener("click", function(){

    document.getElementById("cash_out_section").classList.remove("hidden");
    document.getElementById("add_money_section").classList.add("hidden");
    document.getElementById("transation_section").classList.add("hidden");

    
})

document.getElementById("addMoneyButton").addEventListener("click", function(){
    document.getElementById("cash_out_section").classList.add("hidden");
    document.getElementById("add_money_section").classList.remove("hidden");
    document.getElementById("transation_section").classList.add("hidden");
    
})

document.getElementById("transactionButton").addEventListener("click", function(){
    document.getElementById("cash_out_section").classList.add("hidden");
    document.getElementById("add_money_section").classList.add("hidden");
    document.getElementById("transation_section").classList.remove("hidden");
    
})








