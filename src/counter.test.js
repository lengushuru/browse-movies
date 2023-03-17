const counter = require('./counter.js');

test('counts number of items in result', () => {
  const result = [
    {
      id: 1, url: 'https://www.tvmaze.com/shows/1/under-the-dome', name: 'Under the Dome', type: 'Scripted', language: 'English',
    },

    {
      id: 2, url: 'https://www.tvmaze.com/shows/2/person-of-interest', name: 'Person of Interest', type: 'Scripted', language: 'English',
    },

    {
      id: 3, url: 'https://www.tvmaze.com/shows/3/bitten', name: 'Bitten', type: 'Scripted', language: 'English',
    },

    {
      id: 4, url: 'https://www.tvmaze.com/shows/4/arrow', name: 'Arrow', type: 'Scripted', language: 'English',
    },

    {
      id: 5, url: 'https://www.tvmaze.com/shows/5/true-detective', name: 'True Detective', type: 'Scripted', language: 'English',
    },

    {
      id: 6, url: 'https://www.tvmaze.com/shows/6/the-100', name: 'The 100', type: 'Scripted', language: 'English',
    },
  ];
  expect(counter(result)).toEqual(6);
});
