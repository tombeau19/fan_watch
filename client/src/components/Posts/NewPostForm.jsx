import React from 'react'

const NewPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleNewSubmit}>
                <h2>Add New Post</h2>
                <div>
                    <input onChange={props.handleChange}
                        name='title'
                        type="text"
                        placeholder='Title'
                        size="2em" />
                </div>
                <div>
                    <textarea onChange={props.handleChange}
                        name='content'
                        type="text"
                        placeholder='Leave Review Here'
                        size="4em" />
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm