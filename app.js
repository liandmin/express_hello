const Express = require("express");
const app = new Express();

app.get('/hello', (req, res) => {
  res.send('world');
});

app.listen(3000, '127.0.0.1');