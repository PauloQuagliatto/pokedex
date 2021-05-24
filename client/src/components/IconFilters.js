import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addToTypeFilter } from '../actions/filters'

const IconFilters = (props) => {

    const addTypeFilter = () => {
        props.addToTypeFilter('flying')
    }
    return (
        <Fragment>
            <img className="icon-filters" src="./assets/dots.svg" alt="dots-filter"
                onClick={addTypeFilter} />
            <img className="icon-filters" src="./assets/order-icon.svg" alt="order-filter" />
            <img className="icon-filters" src="./assets/range-icon.svg" alt="range-filter" />
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToTypeFilter: (type) => dispatch(addToTypeFilter(type))
})


export default connect(undefined, mapDispatchToProps)(IconFilters)