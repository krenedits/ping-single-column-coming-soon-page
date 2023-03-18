const form = document.getElementById('form');
const email = document.getElementById('email');
const errorText = document.getElementById('error-text');

const EMPTY_MESSAGE = 'Whoops! It looks like you forgot to add your email';
const INVALID_MESSAGE = 'Please provide a valid email';
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = email.value;

    const error = validateEmail(emailValue);
    errorText.innerText = error;

    email.classList[error ? 'add' : 'remove']('error');
});

const validateEmail = (email) => {
    if (!email) {
        return EMPTY_MESSAGE;
    }

    if (!EMAIL_REGEX.test(email)) {
        return INVALID_MESSAGE;
    }

    return '';
};
