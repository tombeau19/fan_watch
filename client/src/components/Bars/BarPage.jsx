import React, { Component } from 'react'
import axios from 'axios'
import PostList from '../Posts/PostList'

class BarPage extends Component {

    state = {
        team: {},
        bars: [],
        posts: []
    }

    async componentWillMount() {
        await this.getSingleTeam()
        await this.getTeamBars()
        await this.getBarPosts()
    }

    getSingleTeam = async () => {
        try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    getTeamBars = async () => {
        try {
            const { bar_id, team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars/${bar_id}`)
            await this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    getBarPosts = async () => {
        try {
            const { team_id, bar_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars/${bar_id}/posts`)
            this.setState({ posts: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.team.name} Fan Page </h1>
                <h3>{this.state.bars.name}</h3>
                <h4>yelp rating: {this.state.bars.rating}</h4>
                <img src={this.state.bars.image_url} alt={`${this.state.bars.name} picture`} />
                <PostList posts={this.state.posts}/>
            </div>
        )
    }
}

export default BarPage