import React from 'react'
import { Link } from 'react-router-dom'

const BarList = (props) => {

    return (
        <div>
            {props.bars.map((bar) => {
                return (
                    <div>
                        <button onClick={() => props.getSingleBarInfoAndPosts(bar.id)}>{bar.name}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default BarList