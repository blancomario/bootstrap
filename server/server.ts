import authRoute from './routes/auth.route';
import bodyParser from 'body-parser';
import express from 'express';
import helloRoute from './routes/hello.route';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);
app.use('/api/hello', helloRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
