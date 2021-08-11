import React from 'react'
import {Weatherdata} from './Weatherdata'
import {useSelector} from 'react-redux'

function Footer() {
  const {isWhetherSet} = useSelector(state => state.setInitial)
    return (
        <>
            <footer>
            {isWhetherSet ? (
              <Weatherdata/>
            ) : (
              <h3>No Data Available</h3>
            )}
          </footer>
        </>
    )
}

export default Footer;