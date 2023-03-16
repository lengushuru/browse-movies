import {BASE_URL} from './apis';
const postcomment = (itemId,username,comment)=> {
  fetch(BASE_URL+'/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: itemId,
      username: username,
      comment: comment
    })
  })
    .then(response => {
      if (response.ok) {
        console.log('Comment posted successfully!');
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  export default postcomment;