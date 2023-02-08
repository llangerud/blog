async function getComment(event) {
    
    event.preventDefault();
    
    const content = document.querySelector('.input').value.trim();
    const getId = document.querySelector('.card-link');
    console.log(getId.id);
    const post = getId.id;

    if (content) {
        const response = await fetch('/api/comments/new', {
          method: 'POST',
          body: JSON.stringify({content, post}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          alert('comment added!')  
          document.location.replace(`/`);
        } else {
          alert('account creation failed, please try again');
        }
      }
    };
    
    document.querySelector('#comment-btn').addEventListener('click', getComment);