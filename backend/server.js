import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/database';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('Server is running on port 3000'));

