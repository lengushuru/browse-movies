import { BASE_URL } from './apis.js';

const postcomment = (itemId, username, comment) => {
  fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
  });
};

export default postcomment;
