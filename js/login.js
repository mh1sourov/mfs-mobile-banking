const logInButton = document.getElementById("btn-logIn");

logInButton.addEventListener("click", function(event){
    event.preventDefault();
    // console.log("button clicked")
    const logInPhoneNumber = document.getElementById("logInPhoneNumber").value;
    // console.log(logInPhoneNumber);
    const logInPin = document.getElementById("logInPinNumber").value;
    // console.log(logInPin);
    if(logInPhoneNumber === "01786843395" && logInPin === "1234"){
        window.location.href= "home.html"
    }
})