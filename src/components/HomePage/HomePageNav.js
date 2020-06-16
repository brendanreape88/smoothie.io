import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

class HomePageNav extends Component {
    render() {
        return (
            <div className="HomePage__HomeDisplay__Nav">
                <ul>
                    <li>
                        <Link to='/home/all'>
                            All Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to='/home/favorites'>
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <Link to='/home/my-recipes'>
                            My Recipes
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomePageNav