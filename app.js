const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { userRouter, adminRouter } = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(logger('dev'));
app.use(userRouter);
app.use(adminRouter);

app.get('/', (req, res) => res.json({ welcome: 'hello' }));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
