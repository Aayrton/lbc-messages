import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import { State, Message } from 'types/messages';

type Props = {
  messages: Message[];
};

const MessagesContainer: React.FC = ({ messages }: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default connect(
  (state: State) => ({
    messages: state.messages
  }),
  () => {}
)(MessagesContainer);
