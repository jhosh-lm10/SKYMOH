import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { AppDataSource } from './data-source';
import { runAutomations } from './services/automation';
import { runBot } from './services/bot';
import contactsRouter from './routes/contacts';
import leadsRouter from './routes/leads';
import messagingRouter from './routes/messaging';
import tasksRouter from './routes/tasks';
import teamChatRouter from './routes/teamChat';
import authMiddleware from './middlewares/auth';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contacts', authMiddleware, contactsRouter);
app.use('/api/leads', authMiddleware, leadsRouter);
app.use('/api/messaging', authMiddleware, messagingRouter);
app.use('/api/tasks', authMiddleware, tasksRouter);
app.use('/api/team-chat', authMiddleware, teamChatRouter);

const PORT = Number(process.env.PORT) || 5000;

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  socket.on('team-message', (msg) => {
    io.emit('team-message', msg);
  });
});

AppDataSource.initialize()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    runAutomations();
    runBot(io);
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });
