import React, { Component } from 'react'
import axios from 'axios'

class TeamList extends Component {

    state = {
        team: {}
    }

    componentWillMount() {
        this.getSingleTeam()
    }

    async getSingleTeam() {
        try {
            const {team_id} = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.team.name} Fan Page</h1>
            </div>
        )
    }
}

export default TeamList