import React from 'react'
import { Link } from 'react-router-dom'
import BarPage from './BarPage'

const BarList = (props) => {

    return (
        <div>
            {props.bars.map((bar) => {
                return (
                    <div>
                        <button onClick={props.toggleShowBarPage}>{bar.name}</button>
                        {props.showBarPage ? <BarPage bar={bar}/>:null}
                    </div>
                )
            })}
        </div>
    )
}

export default BarList