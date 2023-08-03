function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nathanmacdiarmid@gmail.com",
        Password : "PASSWORD",
        To : 'nathanmacdiarmid@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Email From Website",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}