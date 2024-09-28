// Registration form validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let regErrors = '';
    document.getElementById('regErrorMessages').innerHTML = '';

    // Get form values
    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;
    let confirmPassword = document.getElementById('regConfirmPassword').value;
    let age = document.getElementById('regAge').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById('regCountry').value;
    let terms = document.getElementById('regTerms').checked;

    // Name validation
    if (name.trim() === '') {
        regErrors += '<p>Name is required.</p>';
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email.trim() === '') {
        regErrors += '<p>Email is required.</p>';
    } else if (!emailPattern.test(email)) {
        regErrors += '<p>Please enter a valid email address.</p>';
    }

    // Password validation
    if (password.trim() === '') {
        regErrors += '<p>Password is required.</p>';
    } else if (password.length < 6) {
        regErrors += '<p>Password must be at least 6 characters long.</p>';
    }

    // Confirm Password validation
    if (confirmPassword.trim() === '') {
        regErrors += '<p>Confirm Password is required.</p>';
    } else if (password !== confirmPassword) {
        regErrors += '<p>Passwords do not match.</p>';
    }

    // Age validation
    if (age === '' || age < 18) {
        regErrors += '<p>Age must be 18 or older.</p>';
    }

    // Gender validation
    if (!gender) {
        regErrors += '<p>Please select your gender.</p>';
    }

    // Country validation
    if (country === '') {
        regErrors += '<p>Please select your country.</p>';
    }

    // Terms and Conditions validation
    if (!terms) {
        regErrors += '<p>You must agree to the Terms and Conditions.</p>';
    }

    // If there are errors, prevent form submission
    if (regErrors !== '') {
        document.getElementById('regErrorMessages').innerHTML = regErrors;
        event.preventDefault();
    }
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    let loginErrors = '';
    document.getElementById('loginErrorMessages').innerHTML = '';

    // Get form values
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email.trim() === '') {
        loginErrors += '<p>Email is required.</p>';
    } else if (!emailPattern.test(email)) {
        loginErrors += '<p>Please enter a valid email address.</p>';
    }

    // Password validation
    if (password.trim() === '') {
        loginErrors += '<p>Password is required.</p>';
    }

    // If there are errors, prevent form submission
    if (loginErrors !== '') {
        document.getElementById('loginErrorMessages').innerHTML = loginErrors;
        event.preventDefault();
    }
});