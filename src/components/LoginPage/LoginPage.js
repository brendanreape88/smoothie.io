import React, { Component } from 'react'
import UserDataContext from '../../contexts/UserDataContext'
import { findLogin } from '../../helpers'
import './LoginPage.css'

class LoginPage extends Component {

    static contextType = UserDataContext

    onLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value
        const userData = this.context.userData
        findLogin(userData, username, password)
    }

    render() {
        return (
            <div className="LoginPage">
                <main className="LoginPage__Main">
                    <h1>Login</h1>
                    <form onSubmit={this.onLogin}>
                        <label htmlFor="username">
                            username
                        </label>
                        <br/>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            required
                        />    
                        <br/>
                        <label htmlFor="password">
                            password
                        </label>
                        <br/>
                        <input 
                            type="text"
                            name="password"
                            id="password"
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

export default LoginPage