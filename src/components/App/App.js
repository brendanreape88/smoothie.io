import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import HomePage from '../HomePage/HomePage'
import RecipePage from '../RecipePage/RecipePage'
import CreatePage from '../CreatePage/CreatePage'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Footer from '../Footer/Footer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      ingredientsData: []
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__Header'>
          <Header />
        </header>
        <main className='App__Main'>
        <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route
            path={'/home'}
            component={HomePage}
          />
          <Route
            path={'/recipe'}
            component={RecipePage}
          />
          <Route
            path={'/create'}
            component={CreatePage}
          />
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route
            path={'/register'}
            component={RegisterPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;