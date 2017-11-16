import React from 'react'

const TeamList = (props) => {
    return (
        <div>
            {
                props.teams.map((team) => {
                    return (
                        <div>
                            <h5>{team.name}</h5>
                            {/* <Link to={`/${team.id}`}><img src={team.logo} alt={`${team.name} logo`} /></Link> */}
                            <button onClick={(event) => {
                                event.preventDefault()
                                props.getSingleTeam(team.id)
                            }}><img src={team.logo} alt={`${team.name} logo`} /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TeamList