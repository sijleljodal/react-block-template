import React from 'react'
import { Link, navigate } from '@reach/router'
import './Header.css'
import underskrift from './images/undskr.png'

const Header = ( props ) => {

    const isPartiallyActive = ({
        isPartiallyCurrent
      }) => {
        return isPartiallyCurrent
          ? { className: "active" }
          : null
      }

    return(
        <header>
            
            <img onClick={ () => navigate('/projects/')} src={underskrift} alt='underskrift'></img>
            
        <Link to='/projects' getProps={isPartiallyActive}>PROSJEKTER</Link>
        <Link to='/contact'>OM</Link>
    
      </header>
    )
}

export default Header