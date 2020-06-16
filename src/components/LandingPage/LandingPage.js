import React, { Component } from 'react'
import LandingPageHero from './LandingPageHero'
import HowItWorks from './HowItWorks'
import GetStarted from './GetStarted'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <main className="LandingPage__Main">
                    <LandingPageHero />
                    <HowItWorks />
                    <GetStarted />
                </main>
            </div>
        )
    }
}

export default LandingPage