import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import HomePage from '../HomePage/HomePage'
import RecipePage from '../RecipePage/RecipePage'
import CreatePage2 from '../CreatePage/CreatePage2'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Footer from '../Footer/Footer'
import './App.css'

class App extends Component {

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
            path='/'
            component={LandingPage}
          />
          <Route
            exact
            path='/home' 
            component={HomePage}
          />
          <Route
            exact
            path='/home/favorites' 
            render={() => <HomePage section="favorites"/>}
          />
          <Route
            exact
            path='/home/my-recipes' 
            render={() => <HomePage section="user"/>}
          />
          <Route
            path='/recipe/:recipeId'
            component={RecipePage}
          />
          <Route
            path='/create'
            component={CreatePage2}
          />
          <Route
            path='/login'
            component={LoginPage}
          />
          <Route
            path='/register'
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