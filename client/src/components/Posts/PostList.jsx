import React, { Component } from 'react'
import Moment from 'react-moment'
import axios from 'axios'

class PostList extends Component {

    state = {
        bar: {},
        post: {},
        posts: [],
        editPostDetails: false,
        redirectToBar: false
    }

    componentWillMount = async () => {
        const bar = {...this.props.bar}
        this.setState({bar})
    }

    deletePost = async (id) => {
        try {
            const post_id = id
            const bar_id = this.state.bar.id
            const response = await axios.delete(`/api/bars/${bar_id}/posts/${post_id}`)
            this.setState({ bar: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <button>Add A Comment</button>
                {this.state.bar.posts.map((post) => {
                return (
                    <div>
                        <hr />
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p><Moment fromNow>{post.created_at}</Moment></p>
                        <button>Edit</button>
                        <button onClick={() => this.deletePost(post.id)}>Delete</button>
                        <hr />
                    </div>
                )
            })}
                
            </div>
        )
    }
}

export default PostList
