import React from 'react'
import ReactTooltip from 'react-tooltip'

const NewPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleNewSubmit}>
                <h2>Add New Post</h2>
                <div>
                    <input onChange={props.handleChange}
                        name='title'
                        type="text"
                        data-tip='Title'
                        size="2em" />
                </div>
                <div>
                    <textarea onChange={props.handleChange}
                        name='content'
                        type="text"
                        data-tip='Leave Review Here'
                        size="4em" />
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </form>
            <ReactTooltip/>
        </div>
    )
}

export default NewPostForm