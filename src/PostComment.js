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
  // .then((response) => {
  //   if (response.ok) {
  //     return response.json() ;
  //  }
  //   // else {
  //   //   throw new Error(`Error: ${response.status}`);
  //   // }
  // })
  // .catch((error) => {
  //   throw new Error(error);
  // });
};

export default postcomment;

// q: how to disable linter for specific folder?
// a: add .eslintignore file in root folder and add the folder name in it