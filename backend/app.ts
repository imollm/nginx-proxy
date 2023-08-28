import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookie from 'cookie';

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    credentials: true
}));

app.get('/api/v1/health', (_: Request, res: Response) => {
    console.log(`[${new Date().toISOString()}] - GET /api/v1/health`);
    res.json({ message: 'OK' });
});

app.listen(port, () => {
    console.log(`⚡️ Server is running on port ${port}.`);
});
