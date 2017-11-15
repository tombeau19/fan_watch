import React from 'react'
import ConfirmLink from 'react-confirm-dialog'

const SearchAndAddBarForm = (props) => {
    return (
        <div>
            <form onSubmit={props.searchForBarInfoAndPostToDataBase}>
                <input onChange={props.handleChange} type='text' name='search' value={props.search} placeholder='Bar Name' />
                <button>search</button>
            </form>

        </div>
    )
}

export default SearchAndAddBarForm