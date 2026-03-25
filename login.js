// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    // Redirect to main page if already logged in
    window.location.href = 'index.html';
  }
});

// Demo credentials
const DEMO_ACCOUNTS = [
  { username: 'admin', password: '123456' },
  { username: 'user', password: 'password' },
  { username: 'manager', password: 'manager123' }
];

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Validate inputs
  if (!username || !password) {
    showError('Vui lòng nhập tên đăng nhập và mật khẩu');
    return;
  }

  // Verify credentials
  const isValidAccount = DEMO_ACCOUNTS.some(
    account => account.username === username && account.password === password
  );

  if (!isValidAccount) {
    showError('Tên đăng nhập hoặc mật khẩu không đúng');
    document.getElementById('password').value = '';
    return;
  }

  // Login successful
  loginUser(username, rememberMe);
});

// Handle guest access
document.getElementById('guestLink').addEventListener('click', () => {
  loginUser('guest', true);
});

/**
 * Save user info to localStorage and redirect
 * @param {string} username - Username to save
 * @param {boolean} rememberMe - Whether to save login permanently
 */
function loginUser(username, rememberMe) {
  const userData = {
    username: username,
    loginTime: new Date().toISOString(),
    rememberMe: rememberMe
  };

  // Save to localStorage
  localStorage.setItem('currentUser', username);
  localStorage.setItem('userData', JSON.stringify(userData));
  
  // Set session flag
  sessionStorage.setItem('loggedIn', 'true');

  showSuccess(`Đăng nhập thành công! Chào mừng ${username}`);

  // Redirect after 1 second
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

/**
 * Display error message
 * @param {string} message - Error message to display
 */
function showError(message) {
  const errorDiv = document.getElementById('errorMsg');
  const errorText = document.getElementById('errorText');
  errorText.textContent = message;
  errorDiv.classList.remove('hidden');

  // Hide after 5 seconds
  setTimeout(() => {
    errorDiv.classList.add('hidden');
  }, 5000);
}

/**
 * Display success message
 * @param {string} message - Success message to display
 */
function showSuccess(message) {
  const successDiv = document.getElementById('successMsg');
  const successText = document.getElementById('successText');
  successText.textContent = message;
  successDiv.classList.remove('hidden');
}
