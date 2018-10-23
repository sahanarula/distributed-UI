import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker';

const rootComponent = <App store={ configureStore() }/>

ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
