import React from 'react'
import { Link } from 'react-router-dom'

const BarList = (props) => {

    return (
        <div>
            {props.bars.map((bar) => {
                return (
                    <div>
                        <Link to={`/${props.team.id}/bars/${bar.id}`}>{bar.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default BarList