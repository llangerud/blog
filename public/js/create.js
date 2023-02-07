// sends a fetch request to the api/userRoutes and creates user 
async function getUserInfo(event) {
    
    event.preventDefault();
    
    const email = document.querySelector('#email-create').value.trim();

    const username = document.querySelector('#username-create').value.trim();

    const password = document.querySelector('#password-create').value.trim();

    if (email && password && username) {
        const response = await fetch('/api/users/create', {
          method: 'POST',
          body: JSON.stringify({email, username, password}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          alert('account created!')  
          document.location.replace('/dashboard');
        } else {
          alert('account creation failed, please try again');
        }
      }
    };
    
    document.querySelector('#create-form').addEventListener('submit', getUserInfo);