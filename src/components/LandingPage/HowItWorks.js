import React, { Component } from 'react'
import './LandingPage.css'

class HowItWorks extends Component {
    render() {
        return (
            <section className="LandingPage__HowItWorks">
                <h3>How it works</h3>
                <div className="LandingPage__HowItWorks__Box">
                    <img 
                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                        alt="delicious green smoothie surrounded by fruit and kale"
                    />
                    <ul>
                        <li>Browse through the list of recipes submitted by our users</li>
                        <li>Choose to "favorite" it, review it, or customize it</li>
                        <li>You can also create a recipe from scratch</li>
                        <li>Once your done you can publish it so others can enjoy it</li>
                    </ul>
                </div> 
            </section>
        )
    }
}

export default HowItWorks