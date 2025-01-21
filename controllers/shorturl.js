const { response } = require('express');
const { generateShortIdFromURL } = require('../helpers/shortURLGenerator');
const { validateURL } = require('../helpers/urlValidator');
const ShortURL = require('../models/ShortURL');

const createShortURL = async (req, res, next) => {
  // console.log('POST', req.body);
  const { url } = req.body;

  if (!validateURL(url)) {
    return res.json({ error: 'invalid url' });
  }

  const uniqueShortURL = generateShortIdFromURL(url);

  try {
    const newShortURL = new ShortURL({
      original_url: url,
      short_url: uniqueShortURL,
    });

    await newShortURL.save().then(({ original_url, short_url }) => {
      res.json({
        original_url,
        short_url,
      });
    });
  } catch (error) {
    console.log(error);
  }

  next();
};

const getURLfromShortURL = async (req, res, next) => {
  const shortURL = req.params.short_url;

  const url = await ShortURL.find({ short_url: shortURL });

  res.redirect(url[0].original_url);

  next();
};

module.exports = { createShortURL, getURLfromShortURL };
