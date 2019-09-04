import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import messagesApp from './reducers/reducers';
import './index.css';
import App from './App';
import { fetchMessages } from 'actions/messages';

const store = createStore(
  messagesApp,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchMessages());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
