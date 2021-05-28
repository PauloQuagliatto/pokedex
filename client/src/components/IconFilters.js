import React, { Fragment } from 'react'

const IconFilters = (props) => {


    return (
        <Fragment>
            <img className="icon-filters" src="./assets/Filters/generations-icon.svg" alt="generations-filter"
                 />
            <img className="icon-filters" src="./assets/Filters/order-icon.svg" alt="order-filter" 
                onClick={props.openSortModal}
            />
            <img className="icon-filters" src="./assets/Filters/filters-icon.svg" alt="filters-filter"
            onClick={props.openFiltersModal} />
        </Fragment>
    )
}



export { IconFilters as default }