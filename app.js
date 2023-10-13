let express = require('express');
let cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());

//Index
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//3a. Add the configuration for the MongoDB database.
let mongoose = require('mongoose');
let LocalURL = 'mongodb://localhost:27017/DressStore';
let CloudURL = 'mongodb+srv://yoyohohoh:Yob1718N925@cluster0.apmkivg.mongodb.net/DressStore';

mongoose.connect(CloudURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Routes
let productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

module.exports = app;

