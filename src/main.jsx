import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const widgetDivs = document.querySelectorAll('.nicoraynaud-finance-widget');

widgetDivs.forEach(div => {
    ReactDOM.render(
      <React.StrictMode>
        <App symbol={div.dataset.symbol}/>
      </React.StrictMode>,
        div
    );
});