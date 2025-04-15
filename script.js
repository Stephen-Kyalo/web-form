// Function to validate the name field
function validateName() {
    const name = document.getElementById('name').value;
    const errorSpan = document.getElementById('name-error');
    if (name.trim() === '') {
        errorSpan.textContent = 'Name is required';
        return false;
    } else if (name.length < 3) {
        errorSpan.textContent = 'Name must be at least 3 characters long';
        return false;
    } else {
        errorSpan.textContent = ''; // Clear error if valid
        return true;
    }
}

// Function to validate the email field
function validateEmail() {
    const email = document.getElementById('email').value;
    const errorSpan = document.getElementById('email-error');
    if (email.trim() === '') {
        errorSpan.textContent = 'Email is required';
        return false;
    } else if (!isValidEmail(email)) {
        errorSpan.textContent = 'Invalid email format';
        return false;
    } else {
        errorSpan.textContent = ''; // Clear error if valid
        return true;
    }
}

// Helper function to check email format using regex
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return regex.test(email);
}

// Function to validate the password field
function validatePassword() {
    const password = document.getElementById('password').value;
    const errorSpan = document.getElementById('password-error');
    if (password === '') {
        errorSpan.textContent = 'Password is required';
        return false;
    } else if (password.length < 8) {
        errorSpan.textContent = 'Password must be at least 8 characters long';
        return false;
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        errorSpan.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
        return false;
    } else {
        errorSpan.textContent = ''; // Clear error if valid
        return true;
    }
}

// Function to validate the confirm password field
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorSpan = document.getElementById('confirm-password-error');
    if (confirmPassword === '') {
        errorSpan.textContent = 'Confirm password is required';
        return false;
    } else if (confirmPassword !== password) {
        errorSpan.textContent = 'Passwords do not match';
        return false;
    } else {
        errorSpan.textContent = ''; // Clear error if valid
        return true;
    }
}

// Function to validate the terms checkbox (Bonus)
function validateTerms() {
    const terms = document.getElementById('terms').checked;
    const errorSpan = document.getElementById('terms-error');
    if (!terms) {
        errorSpan.textContent = 'You must agree to the terms and conditions';
        return false;
    } else {
        errorSpan.textContent = ''; // Clear error if valid
        return true;
    }
}

// Add event listener to handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isTermsValid = validateTerms();

    // If all validations pass, display success message
    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isTermsValid) {
        alert('Form submitted successfully');
    }
});

// Optional: Real-time validation on blur for better user experience
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('confirm-password').addEventListener('blur', validateConfirmPassword);
document.getElementById('terms').addEventListener('change', validateTerms);