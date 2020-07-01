import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function classFor(section, currentSection) {
  if (section !== currentSection)
    return "homeNotActive";
  else
    return "homeActive";
}

class HomePageNav extends Component {
    render() {
        return (
            <div className="HomePage__HomeDisplay__Nav">
                <ul>
                    <li>
                        <Link to='/home' className={classFor('all', this.props.section)}>
                            All Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to='/home/favorites' className={classFor('favorites', this.props.section)}>
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <Link to='/home/my-recipes' className={classFor('user', this.props.section)}>
                            My Recipes
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomePageNav