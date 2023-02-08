function TyMsg(){
    var yourName = document.getElementById("name").value;
    var yourEmail = document.getElementById("email").value;
    var yourMsg = document.getElementById("message").value;
    if ((yourName == null ||  yourName == "") && (yourEmail == null ||  yourEmail == "") && (yourMsg == null ||  yourMsg == "") ){
        alert("You did not enter anything.\nPlease enter your name, email address, and message.");
    }
    else if (yourName == null || yourName == "" || yourEmail == null ||  yourEmail == "" || yourMsg == null ||  yourMsg == "") {
        alert("Please complete the blank field.\nThank you.");
    }
    else
    {
        alert("Thank you, " + yourName + ", for messaging me!\nI will reach out to you as soon as I can.");
    }
}