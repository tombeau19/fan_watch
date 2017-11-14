import React from 'react'

const SearchAndAddBarForm = (props) => {
    return (
        <div>
            <form onSubmit={props.searchForBarInfoAndPostToDataBase}>
                <input onChange={props.handleChange} type='text' name='search' placeholder='Bar Name' />
                <button>search</button>
            </form>

        </div>
    )
}

export default SearchAndAddBarForm