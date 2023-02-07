//event listeners for Home, Dashboard, Sign up and Log in

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', function goHome () {
    document.location.replace('/');
});

const loginLink = document.querySelector('#login');
loginLink.addEventListener('click', function goLogin () {
    document.location.replace('/login');
});

const dashboardLink = document.querySelector('#dashboard');
dashboardLink.addEventListener('click', function goDashboard(){
    document.location.replace('/dashboard');
});

const signupLink = document.querySelector('#signup');
signupLink.addEventListener('click', function goSignup () {
    document.location.replace('/create');
});

const logoutLink = document.querySelector('#logout');
logoutLink.addEventListener('click', async function goLogout () {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('logged out')  
        document.location.replace('/login');
      } else {
        alert('did not log out');
      }
});



