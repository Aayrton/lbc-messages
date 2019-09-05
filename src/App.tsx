import React from "react";
import logo from "./images/lbc-logo.png";
import { Message, State } from "types/messages";
import Messagecard from "components/MessageCard";
import { connect } from "react-redux";

import "./App.scss";

type Props = {
  messages: Message[];
};

const App: React.FC<Props> = ({ messages }) => {
  return (
    <div className="App">
      <img src={logo} alt="Leboncoin" className="App-logo" />
      <div className="App-messageContainer">
        {messages.map(({ text, date }: Message) => (
          <Messagecard text={text} date={date} />
        ))}
      </div>
      <div className="App-form"></div>
    </div>
  );
};

export default connect(
  (state: State) => ({
    messages: state.messages
  }),
  () => {}
)(App);
