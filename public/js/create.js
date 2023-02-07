// sends a fetch request to the api/userRoutes and creates user 
async function getUserInfo() {
    
    
    const email = document.querySelector('#email-create').value.trim();

    const username = document.querySelector('#username-create').value.trim();

    const password = document.querySelector('#password-create').value.trim();

    
    
    if (email && password && username) {
        console.log(JSON.stringify({email, username, password}));
        const response = await fetch('/api/users/create', {
          method: 'POST',
          body: JSON.stringify({email, username, password}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          alert('account created! Please login to continue')  
          document.location.replace('/users/login');
        } else {
          alert('account creation failed, please try again');
        }
      }
    };
    
    document.querySelector('#create').addEventListener('submit', getUserInfo);