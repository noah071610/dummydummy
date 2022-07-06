import { Global } from '@emotion/react';
import App from '@layouts/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
import { globalStyle } from './styles/globals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={globalStyle()} />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
