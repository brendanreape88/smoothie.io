import React, { Component } from 'react'
import HomePageDisplay from './HomePageDisplay'
import BottomButtons from './BottomButtons'
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <main className="HomePage__Main">
                    <HomePageDisplay />
                    <BottomButtons />
                </main>
            </div>
        )
    }
}

export default HomePage