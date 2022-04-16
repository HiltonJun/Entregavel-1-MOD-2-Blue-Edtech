const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/burgers.route');

app.use(cors());
app.use(express.json());

app.use('/burger', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
