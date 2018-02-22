const INITITAL_STATE = {};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload };
    case 'password_changed':
      return { ...state, password: action.payload };
    case 'signin_success':
      return { ...state, user: action.payload, password: '', email: '' };
    case 'user_created_success':
      return { ...state, user: action.payload, password: '', email: '' };
    case 'login-failed':
      return {
        ...state,
        user: null,
        error: action.payload,
        password: '',
        email: ''
      };
    default:
      return state;
  }
};
