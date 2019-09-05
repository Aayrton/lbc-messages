import React from 'react';
import './index.scss';
import { Moment } from 'moment';

type Props = {
  text: string;
  date: string;
};

const MessageCard: React.FC<Props> = ({ text, date }) => (
  <div className="MessageCard">
    <div className="MessageCard-text">{text}</div>
    <div className="MessageCard-date">{date}</div>
  </div>
);

export default MessageCard;
