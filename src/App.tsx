import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './images/lbc-logo.png';
import { Message, State } from 'types/messages';
import MessageCard from 'components/MessageCard';
import { formattedMessagesSelector } from 'selectors/messages';
import { addMessages } from 'actions/messages';

import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector(formattedMessagesSelector);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [privateFieldValue, setPrivateFieldValue] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setTextFieldValue(text.trim());
  };

  const handleSubmit = (): void => {
    const date = new Date();
    console.log(date);
    dispatch(
      addMessages({
        text: textFieldValue,
        date: date.getTime(),
        private: privateFieldValue
      })
    );

    if (inputEl && inputEl.current) {
      inputEl.current.value = '';
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Leboncoin" className="App-logo" />
      <div className="App-form">
        <input
          ref={inputEl}
          className="App-form-field"
          type="text"
          placeholder="Ecrivez votre annonce ici ..."
          onChange={handleTextFieldChange}
          required
        />
        <div className="App-form-private">
          <input
            type="checkbox"
            name="private"
            onClick={() => setPrivateFieldValue(!privateFieldValue)}
          />
          Privé
        </div>
        <button
          onClick={handleSubmit}
          className="App-form-submit"
          disabled={!textFieldValue}
        >
          Publier
        </button>
      </div>
      <div className="App-messageContainer">
        {messages.map(({ text, date }, key) => (
          <MessageCard key={key} text={text} date={date} />
        ))}
      </div>
    </div>
  );
};

export default App;
