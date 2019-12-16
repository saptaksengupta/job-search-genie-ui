import React from 'react';
import ReactDOM from 'react-dom';

// importing the bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './app/containers/App';
import * as serviceWorker from './app/serviceWorker';

import { Provider } from 'react-redux';
import Store from './app/store';

let storeInstance = Store();
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();