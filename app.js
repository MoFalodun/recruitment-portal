const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { userRouter } = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(userRouter);


app.get('/', (req, res) => res.json({ welcome: 'hello' }));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
