// File: HealthWatch/static/app.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username.length === 0 || password.length === 0) {
                alert('Please fill in both username and password.');
                event.preventDefault();
            }
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (username.length === 0 || email.length === 0 || password.length === 0) {
                alert('Please fill in all the required fields.');
                event.preventDefault();
            } else {
                alert('Registration successful!');
            }
        });
    }
});
