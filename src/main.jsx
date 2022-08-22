import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/CounterApp';
import { CounterCustomApp } from './components/CounterCustomApp';
import { HooksApp } from './HooksApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp />
    <CounterApp /> */}
    <CounterCustomApp />
  </React.StrictMode>
)
