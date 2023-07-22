document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  
  document.getElementById('password').addEventListener('change', function(event) {
    checkPasswordStrength(event.target.value);
  });
  
  function validateForm() {
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous error messages
    errorMessage.innerHTML = '';
  
    if (fullName.length < 5) {
      errorMessage.innerHTML = 'Name must be at least 5 characters long';
      return;
    }
  
    if (!email.includes('@')) {
      errorMessage.innerHTML = 'Enter a valid email address';
      return;
    }
  
    if (phone === '123456789' || !/^\d{10}$/.test(phone)) {
      errorMessage.innerHTML = 'Enter a valid 10-digit phone number';
      return;
    }
  
    if (password.length < 8 || password === 'password' || password === fullName) {
      errorMessage.innerHTML = 'Password is not strong enough';
      return;
    }
  
    if (password !== confirmPassword) {
      errorMessage.innerHTML = 'Passwords do not match';
      return;
    }
  
    // If all validations pass, submit the form (You can add the code to submit the form here)
  }
  
  function checkPasswordStrength(password) {
    const errorMessage = document.getElementById('error-message');
  
    if (password.length < 8 || password === 'password') {
      errorMessage.innerHTML = 'Password is not strong enough';
    } else {
      errorMessage.innerHTML = '';
    }
  }
  