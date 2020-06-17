import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { userDataProvider } from './contexts/userDataContext'
import { ingredientsDataProvider } from './contexts/ingredientsDataContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <userDataProvider>
            <ingredientsDataProvider>
                <App />
            </ingredientsDataProvider>
        </userDataProvider>
    </BrowserRouter>,
    document.getElementById('root')
);