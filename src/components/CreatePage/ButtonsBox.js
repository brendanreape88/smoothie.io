import React, { Component } from 'react'
import './CreatePage.css'

class ButtonsBox extends Component {
    render () {
        return (
            <div className="Buttons__Box">
                <button>upload picture</button>
                <button>save</button>
                <button>publish</button>
            </div>
        )
    }
}

export default ButtonsBox