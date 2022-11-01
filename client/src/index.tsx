import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';

import { App } from './app';
import './styles/styles.css';

const oidcConfig = {
  authority: 'https://accounts.google.com',
  token_endpoint: 'https://oauth2.googleapis.com/token',
  client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string,
  client_secret: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET as string,
  redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT as string,
  post_logout_redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT as string,
  response_type: 'code',
  prompt: 'consent',
  scope: ['openid', 'email'].join(' '),
};

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root container');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
