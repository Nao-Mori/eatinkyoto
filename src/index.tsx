import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Layout from './Component/Layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

serviceWorker.unregister();
