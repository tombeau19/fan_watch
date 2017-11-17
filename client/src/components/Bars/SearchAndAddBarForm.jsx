import React from 'react'
import ReactTooltip from 'react-tooltip'

const SearchAndAddBarForm = (props) => {
    return (
        <div>
            <form onSubmit={props.searchForBarInfoAndPostToDataBase}>
                <input onChange={props.handleChange} type='text' name='search' value={props.search} data-tip='Click Enter' />
                <ReactTooltip/>
            </form>

        </div>
    )
}

export default SearchAndAddBarForm