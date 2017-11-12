import React, { Component } from 'react'
import axios from 'axios'
import BarList from '../Bars/BarList'
import BarPage from '../Bars/BarPage'

class TeamPage extends Component {

    state = {
        team: {},
        bars: [],
        bar: {},
        showBarPage: false
    }

    componentWillMount() {
        this.getSingleTeamAndTheirBars()
    }

    async getSingleTeamAndTheirBars() {
        try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}`)
            this.setState({ team: response.data })
        } catch (err) {
            console.log(err)
        } try {
            const { team_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars`)
            this.setState({ bars: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    getBarInfoAndPosts = async () => {
        try {
            const { team_id, bar_id } = this.props.match.params
            const response = await axios.get(`/api/teams/${team_id}/bars/${bar_id}`)
            this.setState({ bar: response.data })
        } catch (err) {
            console.log(err)
        }
    }

    toggleShowBarPage = async () => {
        //event.preventDefault()
        await this.getBarInfoAndPosts()
        await this.setState({showBarPage: !this.state.showBarPage})
    }

    render() {

        // if (this.state.showBarPage === true) {
        //     return (
        //         <div>
        //             <h1>{this.state.team.name} Fan Page</h1>
        //             <BarList bars={this.state.bars} getBarInfoAndPosts={this.getBarInfoAndPosts} toggleShowBarPage={this.toggleShowBarPage} />
        //             <BarPage bars={this.state.bars} />
        //         </div>
        //     )
        // }

        return (
            <div>
                <h1>{this.state.team.name} Fan Page</h1>
                <BarList bars={this.state.bars} getBarInfoAndPosts={this.getBarInfoAndPosts} toggleShowBarPage={this.toggleShowBarPage}/>
                {/* {this.state.showBarPage ? <BarPage bars={this.state.bars} /> : null} */}
            </div>
        )
    }
}

export default TeamPage