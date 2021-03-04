const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const mainPageRoutes = require('./routes/main');
const hitsRoutes = require('./routes/hits');
app.use('/api', mainPageRoutes);
app.use('/hits', hitsRoutes);

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});