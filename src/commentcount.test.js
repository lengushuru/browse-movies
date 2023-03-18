const commentCounter = require('./Commentcount.js');

describe('commentCounter', () => {
  test('returns the correct count of comments', () => {
    const commentContainer = ['Comment 1', 'Comment 2', 'Comment 3'];
    const count = commentCounter(commentContainer);
    expect(count).toBe(3);
  });

  test('returns 0 when no comments are present', () => {
    const commentContainer = [];
    const count = commentCounter(commentContainer);
    expect(count).toBe(0);
  });

  test('returns 1 when only one comment is present', () => {
    const commentContainer = ['Comment 1'];
    const count = commentCounter(commentContainer);
    expect(count).toBe(1);
  });
});
