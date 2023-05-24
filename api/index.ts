import app from '../src/app';
import router from '../src/router/index';

app.use('/', router);
app.get('/test', (req, res) => res.status(200).json('TEST-OK'));
