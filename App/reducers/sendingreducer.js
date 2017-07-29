import { 
  SEND_PORTCALL_CLEAR_RESULT, 
  SEND_PORTCALL, 
  SEND_PORTCALL_FAILURE, 
  SEND_PORTCALL_SUCCESS,
  SEND_PORTCALL_SELECT_LOCATION
} from '../actions/types';

const INITIAL_STATE = {
  error: undefined,
  successCode: 'none',
  sending: false,
  toLocation: null,
  fromLocation: null,
  atLocation: null,
}

const sendingReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case SEND_PORTCALL:
      return { ...state, sending: true };
    case SEND_PORTCALL_SUCCESS:
      return { ...state, sending: false, successCode: action.payload.status };
    case SEND_PORTCALL_FAILURE:
      return { ...state, sending: false, error: action.payload};
    case SEND_PORTCALL_CLEAR_RESULT:
      return { ...INITIAL_STATE };
    case SEND_PORTCALL_SELECT_LOCATION:
      return { ...state, [action.payload.locationType]: action.payload.location}
    default:
      return state;
  }
};

export default sendingReducer;