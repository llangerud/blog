async function getNewPost(event) {
    
    event.preventDefault();
    
    const content = document.querySelector('#content').value.trim();
    const title = document.querySelector('#title').value.trim();
    console.log(JSON.stringify({title, content}));
    if (content && title) {
        const response = await fetch('/api/posts/newPost', {
          method: 'POST',
          body: JSON.stringify({title, content}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          alert('post added!')  
          document.location.replace(`/dashboard`);
        } else {
          alert('post failed, please try again');
        }
      }
    };
    
    document.querySelector('#post-btn').addEventListener('click', getNewPost);