import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserDataProvider } from './contexts/UserDataContext'
import { IngredientsDataProvider } from './contexts/IngredientsDataContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter basename="/smoothie.io">
        <UserDataProvider>
            <IngredientsDataProvider>
                <App />
            </IngredientsDataProvider>
        </UserDataProvider>
    </BrowserRouter>,
    document.getElementById('root')
);