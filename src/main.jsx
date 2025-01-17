import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { Global } from '@emotion/react';
import { GlobalStyle } from './shared/styles/GlobalStyle.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Global styles={GlobalStyle} />

      <App />
    </StrictMode>
  </BrowserRouter>
);
