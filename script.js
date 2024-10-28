const showPasswordIcon = document.querySelector('.show-password');
const passwordInput = document.getElementById('password');

if (showPasswordIcon) {
  showPasswordIcon.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle icon and active state color
    this.textContent = type === 'password' ? '👁' : '🙈';
    this.classList.toggle('active', type === 'text');
  });
}

// Form validation for Create Account page
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';  // Clear any previous errors

    // Validate email format
    if (!validateEmail(email)) {
      e.preventDefault();  // Prevent form submission
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // Validate password matching
    if (password !== confirmPassword) {
      e.preventDefault();
      errorMessage.textContent = 'Passwords do not match.';
      return;
    }
  });

  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}

// Handle "Register for free" click event
const registerLink = document.getElementById('register-link');
if (registerLink) {
  registerLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'register.html'; // Redirect to the register page
  });
}
                                                                  // TOOGLED SWITCH BACKGROUND
 // JavaScript for toggling background images
const toggleBackground = document.getElementById("toggleBackground");

toggleBackground.addEventListener("change", function () {
  if (toggleBackground.checked) {
    document.body.style.backgroundImage = "url('BG DARK IT.png')";
  } else {
    document.body.style.backgroundImage = "url('BG FOODIT4.webp')";
  }
});
