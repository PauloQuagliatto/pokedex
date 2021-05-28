import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import {
    filterByType,
    filterByWeakness,
    filterByStage,
    filterByWeight,
    filterByHeight
} from '../actions/filters'
import SelectTypeFilter from './SelectTypeFilter'
import SelectWeaknessFilter from './SelectWeaknessFilter'

const PokemonFiltersModal = (props) => {
    const [typesFilter, setTypesFilter] = useState([])
    const [weaknessFilter, setWeaknessFilter] = useState([])
    const [heightFilter, setHeightFilter] = useState('')
    const [weightFilter, setWeight] = useState('')
    const [stageFilter, setStage] = useState('')

    const handleFilterAndClose = () => {
        props.dispatch(filterByType(typesFilter))
        props.closeModal()
    }
    useEffect(() => {
        console.log(typesFilter)
    },[typesFilter])
    return (
        <Modal
            isOpen={!!props.isOpen}
            ariaHideApp={false}
            onRequestClose={handleFilterAndClose}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)'
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}
        >
            <div>
                <SelectTypeFilter typesFilter={typesFilter} setTypesFilter={setTypesFilter} />
            </div>
            <div>
                <SelectWeaknessFilter />
            </div>
            <div>
                <h3>Height</h3>
                <img src="./assets/Height/short.svg" alt="short-height-pokemon-icon" />
                <img src="./assets/Height/medium.svg" alt="medium-height-pokemon-icon" />
                <img src="./assets/Height/tall.svg" alt="tall-height-pokemon-icon" />
            </div>
            <div>
                <h3>Weight</h3>
                <img src="./assets/Weight/light.svg" alt="light-weight-pokemon-icon" />
                <img src="./assets/Weight/normal.svg" alt="medium-weight-pokemon-icon" />
                <img src="./assets/Weight/heavy.svg" alt="heavy-weight-pokemon-icon" />
            </div>
            <div>
                <h3>Number Range</h3>
                <input type="range" />
            </div>
        </Modal>
    )
}

const mapDispatchToProps = (state) => {
    return { filters: state.filters }
}

export default connect(mapDispatchToProps)(PokemonFiltersModal)