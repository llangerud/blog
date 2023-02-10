

const postLink = document.querySelectorAll('.card-link');
const newPostBtn = document.querySelector('#post-btn');
const viewCommentBtn = document.querySelector('#comment-btn');

newPostBtn.addEventListener('click', function goPostPage () {
    document.location.replace('/newPost');
});

 viewCommentBtn.addEventListener('click', function goMyCommentsPage () {
    document.location.replace('/api/comments/');
});


postLink.forEach(addListener);
function addListener(link) {
    link.addEventListener ('click', async function goView () {
        console.log(link.id);

//is meant to handle the below, click listener on the post gets the post ID

// WHEN I click on one of my existing posts in the dashboard
document.location.replace(`api/posts/edit/${link.id}`)

}

   
)};