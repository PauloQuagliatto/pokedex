import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { filterByName } from '../actions/filters'

const InputFilter = (props) => {
    const [name, setName] = useState('')
    const changeNameFilter = (e) => {
        const newName = e.target.value
        setName(newName)
        props.dispatch(filterByName(newName))
    }
    return (
            <div className="input-box">
                <img className="search-icon" src="./assets/search-icon.svg" alt="search-icon" />
                <input
                    className="filter-input"
                    placeholder="What Pokemon are you looking for?"
                    onChange={changeNameFilter}
                    value={name}
                />
            </div>
    )
}

const mapStateToProps = (state) => {
    return { filters: state.filters }
}

export default connect(mapStateToProps)(InputFilter)