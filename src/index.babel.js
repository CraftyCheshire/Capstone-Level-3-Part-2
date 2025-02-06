import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './navbar';
import Chuckinator from './App';

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(CustomNavbar, null), /*#__PURE__*/React.createElement(Chuckinator, null)));
const greet = () => console.log("Hello from Babel!");
greet();
