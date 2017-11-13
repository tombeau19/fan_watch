import React from 'react'

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