import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading = {null}
    >
       <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);

export * from './components';
export * from './hooks';
export * from './store';
export * from './types';
export * from './ui';
export * from './Images';