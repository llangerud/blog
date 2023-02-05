//event listeners for Home, Dashboard, Sign up and Log in

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', function goHome () {
    console.log('clicked');
    document.location.replace('/');
});


