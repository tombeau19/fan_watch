import React, { Component } from 'react'
import Moment from 'react-moment'
import axios from 'axios'
import EditPostForm from './EditPostForm'
import NewPostForm from './NewPostForm'


class PostList extends Component {

    state = {
        bar: {},
        post: {},
        editPostDetails: false,
        showNewPostForm: false
    }

    componentWillMount = async () => {
        const bar = { ...this.props.bar }
        await this.setState({ bar })
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

    toggleNewPost = async () => {
        await this.setState({showNewPostForm: !this.state.showNewPostForm})
    }

    toggleEditSinglePost = async (id) => {
        const post_id = id
        const bar_id = this.state.bar.id
        const response = await axios.get(`/api/bars/${bar_id}/posts/${post_id}`)
        await this.setState({ post: response.data })
        await this.setState({ editPostDetails: !this.state.editPostDetails })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedPost = { ...this.state.post }
        updatedPost[attribute] = event.target.value
        this.setState({ post: updatedPost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const bar_id = this.state.post.bar_id
        const id = this.state.post.id
        const clonedPost = { ...this.state.post }
        const response = await axios.patch(`/api/bars/${bar_id}/posts/${id}`, {
            post: clonedPost
        })
        await this.setState({bar: response.data, editPostDetails: !this.state.editPostDetails})
    }

    handleNewSubmit = async (event) => {
        event.preventDefault()
        const bar_id = this.state.bar.id
        console.log(bar_id)
        const newPost = { ...this.state.post }
        console.log(newPost)
        const response = await axios.post(`/api/bars/${bar_id}/posts/`, {
            post: newPost
        })
        console.log(response.data)
        await this.setState({bar: response.data, showNewPostForm: !this.state.showNewPostForm})
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleNewPost}>Add A Comment</button>
                {this.state.showNewPostForm ? <NewPostForm post={this.state.post} handleChange={this.handleChange} handleNewSubmit={this.handleNewSubmit}/>: null}
                {this.state.bar.posts.map((post) => {
                    if (post.id === this.state.post.id && this.state.editPostDetails === true) {
                        return (
                            <div>
                                <hr />
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <p><Moment fromNow>{post.created_at}</Moment></p>
                                <button onClick={() => this.toggleEditSinglePost(post.id)}>Edit</button>
                                <button onClick={() => this.deletePost(post.id)}>Delete</button>
                                <EditPostForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} post={this.state.post}/>
                                <hr />
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <hr />
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <p><Moment fromNow>{post.created_at}</Moment></p>
                                <button onClick={() => this.toggleEditSinglePost(post.id)}>Edit</button>
                                <button onClick={() => this.deletePost(post.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default PostList
