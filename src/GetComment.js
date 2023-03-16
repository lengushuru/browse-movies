import {BASE_URL} from './apis';

const getComment = async (itemId) =>{
  
  return fetch(BASE_URL+'/comments'+ '?item_id=' + itemId)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.error(error);
  });

}

export default getComment;