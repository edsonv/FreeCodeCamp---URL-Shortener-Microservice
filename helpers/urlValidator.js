const validateURL = (url) => {
  const parsedURL = new URL(url);

  if (parsedURL.protocol === 'https:' || parsedURL.protocol === 'http:') {
    return true;
  }

  return false;
};

module.exports = { validateURL };
