document.getElementById('formulaire').addEventListener("submit", function (e){

    var erreur;
    const key = "CLE-TEST-IOT";
    var email = document.getElementById("id");
    var date = document.getElementById("date");
    var url = document.getElementById("urlRelais");
    var message = document.getElementById("message");


    /*Tests de validité*/
    if (!email.value) {
        erreur = "Veuillez renseigner un email."
    }
    if (!date.value) {
        erreur = "Veuillez renseigner une date."
    }
    if (!url.value) {
        erreur = "Veuillez renseigner un url."
    }
    if (!message.value) {
        erreur = "Veuillez renseigner un message."
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {

        var donnees = {
            email,
            date,
            url,
            message
        };

        //Envoie du formulaire
        var form = fetch("https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec", {
            method: "POST",
            apiKey: key,
            body: JSON.stringify(donnees),
            headers: {
                "Content-Type" : "application/json"
            },
        });
        alert('formulaire envoyé !');
    }

});