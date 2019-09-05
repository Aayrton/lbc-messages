export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

export interface Message {
  text: string;
  private?: boolean;
  date: number;
}
export interface FormattedMessage {
  text: string;
  date: string;
}
export interface GetMessagesAction {
  type: typeof GET_MESSAGES;
}

export interface GetMessagesSuccessAction {
  type: typeof GET_MESSAGES_SUCCESS;
  payload: Message[];
}

export interface GetMessagesFailureAction {
  type: typeof GET_MESSAGES_FAILURE;
  error: Error;
}

export interface AddMessageAction {
  type: typeof ADD_MESSAGE;
}

export interface AddMessageSuccessAction {
  type: typeof ADD_MESSAGE_SUCCESS;
  payload: Message[];
}

export interface AddMessageFailureAction {
  type: typeof ADD_MESSAGE_FAILURE;
  error: string;
}

export interface State {
  error: string;
  messages: Message[];
  loading: boolean;
}

export type MessagesActions =
  | GetMessagesAction
  | GetMessagesFailureAction
  | GetMessagesSuccessAction
  | AddMessageAction
  | AddMessageFailureAction
  | AddMessageSuccessAction;
