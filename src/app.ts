require('dotenv').config();
import express from 'express';
import cors from 'cors';
import router from './router'

const PORT = process.env.PORT || 7071;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export default app;
