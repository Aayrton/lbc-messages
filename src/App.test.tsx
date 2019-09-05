import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const state = {
  messages: [
    {
      text: 'Hello! je souhaiterais vendre mon armoire Ikea',
      date: 1567637626,
      private: false
    },
    {
      text: 'Vends TV 4K UHD',
      date: 1567641226,
      private: false
    },
    {
      text: 'Vends une',
      date: 1567644826,
      private: true
    },
    {
      text: 'Achete ps4 neuvre sur Paris',
      date: 1567709878,
      private: false
    },
    {
      text: '1 + 1 = 2',
      date: 1567709878,
      private: false
    }
  ]
};

it('renders without crashing', () => {
  const store = mockStore(state);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the messages', () => {
  const store = mockStore(state);
  const div = document.createElement('div');
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    getByText('Hello! je souhaiterais vendre mon armoire Ikea')
  ).toBeInTheDocument();
});
