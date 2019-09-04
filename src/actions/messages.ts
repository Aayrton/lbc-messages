import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  GetMessagesAction,
  GetMessagesSuccessAction,
  GetMessagesFailureAction,
  Message
} from '../types/messages';
import { Dispatch } from 'react';
import { getMessages } from '../api';

export const fetchMessages = () => async (
  dispatch: Dispatch<
    GetMessagesAction | GetMessagesSuccessAction | GetMessagesFailureAction
  >
) => {
  dispatch({
    type: GET_MESSAGES
  });

  try {
    const messages = await getMessages();

    return dispatch({
      type: GET_MESSAGES_SUCCESS,
      payload: messages
    });
  } catch (e) {
    return dispatch({
      type: GET_MESSAGES_FAILURE,
      error: e
    });
  }
};
