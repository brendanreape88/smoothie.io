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
        console.log(username, password)
        const userData = this.context.userData
        findLogin(userData, username, password)//ok, so what are you doing with this?
        //shouldn't the helper function just confirm that the username and password is correct,
        //then change state to "isLoggedIn", then give an auth token?
    }

    render() {
        return (
            <div className="LoginPage">
                <main className="LoginPage__Main">
                    <h1>Login</h1>
                    <form onSubmit={this.onLogin}>
                        <label htmlFor="username">
                            <input 
                                type="text"
                                name="username"
                                id="username"
                                required
                            />
                            <br/>
                            username
                            <br/>
                        </label>
                        <br/>
                        <label htmlFor="password">
                            <input 
                                type="text"
                                name="password"
                                id="password"
                                required 
                            />
                            <br/>
                            password
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

export default LoginPage