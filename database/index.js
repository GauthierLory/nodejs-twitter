const mongoose = require('mongoose');

mongoose.connect('mongodb://gauthier:password@localhost:27017/Twitter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('connexion ok !');
})
.catch(err => console.log(err));