import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './styles/styles.css';

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root container');

const root = createRoot(container);

root.render(<App />);
