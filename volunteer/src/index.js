import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext"
import axios from 'axios'

axios.defaults.baseURL = 'https://toyban-backend.herokuapp.com/api/'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>

  </React.StrictMode>
);