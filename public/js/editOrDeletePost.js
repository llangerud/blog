const postId = document.querySelector('#post-id').value.trim();
const title = document.querySelector('#title').value.trim();
const content = document.querySelector('#content').value.trim();


const editBtn = document.querySelector('#edit');
editBtn.addEventListener('click', async function sendEdit () {
    console.log(postId);
    const response = await fetch(`/api/posts/edit/update/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
       (alert)('post updated');
       document.location.replace('/dashboard');
      } else {
        alert('edit failed');
      }
    
});


const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', async function sendDelete () {
    const response = await fetch(`/api/posts/edit/delete/${postId}`, {
        method: 'DELETE',
        // body: JSON.stringify({ title, content }),
        // headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert('deleted')
        document.location.replace('/dashboard');
      } else {
        alert('delete failed');
      }
});