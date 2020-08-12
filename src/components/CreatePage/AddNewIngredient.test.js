import React from 'react';
import ReactDOM from 'react-dom';
import AddNewIngredient from '../CreatePage/AddNewIngredient';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewIngredient />, div);
});