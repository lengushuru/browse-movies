import { BASE_URL } from './apis.js';

const getComment = async (itemId) => fetch(`${BASE_URL}/comments?item_id=${itemId}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error: ${response.status}`);
  })
  .then((data) => data);
  // .catch((error) => {
  //   console.error(error);
  // });

export default getComment;