export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LISTING_CREATE':
      payload.userId = state.user_id;
      return [payload, ...state];
    default:
      return state;
  }
};
