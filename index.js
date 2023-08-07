import express from 'express';
import morgan from 'morgan';
import { posts } from './src/posts.js';

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Página de inicio', posts });
});

app.listen(4000, () => {
  console.log('Server start on http://localhost:4000');
});
