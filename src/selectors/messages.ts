import { createSelector } from "reselect";
import { State } from "types/messages";
// import moment = require("moment");

// const messagesSelector = (state: State) => state.messages;
// export const formattedMessagesSelector = createSelector(
//   messagesSelector,
//   messages => {
//     const formattedMessages = messages.map((message) => {
//       if(message.private) {
//         return null
//       }
//       return {...message, date: moment(message.date) }
//     })

//     return formattedMessages.sort((current, next) => moment(previous.date))
//   }
// );
