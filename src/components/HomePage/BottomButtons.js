import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

class BottomButtons extends Component {
    render() {
        return (
            <section className="HomePage__BottomButtons">
                <div className="HomePage__BottomButtons__FlexBox">
                    <div className="BottomButton__More">
                        <button>more recipes</button>
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
        )
    }
}

export default BottomButtons