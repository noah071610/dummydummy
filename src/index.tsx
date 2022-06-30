import { Global } from '@emotion/react';
import App from '@layouts/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { globalStyle } from './styles/globals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle()} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
