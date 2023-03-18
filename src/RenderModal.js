import postcomment from './PostComment.js';
import getComment from './GetComment.js';
import commentCounter from './Commentcount.js';

const renderModalPopup = async (modalPopup, modalid) => {
  const comments = await getComment(modalid);
  let commentsList = '';
  if (comments && comments.length > 0) {
    commentsList = comments
      .map(
        (comment) => `<li><div class='top-div'><p>${comment.creation_date}</p><p>${comment.username}</p></div><div class = 'commentdiv'>${comment.comment}</div></li>`,
      )
      .join('');
  } else {
    commentsList = '<li>No comments yet</li>';
  }
  let count = commentCounter(comments);
  const modalPopupHTML = `
    <div class="modal-popup">

      <button class="close-modal">X</button>
      <div class="image">
        <img src=${modalPopup.image.original} alt="movie image">
      </div>
      <h2>${modalPopup.name}</h2>
      <p class="description">${modalPopup.summary}</p>
      <p class="rating">Total comments: ${count}</p>
      <ul class="commentbox">
        ${commentsList}
      </ul>
      <form id="submit${modalid}">
        <input class="name" type="text" placeholder="Your name" required maxlength="50">
        <input class="comment" type="text" placeholder="Add a comment" required maxlength="200">
        <button class = "submit" type="submit">Submit</button>
      </form>
    </div>
  `;

  const modalPopupElement = document.createElement('div');
  modalPopupElement.innerHTML = modalPopupHTML;

  document.querySelector('.popup-modal').appendChild(modalPopupElement);

  modalPopupElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    count += 1;
    document.querySelector('.rating').innerHTML = `Total comments: ${count}`;
    const form = event.target;
    const name = form.querySelector('.name').value;
    const comment = form.querySelector('.comment').value;
    if (name && comment) {
      postcomment(modalid, name, comment);

      const date = new Date().toLocaleString().split(',')[0].replace(/\//g, '-');

      const update = document.createElement('li');
      update.innerHTML = `<div class='top-div'><p>${date.split(' ')[0].replace(/\//g, '-')}</p><p>${name}</p></div><div class = 'commentdiv'>${comment}</div>`;
      const commentsListElement = form.previousElementSibling;
      commentsListElement.appendChild(update);
      form.reset();
    }
  });

  document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.popup-modal').style.display = 'none';
    document.querySelector('.popup-modal').innerHTML = '';
  });

  return modalPopupElement;
};

const fetchSingleShowComment = async (e) => {
  const { id } = e.target;
  const url = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  renderModalPopup(result, id);
  document.querySelector('.popup-modal').style.display = 'block';
};

export { fetchSingleShowComment };
