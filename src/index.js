import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Task from './CallBack+Props/Task';
import ArrayTAsk from './React-docs/ArrayTAsk';
import LoopArray from './React-docs/LoopArray';
import HookForm from './React-Hook_form/HookForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      <ArrayTAsk/>
    </StrictMode>
);

reportWebVitals();
