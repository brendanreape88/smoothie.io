import React, { Component } from 'react'
import './RegisterPage.css'

class RegisterPage extends Component {

    onRegister = (event) => {
        event.preventDefault();
        const desiredUsername = event.target.desiredUsername.value
        const desiredPassword = event.target.desiredPassword.value
        console.log(desiredUsername, desiredPassword)
    }

    render() {
        return (
            <div className="RegisterPage">
                <main className="RegisterPage__Main">
                    <h1>Register</h1>
                    <form onSubmit={this.onRegister}>
                        <label htmlFor="desiredUsername">
                            desired username
                        </label>
                        <br/>
                        <input 
                            type="text"
                            name="desiredUsername"
                            id="desiredUsername"
                            required
                        />    
                        <br/>
                        <label htmlFor="desiredPassword">
                            desired password
                        </label>
                        <br/>
                        <input 
                            type="text"
                            name="desiredPassword"
                            id="desiredPassword"
                            required 
                        />
                        <br/>
                        <button>submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default RegisterPage