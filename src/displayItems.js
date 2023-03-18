const movies = document.querySelector('.movies');
const reciver = 'https://api.tvmaze.com/shows';
const totalCounter = document.querySelector('.total-counter');

const sender = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xCmQ5j175eisKv6maiDY/likes/';

// get like Item count from API
const getLike = async (itemId) => {
  const response = await fetch(sender, { method: 'GET' });
  const result = await response.text();

  const arr = JSON.parse(result);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].item_id === itemId) {
      return arr[i].likes;
    }
  }
};

const displayItems = async (imgUrl, title, itemId) => {
  const items = document.createElement('div');
  items.className = 'item-container';
  const initialCount = await getLike(itemId);
  const count = initialCount !== undefined ? initialCount : 0;
  const item = {
    itemId,
    count,
  };

  items.innerHTML = `
  <div class="movie-items">
      <div class="movie-img">
          <img src="${imgUrl}" alt="Movies Img">
          <div class="name-like">
              <p class="movie-name">${title}</p>
              
          </div>
      </div>
      <div class="like-count">
          <button id="${itemId}">Comment</button>
          <div class="like-counter">
            <i class="fa-sharp fa-solid fa-heart"></i>
            <p class="counter"> ${item.count}</p>
          </div>
          
      </div>
          
  </div>
  `;
  movies.appendChild(items);

  //   Send updated like count to API
  const sendLikeCountToAPI = async () => {
    const data = {
      item_id: item.itemId,
      count: item.count,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    await fetch(sender, options);
  };

  const counter = items.querySelector('.counter');
  const icon = items.querySelector('.fa-heart');
  icon.addEventListener('click', () => {
    icon.classList.toggle('liked');
    item.count += 1;
    counter.textContent = item.count;
    sendLikeCountToAPI();
  });
};

export const getItems = async () => {
  const response = await fetch(reciver);
  const result = await response.json();
  for (let i = 0; i < 6; i += 1) {
    displayItems(result[i].image.original, result[i].name, result[i].id);
    totalCounter.textContent = i + 1;
  }
};
