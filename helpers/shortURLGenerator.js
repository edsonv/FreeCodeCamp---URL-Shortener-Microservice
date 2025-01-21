const crypto = require('crypto');

const generateShortIdFromURL = (url, length = 10) => {
  const hash = crypto.createHash('md5').update(url).digest('base64url');
  return hash.slice(0, length);
};

module.exports = { generateShortIdFromURL };
