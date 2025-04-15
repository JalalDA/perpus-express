import express from 'express';
import mahasiswaRouter from './routes/mahasiswaRoutes';
import cors from 'cors'
import bukuRouter from './routes/bukuRoutes';
import rakRouter from './routes/rakRoutes';
import peminjamanRouter from './routes/peminjamanRoutes';
import historyRouter from './routes/historyRoute';

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/mahasiswa', mahasiswaRouter);
app.use('/api/rak', rakRouter);
app.use('/api/buku', bukuRouter);
app.use('/api/peminjaman', peminjamanRouter);
app.use('/api/history', historyRouter)

export default app;