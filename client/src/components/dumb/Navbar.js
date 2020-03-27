import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="red">
      <div className="nav-wrapper">
        <Link to='/' className='brand-logo'>Logger</Link>
        <ul className="right">
          <li>
            <Link to='/logs'>Logs</Link>
          </li>
          <li>
            <Link to='/techs'>Techs</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
