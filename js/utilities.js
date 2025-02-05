// const btnAddMoney = document.getElementById("btn-addMoney");
// function getInputFieldById(){
//     console.log("get input field by Id")
//     const addMoney = document.getElementById("inputAmountToAddMoney").value;
//     return addMoney;
// }

function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function gettextValueByID(id){
    const textValueString = document.getElementById(id).innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}