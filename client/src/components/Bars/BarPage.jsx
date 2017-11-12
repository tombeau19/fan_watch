import React from 'react'
import axios from 'axios'
import PostList from '../Posts/PostList'

const BarPage = (props) => {

    // state = {
    //     team: {},
    //     bars: [],
    //     posts: []
    // }

    // async componentWillMount() {
    //     await this.getSingleTeam()
    //     await this.getTeamBars()
    //     await this.getBarPosts()
    // }

    // getSingleTeam = async () => {
    //     try {
    //         const { team_id } = this.props.match.params
    //         const response = await axios.get(`/api/teams/${team_id}`)
    //         this.setState({ team: response.data })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // getTeamBars = async () => {
    //     try {
    //         const { bar_id, team_id } = this.props.match.params
    //         const response = await axios.get(`/api/teams/${team_id}/bars/${bar_id}`)
    //         await this.setState({ bars: response.data })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // getBarPosts = async () => {
    //     try {
    //         const { team_id, bar_id } = this.props.match.params
    //         const response = await axios.get(`/api/teams/${team_id}/bars/${bar_id}/posts`)
    //         this.setState({ posts: response.data })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

 
        return (
            <div>
                <h1>bar page</h1>
            </div>
        )
    
}

export default BarPage