function validateFieldUser() {
    toogleButtonDisable();
    toogleUserErrors();
};

function validateFieldPassword() {
    toogleButtonDisable();
    tooglePasswordErrors();
};

// function validateUser(usuario) {
//     return /\S+@\S+\.\S/.test(usuario);
// };

// function isUserValid() {
//     const usuario = document.getElementById("usuario").value;

//     if (!usuario) {
//         return false;
//     };
//     return validateUser(usuario);
// };

function toogleUserErrors() {
    const usuario = document.getElementById("usuario").value;
    if (!usuario) {
        document.getElementById("user-required-error").style.display = "flex";
    } else {
        document.getElementById("user-required-error").style.display = "none";
    };

    // if (validateUser(usuario)) {
    //     document.getElementById("user-invalid-error").style.display = "none";
    // } else {
    //     document.getElementById("user-invalid-error").style.display = "flex";
    // };
};

function tooglePasswordErrors() {
    const password = document.getElementById("senha").value;
    if (!password) {
        document.getElementById("password-required-error").style.display = "flex";
    } else {
        document.getElementById("password-required-error").style.display = "none";
    };

    if (isPasswordMin(password)) {
        document.getElementById("password-lenght-min-error").style.display = "none";
    } else {
        document.getElementById("password-lenght-min-error").style.display = "flex";
    };

    if (isPasswordMax(password)) {
        document.getElementById("password-lenght-max-error").style.display = "none";
    } else {
        document.getElementById("password-lenght-max-error").style.display = "flex";
    };
};

function isPasswordValid() {
    const password = document.getElementById("senha").value;
    if (!password) {
        return false;
    } else{
        return true;
    }
};

function isPasswordMin() {
    const password = document.getElementById("senha").value;
    if (password.length < 4) {
        return false;
    } else {
        return true;
    }
};

function isPasswordMax() {
    const password = document.getElementById("senha").value;
    if (password.length > 10) {
        return false;
    } else {
        return true;
    }
}

function toogleButtonDisable() {
    // const userValid = isUserValid();
    const passwordValid = isPasswordValid();
    const passwordMin = isPasswordMin();
    const passwordMax = isPasswordMax();
    document.getElementById("btn-login").disabled = !passwordValid || !passwordMin || !passwordMax;
};

function enterTab(inputId, event){
    if(event.keyCode == 13){
        document.getElementById(inputId).focus();
    }
};

function arrowUp(inputId, event){
    if(event.keyCode == 38){
        document.getElementById(inputId).focus();
    }
};

function loadingPage() {
    setTimeout(function(){ 
        document.getElementById("loading").style.display="none";
        document.getElementById("main").style.display="flex";
    }, 4000);
}