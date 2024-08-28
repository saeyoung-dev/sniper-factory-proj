const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get('/', async (req, res) => {
  const delay = parseInt(req.query.t) || 0;
  await new Promise((resolve) => setTimeout(resolve, delay));
  res.json({ message: `${delay}ms 지연된 응답입니다.`, time: new Date() });
});

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
