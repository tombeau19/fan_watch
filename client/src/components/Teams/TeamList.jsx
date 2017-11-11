import React, { Component } from 'react'
import axios from 'axios'
import BarList from '../Bars/BarList'

class TeamList extends Component {

    state = {
        team: {},
        bars: []
    }

    componentWillMount() {
        this.getSingleTeam()
    }

    async getSingleTeam() {
        try {
            const {team_id} = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
        } catch (err) {
            console.log(err)
        } try {
            const {team_id} = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars`)
            this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.team.name} Fan Page</h1>
                <BarList bars={this.state.bars}/>
            </div>
        )
    }
}

export default TeamList