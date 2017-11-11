import React, { Component } from 'react'
import axios from 'axios'

class BarPage extends Component {

    state = {
        team: {},
        bars: []
    }

    async componentWillMount() {
        try {
            const { id, team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars/${id}`)
            await this.setState({
                bars: response.data
            })
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        } try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({
                team: response.data
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.team.name} Fan Page </h1>
                <h3>{this.state.bars.name}</h3>
                <h4>yelp rating: {this.state.bars.rating}</h4>
                <img src={this.state.bars.image_url} alt={`${this.state.bars.name} picture`}/>
            </div>
        )
    }
}

export default BarPage