import React, { Component } from 'react'
import './RegisterPage.css'

class RegisterPage extends Component {

    onRegister = (event) => {
        event.preventDefault();
        const desiredUsername = event.target.desiredUsername.value
        const desiredPassword = event.target.desirePassword.value
        console.log(desiredUsername, desiredPassword)
    }

    render() {
        return (
            <div className="RegisterPage">
                <main className="RegisterPage__Main">
                    <h1>Register</h1>
                    <form onSubmit={this.onRegister}>
                        <label htmlFor="desiredUsername">
                            <input 
                                type="text"
                                name="desiredUsername"
                                id="desiredUsername"
                                required
                            />
                            <br/>
                            desired username
                            <br/>
                        </label>
                        <br/>
                        <label htmlFor="desiredPassword">
                            <input 
                                type="text"
                                name="desiredPassword"
                                id="desiredPassword"
                                required
                             />
                            <br/>
                            desired password
                            <br/>
                        </label>
                        <br/>
                        <button>submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default RegisterPage