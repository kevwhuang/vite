'use strict';

import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

function logger(req, _, next) {
    console.table({
        time: new Date().toISOString(),
        url: `${req.protocol}://${req.get('host')}${req.path}`,
        method: req.method,
    });
    next();
}

const options = {
    credentials: true,
    origin: '*',
    methods: ['GET', 'POST'],
};

const app = express();

app.listen(process.env.PORT ?? 5000, () => {
    console.log('\x1b[35m%s\x1b[0m', `Listening on port ${process.env.PORT ?? 5000}.`);
});

app.disable('strict routing');
app.enable('case sensitive routing');
app.set('env', 'production');

app.use(express.raw());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(options));
app.use(helmet());
app.use(logger);

app.all('/', (_, res) => res.send(''));
app.all('*', (_, res) => res.status(308).redirect('/'));
