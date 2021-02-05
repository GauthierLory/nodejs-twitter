const mongoose = require('mongoose');

// mongoose.connect('mongodb://gauthier:password@localhost:27017/Twitter', {
mongoose.connect('mongodb+srv://gauthier:af46!qp$@cluster0.u8ukc.mongodb.net/Twitter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('connexion ok !');
})
.catch(err => console.log(err));