import React from "react";
import "./index.scss";

type Props = {
  text: string;
  date: string;
};

const MessageCard: React.FC<Props> = ({ text, date }) => (
  <div className="MessageCard">
    <div>{text}</div>
    <div className="MessageCard-date">{date}</div>
  </div>
);

export default MessageCard;
