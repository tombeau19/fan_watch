import React from 'react'
import {Link} from 'react-router-dom'

const BarList = (props) => {
    return (
        <div>
            {props.bars.map((bar) => {
                return (
                    <div>
                        {bar.name}
                    </div>
                )
            })}
        </div>
    )
}

export default BarList