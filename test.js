async function getPostAndComments(postId) {
    const post = await Post.findByPk(postId, {
        include: [
            {
                model: Comment,
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            }
        ]
    });
    return post;
}

getPostAndComments(postId)
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
        console.error(error);
    });

    