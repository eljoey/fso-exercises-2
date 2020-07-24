import express from 'express';
import diaryRouter from './routes/diaries';
import diagnoseRouter from './routes/diagnose';
import patientsRouter from './routes/patients';
import cors from 'cors';

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.use('/api/diagnose', diagnoseRouter);

app.use('/api/patients', patientsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
