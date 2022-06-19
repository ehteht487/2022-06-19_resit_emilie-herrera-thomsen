const contactForm = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const errorFirstName = document.querySelector("#errorFirstName");

const email = document.querySelector("#email");
const errorEmail = document.querySelector("#errorEmail")

const subject = document.querySelector("#subject");
const errorSubject=document.querySelector("#errorSubject");

const message = document.querySelector("#message");
const errorMessage = document.querySelector("#errorMessage");





function validatingForm() {
    event.preventDefault()

    if(testValueOfInput(firstName.value, 5)) {
        errorFirstName.style.display = "none"
    }
    else {
        errorFirstName.style.display = "block"
    }
    if(testValueOfInput(subject.value, 15)) {
        errorSubject.style.display = "none"
    }
    else {
        errorSubject.style.display = "block"
    }
    if(testValueOfInput(message.value, 25)) {
        errorMessage.style.display = "none"
    }
    else {
        errorMessage.style.display = "block"
    }
    if(validatingEmail(email.value) === true) {
        errorEmail.style.display = "none";
    }
    else {
        errorEmail.style.display = "block";
    }
}

function validatingEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matches = regEx.test(email);
    return matches;
}

function testValueOfInput(value, number) {
    if(value.trim().length > number) {
        return true
    }
    else {
        return false
    }
}



contactForm.addEventListener("submit", validatingForm);
