function validateForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var classe = document.querySelector('input[name="classe"]:checked');
    var axePrefere = document.getElementById('axePrefere').value;

    var errorList = [];

    if (!nom || !prenom || !email || !classe || !axePrefere) {
        if (!nom) errorList.push("Le champ Nom est obligatoire !");
        if (!prenom) errorList.push("Le champ Prénom est obligatoire !");
        if (!email) errorList.push("Le champ Email est obligatoire !");
        if (!classe) errorList.push("Veuillez sélectionner une classe !");
        if (!axePrefere) errorList.push("Veuillez choisir un axe préféré!");
    } else {
     document.querySelector('.message-success').style.display = 'block';
        return;
    }
    var errorContainer = document.querySelector('.message-error ul');
    errorContainer.innerHTML = "";
    errorList.forEach(function (error) {
        var li = document.createElement('li');
        li.textContent = error;
        errorContainer.appendChild(li);
    });
    document.querySelector('.message-error').style.display = 'block';
    document.querySelector('.message-success').style.display = 'none';
}