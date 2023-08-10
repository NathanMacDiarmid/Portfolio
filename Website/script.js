function sendEmail() {
    Email.send({
        SecureToken: "c87cede3-e262-41af-bc49-b896ef03edee",
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