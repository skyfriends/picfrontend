import superagent from 'superagent';

export const photoSend = photo => ({
  type: 'PHOTO_SEND',
  payload: photo,
});

export const photoSendRequest = photo => (dispatch, getState) =>
  
