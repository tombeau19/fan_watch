import React, { Component } from 'react'
import Moment from 'react-moment';

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

    deletePost = async () => {
        try {
            const { city_id, id } = this.props.match.params
            const response = await axios.delete(`/api/cities/${city_id}/posts/${id}`)
            this.setState({
                city: response.data,
                redirectToCity: true,
            })
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
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
                        <button>Delete</button>
                        <hr />
                    </div>
                )
            })}
                
            </div>
        )
    }
}

export default PostList
