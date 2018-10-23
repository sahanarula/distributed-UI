import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './containers/Dashboard';

export default function App ({ routes, store }) {
    return (
        <Provider store = { store }>
            <Dashboard />
        </Provider>
    );
}
