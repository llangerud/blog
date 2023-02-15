const commentId = document.querySelector('#comment-id').value.trim();
const content = document.querySelector('#content').value.trim();


const editBtn = document.querySelector('#edit');
editBtn.addEventListener('click', async function sendEdit () {
    console.log(commentId);
    console.log(content);
    const response = await fetch(`/api/comments/edit/update/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
       (alert)('comment updated');
       document.location.replace('/api/comments/');
      } else {
        alert('edit failed');
      }
    
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', async function sendDelete () {

    const response = await fetch(`/api/comments/edit/delete/${commentId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
       (alert)('comment deleted');
       
      } else {
        alert('edit failed');
      }
    
});