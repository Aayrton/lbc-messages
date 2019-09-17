import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  MessagesActions,
  State,
  GET_MESSAGES_FAILURE,
  ADD_MESSAGE,
  ADD_MESSAGE_SUCCESS
} from '../types/messages';

const initialState: State = {
  error: '',
  messages: [],
  loading: false
};

const MessagesReducer = (
  state = initialState,
  action: MessagesActions | any
) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, error: '', loading: true };

    case GET_MESSAGES_SUCCESS:
      return { ...state, error: '', messages: action.payload };

    case GET_MESSAGES_FAILURE:
      return { ...state, error: action.error, loading: false };

    case ADD_MESSAGE:
      return { ...state, error: '', loading: true };
    case ADD_MESSAGE_SUCCESS:
      return { ...state, error: '', messages: action.payload, loading: false };
    default:
      return state;
  }
};

export default MessagesReducer;
