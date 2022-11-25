import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading = {null}
    >
       <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

export * from './components';
export * from './hooks';
export * from './store';
export * from './types';
export * from './ui';
export * from './Images';
export * from './pages';