import express from 'express';
import diaryRouter from './routes/diaries';
import diagnoseRouter from './routes/diagnose';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.use('/api/diagnose', diagnoseRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
