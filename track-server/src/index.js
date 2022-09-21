require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

//const mongoUri = '';
//Vào trang https://cloud.mongodb.com/ để đăng ký dùng
const mongoUri = 'mongodb+srv://tinhvan:vhuynhatinhn@cluster0.tfm0onq.mongodb.net/test999?retryWrites=true&w=majority';
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

// app.get('/', requireAuth, (req, res) => {
//   res.send(`Your email: ${req.user.email}`);
// });

app.get('/hi', (req, res) => {
  res.send("Hello nha");
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
