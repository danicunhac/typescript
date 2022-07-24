import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port} ✨`);
});
