import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
    return (
        <div>
            {
                props.teams.map((team) => {
                    return (
                        <div>
                            <h5>{team.name}</h5>
                            <Link to={`/${team.id}`}><img src={team.logo} alt={`${team.name} logo`} /></Link>
                            <button onClick={() => props.getSingleTeam(team.id)}>{team.name}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage