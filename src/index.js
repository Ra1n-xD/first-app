import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = React.createElement('h2', { className: 'classHi' }, 'Уебище');
const text = 'Ку еблан';

const elem = (
  <div>
    <h2 className="baba">ШООО {text}?</h2>
    <input type="text" />
    <button>ТЫК</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elem);
