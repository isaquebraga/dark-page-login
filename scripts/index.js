function validateFieldUser() {
    toogleButtonDisable();
    toogleUserErrors();
};

function validateFieldPassword() {
    toogleButtonDisable();
    tooglePasswordErrors();
};

function validateUser(usuario) {
    return /\S+@\S+\.\S/.test(usuario);
};

function isUserValid() {
    const usuario = document.getElementById("usuario").value;

    if (!usuario) {
        return false;
    };
    return validateUser(usuario);
};

function toogleUserErrors() {
    const usuario = document.getElementById("usuario").value;
    if (!usuario) {
        document.getElementById("user-required-error").style.display = "flex";
    } else {
        document.getElementById("user-required-error").style.display = "none";
    };

    if (validateUser(usuario)) {
        document.getElementById("user-invalid-error").style.display = "none";
    } else {
        document.getElementById("user-invalid-error").style.display = "flex";
    };
};

function tooglePasswordErrors() {
    const password = document.getElementById("senha").value;
    if (!password) {
        document.getElementById("password-required-error").style.display = "flex";
    } else {
        document.getElementById("password-required-error").style.display = "none";
    };
};

function toogleButtonDisable() {
    const userValid = isUserValid();
    const passwordValid = isPasswordValid();
    document.getElementById("btn-login").disabled = !userValid || !passwordValid;
};

function isPasswordValid() {
    const password = document.getElementById("senha").value;
    if (!password) {
        return false;
    };
    return true;
};

function validForm() {
    window.location.assign("/registered.html");
}
