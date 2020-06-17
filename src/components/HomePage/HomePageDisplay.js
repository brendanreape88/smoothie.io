import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomePageNav from './HomePageNav'
import userDataContex from '../../contexts/userDataContext'
import './HomePage.css'

class HomePageDisplay extends Component {
    static contextType = userDataContex
    render() {
        const data = this.context.userData
        console.log(data)
        return (
            <section className="HomePage__HomeDisplay">
                <HomePageNav />
                <div className="HomePage__HomeDisplay__FlexBox">
                    {data.map(d => {
                        return d.userRecipes.map(dd =>
                            <div className="HomePage__HomeDisplay__FlexBox__Item" key={dd.id}>
                                <Link to={`/recipe/${dd.id}`}>
                                    <img 
                                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                                        alt="delicious green smoothie surrounded by fruit and kale"
                                />
                                </Link>
                                <div className="Item__Controls">
                                    <h3 className="CardTitle">
                                        <Link to={`/recipe/${dd.id}`}>
                                            {dd.smoothieName}
                                        </Link>
                                    </h3>
                                    <button>favorite</button>
                                    <button>customize</button>
                                    <button>review</button>
                                </div>
                            </div>
                        )
                    })}
                </div> 
            </section>
        )
    }
}

export default HomePageDisplay