const inputName = document.getElementById("input-name");
const cardName = document.getElementById("card-name");
const nameMessageError = document.getElementById("name-error");

const inputNumber = document.getElementById("input-number");
const cardNumber = document.getElementById("card-number");
const numberMessageError = document.getElementById("number-error");

const inputMM = document.getElementById("input-mm");
const cardMM = document.getElementById("card-mm");
const inputYY = document.getElementById("input-yy");
const cardYY = document.getElementById("card-yy");
const dateMessageError = document.getElementById("date-error");

const inputCVC = document.getElementById("input-cvc");
const cardCVC = document.getElementById("card-cvc");
const cvcMessageError = document.getElementById("cvc-error");

const confirm = document.getElementById("confirm");

const formContainer = document.getElementById("main-form");
const completeContainer = document.getElementById("main-complete");

//Card Name
inputName.addEventListener("input", () => {

    if (isNaN(inputName.value)) {
        cardName.innerHTML = inputName.value.toUpperCase();
    } else {
        inputName.value = "";
        cardName.innerHTML = "YOUR NAME";
    }
})

//Card Number
inputNumber.addEventListener("input", () => {

    // Remove qualquer caractere que não seja número
    inputNumber.value = inputNumber.value.replace(/\D/g, '');

    // Adiciona espaço a cada grupo de 4 dígitos
    inputNumber.value = inputNumber.value.replace(/(\d{4})/g, '$1 ');

    // Remove qualquer espaço adicional no final
    inputNumber.value = inputNumber.value.trim();

    cardNumber.innerHTML = inputNumber.value;

    if (inputNumber.value == "") {
        cardNumber.innerHTML = "0000 0000 0000 0000";
    }
})

//Card MM
inputMM.addEventListener("input", () => {

    if (isNaN(inputMM.value)) {
        inputMM.value = "";
    } else {
        if (inputMM.value.length == 1) {
            cardMM.innerHTML = "0" + inputMM.value;
        } else {
            cardMM.innerHTML = inputMM.value;
        }
    }

    if (inputMM.value == "") {
        cardMM.innerHTML = "00";
    }

})

//Card YY
inputYY.addEventListener("input", () => {

    if (isNaN(inputYY.value)) {
        inputYY.value = "";
    } else {
        if (inputYY.value.length == 1) {
            cardYY.innerHTML = "0" + inputYY.value;
        } else {
            cardYY.innerHTML = inputYY.value;
        }
    }

    if (inputYY.value == "") {
        cardYY.innerHTML = "00";
    }
})

//Card CVC
inputCVC.addEventListener("input", () => {

    if (isNaN(inputCVC.value)) {
        inputCVC.value = "";
    } else {
        if (inputCVC.value.length == 1) {
            cardCVC.innerHTML = "00" + inputCVC.value;
        } else if (inputCVC.value.length == 2) {
            cardCVC.innerHTML = "0" + inputCVC.value;
        }
        else {
            cardCVC.innerHTML = inputCVC.value;
        }
    }

    if (inputCVC.value == "") {
        cardCVC.innerHTML = "000";
    }
})

confirm.addEventListener("click", (event) => {
    let errorName   = false;
    let errorNumber = false;
    let errorMM     = false;
    let errorYY     = false;
    let errorCVC    = false;

    if (inputName.value == "") {
        inputName.classList.add("input-error");
        nameMessageError.style.display = "block";
        errorName = true;
        event.preventDefault();
    } else {
        inputName.classList.remove("input-error");
        nameMessageError.style.display = "none";
        errorName = false;
    }

    if (inputNumber.value != "" && inputNumber.value.length < 19) {
        inputNumber.classList.add("input-error");
        numberMessageError.innerHTML = "The card must contain 16 numbers"
        numberMessageError.style.display = "block";
        errorNumber = true;
        event.preventDefault();
    } else if (inputNumber.value == "") {
        inputNumber.classList.add("input-error");
        numberMessageError.innerHTML = "Can't be blank"
        numberMessageError.style.display = "block";
        errorNumber = true;
        event.preventDefault();
    } else {
        inputNumber.classList.remove("input-error");
        numberMessageError.style.display = "none";
        errorNumber = false;
    }

    if (inputMM.value.length < 2 || inputMM.value == "") {
        inputMM.classList.add("input-error");
        dateMessageError.style.display = "block";
        errorMM = true;
        event.preventDefault();
    } else {
        inputMM.classList.remove("input-error");
        dateMessageError.style.display = "none";
        errorMM = false;
    }

    if (inputYY.value.length < 2 || inputMM.value == "") {
        inputYY.classList.add("input-error");
        dateMessageError.style.display = "block";
        errorYY = true;
        event.preventDefault();
    } else {
        inputYY.classList.remove("input-error");
        dateMessageError.style.display = "none";
        errorYY = false;
    }

    if (inputCVC.value.length < 3 || inputCVC.value == "") {
        inputCVC.classList.add("input-error");
        cvcMessageError.style.display = "block";
        errorCVC = true;
        event.preventDefault();
    } else {
        inputCVC.classList.remove("input-error");
        cvcMessageError.style.display = "none";
        errorCVC = false;
    }

    if (errorName == false && errorNumber == false && errorMM == false && errorYY == false && errorCVC == false) { 
        formContainer.style.display = "none";
        completeContainer.style.display = "flex";
        event.preventDefault();
    }
})






