import React from 'react'
import TeamList from './Teams/TeamList'

const HomePage = (props) => {
    return (
        <div>
            {
                props.teams.map((team) => {
                    return (
                        <div>
                            <h5>{team.name}</h5>
                            <img src={team.logo} alt={`${team.name} logo`} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage