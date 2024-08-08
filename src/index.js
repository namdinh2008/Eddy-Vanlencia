// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App'; // Adjust the path as necessary
import './index.css'; // Optional: if you have a CSS file

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
