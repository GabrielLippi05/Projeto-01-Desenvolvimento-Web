firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "../home/home.html";
    }
});

function onChangeInput() {
    const email = form.email().value;
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    form.passwordRequiredError().style.display = password ? "none" : "block";
    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";
    form.confirmPasswordDoesntMatchError().style.display = password === confirmPassword ? "none" : "block";

    toggleRegisterButtonDisable();
}

function register() {
    showLoading();

    const email = form.email().value;
    const password = form.password().value;
    const phone = form.phone().value;
    const position = form.position().value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            hideLoading();
            window.location.href = "../../pages/home/home.html";
        })
        .catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
        });
}

function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    return email && validateEmail(email) && password.length >= 6 && password === confirmPassword;
}

const form = {
    email: () => document.getElementById("email"),
    phone: () => document.getElementById("phone"),
    position: () => document.getElementById("position"),
    confirmPassword: () => document.getElementById("confirmPassword"),
    confirmPasswordDoesntMatchError: () => document.getElementById("password-doesnt-match-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    passwordMinLengthError: () => document.getElementById("password-min-length-error"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    registerButton: () => document.getElementById("register-button"),
};

// Função para validar o email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Funções para mostrar e esconder loading
function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");
    const label = document.createElement("label");
    label.innerText = "Carregando...";
    div.appendChild(label);
    document.body.appendChild(div);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}

// Função para obter mensagens de erro
function getErrorMessage(error) {
    if (error.code === "auth/email-already-in-use") {
        return "Email já está em uso";
    }
    return error.message; // Personalizar conforme necessário
}

// Adicionando eventos de mudança nos campos
form.email().addEventListener('input', onChangeInput);
form.password().addEventListener('input', onChangeInput);
form.confirmPassword().addEventListener('input', onChangeInput);
form.phone().addEventListener('input', onChangeInput);
form.position().addEventListener('change', onChangeInput);