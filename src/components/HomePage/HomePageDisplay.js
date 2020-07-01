import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import HomePageNav from './HomePageNav'
import './HomePage.css'

class HomePageDisplay extends Component {
    state = {
        numberOfSmoothies: 6
    }

    loadMoreSmoothies = () => {
        let { numberOfSmoothies } = this.state
        this.setState({
            numberOfSmoothies: numberOfSmoothies += 6
        })
    }

    render() {
        const data = this.props.recipeData
        const { numberOfSmoothies } = this.state
        console.log(data)
        return (
            <>
                <section className="HomePage__HomeDisplay">
                    <HomePageNav section={this.props.section} />
                    <div className="HomePage__HomeDisplay__FlexBox">
                        {data.map((d, i) => {
                            if(i < numberOfSmoothies) {
                                return <div className="HomePage__HomeDisplay__FlexBox__Item" key={d.id}>
                                    <Link to={`/recipe/${d.id}`}>
                                        <img 
                                            src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                                            alt="delicious green smoothie surrounded by fruit and kale"
                                    />
                                    </Link>
                                    <div className="Item__Controls">
                                        <h3 className="CardTitle">
                                            <Link to={`/recipe/${d.id}`}>
                                                {d.smoothieName}
                                            </Link>
                                        </h3>
                                        <button
                                            onClick={() => this.props.favorite(d.id)}
                                        >
                                            favorite
                                        </button>
                                        <button>
                                            <Link to={{
                                                pathname: `/create`,
                                                prepopulate: true,
                                                customId: `${d.id}`
                                            }}>
                                                customize
                                            </Link>
                                        </button>
                                        <button>
                                            <Link to={{
                                                    pathname: `/recipe/${d.id}#ReviewForm`,
                                                    reviewOn: true
                                            }}>
                                                review
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            }
                        })}
                    </div> 
                </section>
                <section className="HomePage__BottomButtons">
                    <div className="HomePage__BottomButtons__FlexBox">
                        <div className="BottomButton__More">
                            <button onClick={this.loadMoreSmoothies}>more smoothies</button>
                        </div>
                        <div className="BottomButton__Create">
                            <button>
                                <Link to ="/create">
                                    create a smoothie
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default HomePageDisplay

