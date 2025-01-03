import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './App'; // Import the router configuration

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with RouterProvider
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Use the router from App.js */}
  </React.StrictMode>
);
