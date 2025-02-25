// import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css';
import App from './App.jsx'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
// import "antd/dist/antd.min.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
