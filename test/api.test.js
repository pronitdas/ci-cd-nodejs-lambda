const assert = require('assert');
const handler = require('../handler');

describe('Simple Api Test', () => {
  it('should return 200', async () => {
    const res = await handler.hello();
    assert.equal(res.statusCode, 200);
  });
});
