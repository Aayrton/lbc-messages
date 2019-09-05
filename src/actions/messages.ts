import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  GetMessagesAction,
  GetMessagesSuccessAction,
  GetMessagesFailureAction,
  Message,
  ADD_MESSAGE,
  AddMessageAction,
  ADD_MESSAGE_FAILURE,
  ADD_MESSAGE_SUCCESS,
  AddMessageSuccessAction,
  AddMessageFailureAction
} from '../types/messages';
import { Dispatch } from 'react';
import { getMessages, createMessage } from '../api';

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

export const addMessages = (message: Message) => async (
  dispatch: Dispatch<
    AddMessageSuccessAction | AddMessageFailureAction | AddMessageAction
  >
) => {
  dispatch({
    type: ADD_MESSAGE
  });

  try {
    const messages = await createMessage(message);

    return dispatch({
      type: ADD_MESSAGE_SUCCESS,
      payload: messages
    });
  } catch (e) {
    return dispatch({
      type: ADD_MESSAGE_FAILURE,
      error: e
    });
  }
};
