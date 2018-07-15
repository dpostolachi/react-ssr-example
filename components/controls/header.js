import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <header>
            <nav className='nav justify-content-center'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
            </nav>
        </header>
    )
}
