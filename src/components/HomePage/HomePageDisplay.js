import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomePageNav from './HomePageNav'
import './HomePage.css'

class HomePageDisplay extends Component {
    render() {
        return (
            <section className="HomePage__HomeDisplay">
                <HomePageNav />
                <div className="HomePage__HomeDisplay__FlexBox">
                            <div className="HomePage__HomeDisplay__FlexBox__Item">
                                <Link to={`/recipe`}>
                                    <img 
                                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                                        alt="delicious green smoothie surrounded by fruit and kale"
                                />
                                </Link>
                                <div className="Item__Controls">
                                    <h3 className="CardTitle">
                                        <Link to={`/recipe`}>
                                            smoothie name
                                        </Link>
                                    </h3>
                                    <button>favorite</button>
                                    <button>customize</button>
                                    <button>review</button>
                                </div>
                            </div>
                </div> 
            </section>
        )
    }
}

export default HomePageDisplay