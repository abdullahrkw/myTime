const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 8080;
const morgan = require('morgan');
app.use(morgan('short'));
/* Enable all cross-origin request*/
app.use(cors());
app.use(express.static('public'));
  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });