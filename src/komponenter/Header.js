import React, {useState} from 'react'
import { Link, navigate } from '@reach/router'
import './Header.css'
import underskrift from './images/undskr.png'

const Header = ( props ) => {

  const [show, setShow] = useState(false)

    const isPartiallyActive = ({
        isPartiallyCurrent
      }) => {
        return isPartiallyCurrent
          ? { className: "active" }
          : null
      }

    return(
        <header className={show ? 'mobile' : ''} onClick={ () => setShow(false)}>
            
            <img onClick={ () => navigate(process.env.PUBLIC_URL + '/projects/')} src={underskrift} alt='underskrift'></img>
            
        <Link to={process.env.PUBLIC_URL + '/projects'} getProps={isPartiallyActive}>PROSJEKTER</Link>
        <Link to={process.env.PUBLIC_URL + '/contact'}>OM</Link>
        <Link to ='/login'>LOGIN</Link>
    
      </header>
    )
}

export default Header