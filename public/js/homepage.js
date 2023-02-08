//adds a listener on all the post titles that redirects to the viewpost view

const postLink = document.querySelectorAll('.card-link');
postLink.forEach(addListener);
function addListener(link) {
    link.addEventListener ('click', async function goView () {
        console.log(link.id);
 document.location.replace(`api/posts/${link.id}`)
}

   
)};


