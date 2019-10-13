import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyles from './styles/GlobalStyles';

// redux configuration imports
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));


