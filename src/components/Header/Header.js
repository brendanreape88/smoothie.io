import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SmoothieContext from '../../contexts/SmoothieContext'
import './Header.css'

class Header extends Component {

    static contextType = SmoothieContext

    logOut = (event) => {
        this.context.logOut()
    }

    render() {
        const user = this.context.user
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                    Smoothie.io
                    </Link>
                </h1>
                <div className='Header__Menu'>
                    <span>
                        {user
                            ? (
                                <Link to='/' onClick={this.logOut}>
                                    logout
                                </Link>
                            )
                            : (
                                <Link to='/login'>
                                    login
                                </Link>
                            )
                        } 
                    </span>
                    <span>
                        <Link to='/home'>
                            smoothies
                        </Link>
                    </span>
                    <span>
                        <Link to='/create'>
                            create
                        </Link>
                    </span>
                </div>
            </nav>
        )
    }
}

export default Header