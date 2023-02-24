
import "./Post.scss"

function Post({post}) {

    return (
        <div className='post-container'>
            <div className="post-title">{post.title}</div>
            <div className="post-body" >{post.body}</div>
        </div>
    );
}

export default Post;
