import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import HomePageDisplay from './HomePageDisplay';
it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createMemoryHistory()
  ReactDOM.render(
      <Router history={history}>
          <HomePageDisplay />
      </Router>,
    div
  );
});