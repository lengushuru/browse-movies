
const renderModalPopup = (modalPopup) => {  
  const modalPopupElement = document.createElement('div');
  modalPopupElement.className = 'modal-popup';
  modalPopupElement.innerHTML = `
  <div>
     <button class = "close">close</button>
  <div class="image">
  <img src=${modalpop.image} alt="movie image">
  </div>
  <h2>name</h2>
  <p class="description">description</p>
  <ul class="comments">
    <li>comment</li>
    <li>comment</li>
    <li>comment</li>
    <li>comment</li>
    <li>comment</li>
  </ul>
<form action="">
  <input type="text" placeholder="your name">
  <input type="text" placeholder="Add a comment">
  <button type="submit">Comment</button>
</form>
  `;

  return modalPopupElement;
};

const fetchSingleShowComment = async (e) => {
  modalContainer.classList.add('show');
  const { id } = 1;
  // const { id } = e.target.parentElement.parentElement;
  const url = `https://api.tvmaze.com/episodes/${id}`;
  const response = await fetch(url);
  const result = await response.json();

  const commentResponse = await fetch(`${BASE_URL}/comments?item_id=${id}`);

  let filterResult = { ...result };

  const commentResult = await commentResponse.json();
  if (commentResult && !commentResult.error) {
    filterResult = { ...filterResult, comments: commentResult };
  } else {
    filterResult = { ...filterResult, comments: [] };
  }
console.log(renderModalPopup(filterResult));
};