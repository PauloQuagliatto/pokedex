import React, { useState } from 'react'
import { connect } from 'react-redux'
import { filterByName } from '../actions/filters'

const Filters = (props) => {
    const [name, setName] = useState(props.filters.name)
    const changeNameFilter = (e) => {
        const name = e.target.value
        setName(name)
        props.dispatch(filterByName(name))
    }
    return(
    <div>
        <input 
            placeholder="Digite nome do pokemon"
            onChange={changeNameFilter}
            value={name}
        />
    </div>
)}

const mapStateToProps = (state) => {
    return { filters: state.filters }
}

export default connect(mapStateToProps)(Filters)