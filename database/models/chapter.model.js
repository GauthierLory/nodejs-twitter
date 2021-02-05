const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: String,
  index: Number,
});

const Chapters = mongoose.model('chapters', chapterSchema);
module.exports = Chapters;