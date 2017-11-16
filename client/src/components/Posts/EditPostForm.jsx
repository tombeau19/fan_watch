import React from 'react'

const EditPostForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h2>Edit</h2>
                <div>
                    <input onChange={props.handleChange}
                        name='title'
                        type="text"
                        value={props.post.title} 
                        size="2em" />
                </div>
                <div>
                    <textarea onChange={props.handleChange}
                        name='content'
                        type="text"
                        value={props.post.content}
                        size="4em" />
                </div>
                <div>
                    <button>Update Post</button>
                </div>
            </form>
        </div>
    )

}

export default EditPostForm