// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Save user details
    saveUserDetails(username, password);
    alert('User details saved!');

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    // Simulate a successful login
    if (username != null && password != null) {
        errorMessage.textContent = '';
        alert('Login successful!');
        // Redirect to another page or perform another action
        // window.location.href = 'homepage.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }

    function saveUserDetails(username, password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); // Note: Storing passwords like this is insecure; this is just for demonstration
    }
    
    function getUserDetails() {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        return { username, password };
    }
    
    function saveUserDetails(username, password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password); // Note: Storing passwords like this is insecure; this is just for demonstration
    }

    function getUserDetails() {
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');
        return { username, password };
    }    
});
