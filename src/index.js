import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './navbar';
import Chuckinator from './App';

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomNavbar />
    <Chuckinator />
  </React.StrictMode>
);

const greet = () => console.log("Hello from Babel!");
greet();
