    import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- Important: imports the client rendering tools
import App from './App.jsx'; // <-- Imports your component

// 1. Find the target HTML element (usually an empty <div> with id="root")
const container = document.getElementById('root');

// 2. Create the React root (React 18+ way)
const root = ReactDOM.createRoot(container);

// 3. Render your App component into the root
root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
);