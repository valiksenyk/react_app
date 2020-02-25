import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './helpers';

import { configureFakeBackend } from './helpers/fake-backend'
// configureFakeBackend(); // modify fetch method

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
