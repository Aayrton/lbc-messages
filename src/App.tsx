import React from 'react';
import logo from './logo.svg';
import MessagesContainer from './components/MessagesContainer';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <MessagesContainer />
    </div>
  );
};

export default App;
