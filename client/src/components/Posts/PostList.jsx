import React from 'react'

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList
