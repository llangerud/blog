

const postLink = document.querySelectorAll('.card-link');
const newPostBtn = document.querySelector('button');


newPostBtn.addEventListener('click', function goPostPage () {
    document.location.replace('/newPost');
});


postLink.forEach(addListener);
function addListener(link) {
    link.addEventListener ('click', async function goView () {
        console.log(link.id);

//is meant to handle the below, click listener on the post gets the post ID

// WHEN I click on one of my existing posts in the dashboard
document.location.replace(`api/posts/${link.id}`)

//offer delete and update on the same view 

// THEN I am able to delete or update my post and taken back to an updated dashboard




}

   
)};