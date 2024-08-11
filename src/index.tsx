import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginProviderProvider } from './context/login/LoginProviderContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoginProviderProvider>
      <App />
    </LoginProviderProvider>
  </React.StrictMode>
);

reportWebVitals();
