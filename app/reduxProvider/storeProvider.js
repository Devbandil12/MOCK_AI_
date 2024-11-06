// app/provider.js
"use client"; // Ensure this is a client component

import { Provider } from 'react-redux';


import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';



export function ReduxProvider({ children }) {
  return(
    <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>

      {children}
    </PersistGate>
    </Provider>
     
  )
}