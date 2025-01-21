const { Schema, model } = require('mongoose');

const ShortURLSchema = Schema({
  original_url: String,
  short_url: String,
});

module.exports = model('ShortURL', ShortURLSchema);
