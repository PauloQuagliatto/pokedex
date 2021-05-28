import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import {
    setPokemonStartNumberFilter, 
    setPokemonEndNumberFilter, 
    sortByAZ,
    sortByZA,
    sortBySmallestNumber,
    sortByBiggestNumber } from '../actions/filters'

const PokemonSortModal = (props) => {
    const [smallSelected, setSmallSelected] = useState('sort-item sort-item__selected')
    const [bigSelected, setBigSelected] = useState('sort-item')
    const [azSelected, setAZSelected] = useState('sort-item')
    const [zaSelected, setZASelected] = useState('sort-item')

    const handleSelected = (e) => {
      const value = e.target.value
      if(value === 'smallNum'){
        setSmallSelected('sort-item sort-item__selected')
        setBigSelected('sort-item')
        setAZSelected('sort-item')
        setZASelected('sort-item')
      }else if(value === 'bigNum'){
        setSmallSelected('sort-item')
        setBigSelected('sort-item sort-item__selected')
        setAZSelected('sort-item')
        setZASelected('sort-item')
      }else if(value === 'AZ'){
        setSmallSelected('sort-item')
        setBigSelected('sort-item')
        setAZSelected('sort-item sort-item__selected')
        setZASelected('sort-item')
      }else if(value === 'bigNum'){
        setSmallSelected('sort-item')
        setBigSelected('sort-item')
        setAZSelected('sort-item')
        setZASelected('sort-item sort-item__selected')
      }
    }
    const handleSortAndClose = () => {
        props.closeModal()
    }

    return (
        <Modal
            className="modal-basic-z-position"
            isOpen={!!props.isOpen}
            ariaHideApp={false}
            onRequestClose={handleSortAndClose}
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
            }}>
            <div className="modal-box">
                <h1 className="modal-title">Sort</h1>
                <h3>Sort Pokémons alphabetically or by National Pokédex number!</h3>
                <div className="sort-box">
                    <button className={smallSelected}  value="smallNum" onClick={handleSelected}>Smallest Number First</button>
                    <button className={bigSelected} value="bigNum" onClick={handleSelected}>Highest Number First</button>
                    <button className={azSelected} value="AZ" onClick={handleSelected}>A-Z</button>
                    <button className={zaSelected} value="ZA" onClick={handleSelected}>Z-A</button>
                </div>
            </div>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setPokemonStartNumberFilter: (startNumber) => dispatch(setPokemonStartNumberFilter(startNumber)),
    setPokemonEndNumberFilter: (endNumber) => dispatch(setPokemonEndNumberFilter(endNumber)),
    sortByAZ: () => dispatch(sortByAZ()),
    sortByZA: () => dispatch(sortByZA()),
    sortBySmallestNumber:  () => dispatch(sortBySmallestNumber()),
    sortByBiggestNumber: () => dispatch(sortByBiggestNumber())
})

export default connect (mapDispatchToProps)(PokemonSortModal)