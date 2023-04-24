const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(function (e) {
    onFormInput(e, form)
}, 500))
form.addEventListener('submit', function (e) {
    onFormSubmit(e, form)
})

window.addEventListener("load", (e) => {
    const retrievedUser = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (retrievedUser) {
        form.elements.email.value = retrievedUser.email
        form.elements.message.value = retrievedUser.message
    }
});

function onFormInput(e, form) {
    const user = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function onFormSubmit(e, form) {
    e.preventDefault()
    const retrievedUser = JSON.parse(localStorage.getItem('feedback-form-state'))
    console.log(retrievedUser)
    localStorage.removeItem('feedback-form-state')
    form.reset()
}
