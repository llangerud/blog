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


