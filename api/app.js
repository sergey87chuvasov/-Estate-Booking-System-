import express from 'express';
import postRoute from './routes/post.route.js';

const app = express();

app.use('/api/posts', postRoute);

// app.use('/api/test', (req, res) => {
//   res.send('it works');
// });

// app.use('/api/auth/register', (req, res) => {
//   res.send('it works');
// });

// app.use('/api/auth/login', (req, res) => {
//   res.send('it works');
// });

// app.use('/api/auth/logout', (req, res) => {
//   res.send('it works');
// });

// app.use('/api/posts/', (req, res) => {
//   res.send('it works');
// });

// app.use('/api/posts/', (req, res) => {
//   res.send('it works');
// });

// app.use('/api/posts/1111', (req, res) => {
//   res.send('it works');
// });

app.listen(8800, () => {
  console.log('Server is running');
});
