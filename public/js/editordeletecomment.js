const commentId = document.querySelector('#comment-id').value.trim();
const content = document.querySelector('#content').value.trim();


const editBtn = document.querySelector('#edit');
editBtn.addEventListener('click', async function sendEdit () {
    console.log(commentId);
    const response = await fetch(`/api/posts/edit/update/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
       (alert)('comment updated');
       document.location.replace('/api/comments/');
      } else {
        alert('edit failed');
      }
    
});