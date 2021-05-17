import React, { useState } from 'react'
import { connect } from 'react-redux'
import { filterByName, sortByBiggestNumber, sortBySmallestNumber } from '../actions/filters'

const InputFilter = (props) => {
    const [name, setName] = useState(props.filters.name)
    const [sort, setSort] = useState(props.filters.sortBy)
    const changeNameFilter = (e) => {
        const newName = e.target.value
        setName(newName)
        props.dispatch(filterByName(newName))
    }
    const changeSort = () => {
        if (sort === 'smallestNumber') {
            setSort('biggestNumber')
            console.log(sort)
            props.dispatch(sortByBiggestNumber(sort))
        } else if (sort === 'biggestNumber') {
            setSort('smallestNumber')
            console.log(sort)
            props.dispatch(sortBySmallestNumber(sort))
        }
    }
    return (
        <div className="input-box">
            <div>
                <img className="search-icon" src="./assets/search-icon.svg" alt="search-icon" />
                <input
                    className="filter-input"
                    placeholder="What Pokemon are you looking for?"
                    onChange={changeNameFilter}
                    value={name}
                />
            </div>
            <button
                className="filter-input"
                placeholder={sort}
                onClick={changeSort}
                value={sort}
            />

        </div>
    )
}

const mapStateToProps = (state) => {
    return { filters: state.filters }
}

export default connect(mapStateToProps)(InputFilter)