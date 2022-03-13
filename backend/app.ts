import express, { Request, Response } from 'express';

// to pass the async errors to the error handler automatically
// without the need to use next() with every route
import 'express-async-errors';

import { errorHandler } from './src/middlewares/error-handler';
import apiRouter from './src/components/routes';
import morganMiddleware from './src/middlewares/morgan';

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.json());
app.use(morganMiddleware);

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to the home page!');
});

app.use(apiRouter);

app.all('*', async (req, res) => {
  res.status(404).send('Not Found!');
});

app.use(errorHandler);

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

  socket.on('callUser', (data) => {
    io.to(data.userToCall).emit('callUser', { signal: data.signalData,
      from: data.from, name: data.name });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
});

export default app;