const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.URLMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('connexion ok !');
})
.catch(err => console.log(err));