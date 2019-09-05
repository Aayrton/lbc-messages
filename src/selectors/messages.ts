import { createSelector } from 'reselect';
import { State, FormattedMessage } from 'types/messages';
import moment from 'moment';

const messagesSelector = (state: State) => state.messages;
export const formattedMessagesSelector = createSelector(
  messagesSelector,
  (messages): FormattedMessage[] => {
    moment.locale('fr');
    const formattedMessages = messages.filter(message => !message.private);

    return formattedMessages
      .sort((current, next) =>
        moment(current.date).isBefore(next.date) ? -1 : 1
      )
      .map(message => ({
        ...message,
        date: moment.unix(message.date).format('LLLL')
      }));
  }
);
