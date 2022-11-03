import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import './styles/index.scss';
import './styles/_utils/_normalize.scss';
import './styles/_utils/_mainSlider.scss';



ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
