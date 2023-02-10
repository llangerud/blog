const commentLink = document.querySelectorAll('.card-link');

commentLink.forEach(addListener);
function addListener(link) {
    link.addEventListener ('click', async function goView () {
        console.log(link.id);

//is meant to handle the below, click listener on the post gets the post ID

// WHEN I click on one of my existing posts in the dashboard
document.location.replace(`edit/${link.id}`)

}

   
)};