// Referências
var provider = new firebase.auth.GithubAuthProvider();
var authButton = document.getElementById('authButton');
var displayName = document.getElementById('displayName');

// Ao clicar no botão, autentica
authButton.addEventListener('click', function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem vindo, ' + result.user.displayName;
            authButton.disabled = true;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
});