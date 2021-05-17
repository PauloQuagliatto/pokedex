import React, { Fragment } from 'react'

const IconFilters = () => {
    return(
        <Fragment>
            <img className="icon-filters" src="./assets/dots.svg" alt="dots-filter" />
            <img className="icon-filters" src="./assets/order-icon.svg" alt="order-filter" />
            <img className="icon-filters" src="./assets/range-icon.svg" alt="range-filter" />
        </Fragment>
    )
}

export { IconFilters as default }