function Comment() {
    const title = "Blog Post";
    const body = 'This is my blog post';
    const comments = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: "Comment two" },
        { id: 3, text: "Comment three" },
        { id: 4, text: "Comment four" },
        { id: 5, text: "Comment five" }
    ]
    const commentBlock = (<div>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>)
    const showComments = true;
    const loading = false;
    if (loading) { return <h2>Loading...</h2> }
    return (

        <div>
            <h2>{title.toUpperCase()}</h2>
            <p>{body}</p>
            <h4>Comments ({comments.length})</h4>
            {showComments && commentBlock}

        </div>
    )
}
export default Comment;